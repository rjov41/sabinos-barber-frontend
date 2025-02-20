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
import {
  NgbHighlight,
  NgbModal,
  NgbModalRef,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
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
import { ProductosPedidoComponent } from './productos-pedido/productos-pedido.component';
import { FacturaPedidoComponent } from '../factura-pedido/factura-pedido.component';
import { MetodoPagoService } from '../../../services/metodos_pago.service';
import { MetodoPago } from '../../../models/MetodoPago.model';
import { FacturasService } from '../../../services/facturas.service';
import { Factura } from '../../../models/Factura.model';
import { DirectivesModule } from '../../../shared/directivas/directives.module';
import { HelpersService } from '../../../services/helpers.service';

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
    ProductosPedidoComponent,
    DirectivesModule,
  ],
  templateUrl: './factura-insertar.component.html',
  styleUrl: './factura-insertar.component.scss',
})
export class FacturaInsertarComponent {
  private destruir$: Subject<void> = new Subject<void>();
  clienteId!: number;

  clienteModel: any;
  empleadoModel: number = 0;
  MedioPagoModel: number = 0;
  DescuentoModel: number = 0;
  DescripcionModel!: string;
  PrecioTotal: number = 0; // precio sin descuento
  PrecioFinal: number = 0; // precio con descuento

  LoadingSearchClient: boolean = false;
  loadingEmpleados: boolean = false;
  loadingProductos: boolean = false;
  loadingMetodosPagos: boolean = false;

  private _ClientesService = inject(ClientesService);
  private _EmpleadosService = inject(EmpleadosService);
  // private _ModalService = inject(ModalService);
  private _PedidoService = inject(PedidoService);
  #colorModeService = inject(ColorModeService);
  public _ModalServiceNgB = inject(NgbModal);
  public _MetodoPagoService = inject(MetodoPagoService);
  public _FacturasService = inject(FacturasService);
  public _HelpersService = inject(HelpersService);

  modalRef!: NgbModalRef;

  MetodosPagos: MetodoPago[] = [];
  Empleados: Empleado[] = [];
  Productos: ProductoPedido[] = [];

  ngOnInit(): void {
    this.getEmpleados();
    this.getMetodosPagos();
    // this.getProductos();
    this.refrescarListado();
    // this._ModalService.modalState$.subscribe((data) => {
    //   // logger.log('modal', data);
    // });
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
          filtro: valorInput,
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

  changeStatusGratis(producto: ProductoPedido) {
    let productoStorage = { ...producto };
    productoStorage.gratis = producto.gratis == 0 ? 1 : 0;

    this._PedidoService.editarDataProducto(productoStorage);
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

  getMetodosPagos() {
    this.loadingMetodosPagos = true;
    this._MetodoPagoService
      .getMetodoPago({
        estado: 1,
        disablePaginate: '1',
        link: null,
      })
      // .pipe(delay(3000))
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: MetodoPago[]) => {
        this.loadingMetodosPagos = false;
        this.MetodosPagos = [...data];
      });
  }

  getProductos() {
    // this.loadingProductos = true;
    this.Productos = this._PedidoService.obtenerListado();
    this.PrecioTotal = this.Productos.reduce((prod_anterior, prod_actual) => {
      return prod_anterior + prod_actual.precioTotal;
    }, 0);

    this.changeDescuento(this.DescuentoModel);
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

  modalStatusById(id: any, show: boolean) {
    // const action: IModalAction = { show, id };
    // this._ModalService.toggle(action);
    // this._ModalServiceNgB.activeInstances.subscribe((data) => {
    //   logger.log('data', data);
    // });
    this.modalRef = this._ModalServiceNgB.open(id, { size: 'xl' });
    // modalRef.componentInstance = 'alejandro';
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

  changeDescuento(event: any) {
    // logger.log('changeDescuento', event);

    // Convierte el valor del descuento a número
    const descuento = parseFloat(event);

    // Verifica si el descuento es un número válido
    if (!isNaN(descuento)) {
      // Calcula el precio con descuento
      const precioConDescuento =
        this.PrecioTotal - this.PrecioTotal * (descuento / 100);

      // Asegura que el precio final no tenga más de dos decimales
      this.PrecioFinal = parseFloat(precioConDescuento.toFixed(2));
    } else {
      // Si no es un número válido, asigna el precio total sin descuento
      this.PrecioFinal = this.PrecioTotal;
    }
    // logger.log('PrecioTotal', this.PrecioTotal);
    // logger.log('PrecioFinal', this.PrecioFinal);
  }

  resetForm() {
    this._PedidoService.limpiarListado();
    this.clienteModel = null;
    this.clienteId = 0;
    this.empleadoModel = 0;
    this.MedioPagoModel = 0;
    this.DescuentoModel = 0;
    this.DescripcionModel = '';
    this.PrecioTotal = 0; // precio sin descuento
    this.PrecioFinal = 0; // precio con descuento
  }

  facturar() {
    let factura: Factura = {
      cliente_id: this.clienteId,
      empleado_id: this.empleadoModel,
      productos: this.Productos,
      metodo_pago_id: this.MedioPagoModel,
      sub_total: this.PrecioTotal,
      total: this.PrecioFinal,
      descuento: String(this.DescuentoModel),
      descripcion: this.DescripcionModel,
    };
    logger.log('factura', factura);
    if (!this.validarFactura()) {
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
    } else {
      this._HelpersService.loaderSweetAlert({
        title: 'Agregando factura',
        text: 'Esto puede demorar un momento.',
      });

      this._FacturasService.createFactura(factura).subscribe((data) => {
        logger.log('data', data);

        Swal.mixin({
          customClass: {
            container: this.#colorModeService.getStoredTheme(
              environment.SabinosTheme
            ),
          },
        }).fire({
          text: 'Factura creada correctamente',
          icon: 'success',
        });

        this.resetForm();
      });
    }
    logger.log('validarFactura', this.validarFactura());
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
