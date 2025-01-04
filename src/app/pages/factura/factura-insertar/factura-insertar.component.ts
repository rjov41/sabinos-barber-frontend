import { CommonModule } from '@angular/common';
import {
  ButtonModule,
  CardModule,
  ColorModeService,
  GridModule,
  ModalModule,
  ModalService,
  SpinnerComponent,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { FormModule } from '@coreui/angular';
import { Component, inject } from '@angular/core';
import { NgbHighlight, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, OperatorFunction, of, interval } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../../services/clientes.service';
import { EmpleadosService } from '../../../services/empleados.service';
import { ParametersUrl } from '../../../models/Parameter.model';
import logger from '../../../shared/utils/logger';
import { Cliente } from '../../../models/Cliente.model';
import { Empleado } from '../../../models/Empleado.model';
import { IModalAction } from '@coreui/angular/lib/modal/modal.service';
import { Producto, ProductoPedido } from '../../../models/Producto.model';
import { PedidoService } from '../../../services/pedido.service';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-factura-insertar',
  standalone: true,
  imports: [
    CardModule,
    GridModule,
    FormModule,
    IconDirective,
    CommonModule,
    NgbTypeaheadModule,
    FormsModule,
    SpinnerComponent,
    NgbHighlight,
    ModalModule,
    ButtonModule,
  ],
  templateUrl: './factura-insertar.component.html',
  styleUrl: './factura-insertar.component.scss',
})
export class FacturaInsertarComponent {
  private destruir$: Subject<void> = new Subject<void>();
  clienteModel: any;
  clienteId!: number;
  empleadoModel: number = 0;
  MedioPagoModel: number = 0;

  LoadingSearchClient: boolean = false;
  loadingEmpleados: boolean = false;
  loadingProductos: boolean = false;

  private _ClientesService = inject(ClientesService);
  private _EmpleadosService = inject(EmpleadosService);
  private _ModalService = inject(ModalService);
  private _PedidoService = inject(PedidoService);
  #colorModeService = inject(ColorModeService);

  Empleados: Empleado[] = [];
  Productos: ProductoPedido[] = [];
  PrecioTotal: number = 0;

  ngOnInit(): void {
    this.getEmpleados();
    // this.getProductos();
    this.refrescarListado();
  }

  formatterValue = (x: { nombre_completo: string } | string) =>
    typeof x === 'string' ? x : x.nombre_completo;

  searchClient: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      tap(() => (this.LoadingSearchClient = true)),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((valorInput) => {
        let listadoFilter: ParametersUrl = {
          estado: 1,
          disablePaginate: '1',
          filter: valorInput,
          link: null,
        };
        // logger.log('aa', valorInput);
        return this._ClientesService.getClientes(listadoFilter).pipe(
          catchError(() => {
            this.LoadingSearchClient = true;
            return of([]);
          }),
          map((value) => {
            this.LoadingSearchClient = false;

            return value;
          })
        );
      })
    );

  eventInputTypeHead({ item }: { item: Cliente }) {
    setTimeout(() => {
      logger.log('item', item);
      this.clienteModel = `${item.nombre} ${item.apellido}`;
      this.clienteId = Number(item.id);
      // const controlInversion = this.getControlFormArray();
      // const patchValue = {
      //   codigo: item.id,
      //   // producto: productoCompleto.descripcion,
      //   marca: item.marca,
      // };
      // console.log(patchValue);

      // controlInversion[i].patchValue(patchValue);
    }, 10);
  }

  refrescarListado() {
    interval(3000)
      .pipe(
        startWith(0), // Emite inmediatamente al suscribirse
        takeUntil(this.destruir$), // Desuscribe automáticamente en ngOnDestroy
        map((x) => {
          // logger.log('llamando a la api', x);
          this.getProductos();
          return x;
        })
      )
      .subscribe((result) => {
        // Puedes manejar el resultado aquí si es necesario
      });
  }

  getEmpleados() {
    this.loadingEmpleados = true;
    this._EmpleadosService
      .getEmpleadoes({
        estado: 1,
        disablePaginate: '1',
        link: null,
      })
      // .pipe(delay(3000))
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Empleado[]) => {
        this.loadingEmpleados = false;
        this.Empleados = [...data];
      });
  }

  getProductos() {
    // this.loadingProductos = true;
    this.Productos = this._PedidoService.obtenerListado();
    this.PrecioTotal = this.Productos.reduce((prod_anterior, prod_actual) => {
      return prod_anterior + prod_actual.precioTotal;
    }, 0);
  }

  eliminarProductoCarrito(producto: Producto) {
    // this.loadingProductos = true;

    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    })
      .fire({
        // title: '¿Desea eliminar?',
        text: '¿Desea eliminar del carrito ?.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#51cbce',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        Swal.mixin({
          customClass: {
            container: this.#colorModeService.getStoredTheme(
              environment.SabinosTheme
            ),
          },
        })
          .fire({
            icon: 'success',
          })
          .then((result) => {
            this._PedidoService.eliminarProductoPorId(Number(producto.id));
            this.getProductos();
          });
      });
  }

  modalStatusById(id: string, show: boolean) {
    const action: IModalAction = { show, id };
    this._ModalService.toggle(action);
  }

  validarFactura(): boolean {
    return this.clienteId !== 0 &&
      this.clienteModel !== '' &&
      this.empleadoModel != 0 &&
      this.Productos.length > 0 &&
      this.MedioPagoModel != 0
      ? true
      : false;
  }

  facturar() {
    let factura = {
      cliente: this.clienteId,
      empleado: this.empleadoModel,
      productos: this.Productos,
      medio_pago: this.MedioPagoModel,
      total: this.PrecioTotal,
    };
    logger.log('factura', factura);
    // if (!this.validarFactura()) {
    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    }).fire({
      icon: 'info',
      title: 'Atención',
      text: 'Debes completar todos los campos',
    });
    // }

    logger.log('validarFactura', this.validarFactura());
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
