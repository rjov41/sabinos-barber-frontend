import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
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
import { Component, inject, ViewChild } from '@angular/core';
import {
  NgbHighlight,
  NgbTypeahead,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
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
import { ProductosService } from '../../../services/productos.service';
import { Producto } from '../../../models/Producto.model';
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
  clienteModel: any;

  LoadingSearchClient: boolean = false;
  loadingEmpleados: boolean = false;
  loadingProductos: boolean = false;

  private _ClientesService = inject(ClientesService);
  private _EmpleadosService = inject(EmpleadosService);
  private _ModalService = inject(ModalService);
  private _PedidoService = inject(PedidoService);
  #colorModeService = inject(ColorModeService);

  Empleados: Empleado[] = [];
  Productos: Producto[] = [];

  ngOnInit(): void {
    this.getEmpleados();
    this.getProductos();
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

  getEmpleados() {
    this.loadingEmpleados = true;
    this._EmpleadosService
      .getEmpleadoes({
        estado: 1,
        disablePaginate: '1',
        link: null,
      })
      // .pipe(delay(3000))
      .subscribe((data: Empleado[]) => {
        this.loadingEmpleados = false;
        this.Empleados = [...data];
      });
  }

  getProductos() {
    // this.loadingProductos = true;
    this.Productos = this._PedidoService.obtenerListado();
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
}
