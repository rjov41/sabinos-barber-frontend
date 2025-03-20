import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  ButtonDirective,
  ColComponent,
  ColorModeService,
  FormFloatingDirective,
  FormModule,
  ModalModule,
  RowComponent,
  SpinnerComponent,
} from '@coreui/angular';
import { agregarProductosArray, PedidoCrudFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { PedidoCrudErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';
import { PedidoService } from '../../../../services/pedido.service';
import { Factura } from '../../../../models/Factura.model';
import { LocalesService } from '../../../../services/locales.service';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  OperatorFunction,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { Local } from '../../../../models/Local.model';
import { Producto } from '../../../../models/Producto.model';
import { ProductosService } from '../../../../services/productos.service';
import { MetodoPagoService } from '../../../../services/metodos_pago.service';
import { MetodoPago } from '../../../../models/MetodoPago.model';
import { IconComponent, IconDirective } from '@coreui/icons-angular';
import { ParametersUrl } from '../../../../models/Parameter.model';
import { ClientesService } from '../../../../services/clientes.service';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from '../../../../models/Cliente.model';

@Component({
  selector: 'app-pedido-new-form',
  standalone: true,
  imports: [
    CommonModule,
    RowComponent,
    ColComponent,
    ButtonDirective,
    FormFloatingDirective,
    FormModule,
    ReactiveFormsModule,
    ValidMessagesFormComponent,
    ModalModule,
    DirectivesModule,
    SpinnerComponent,
    IconDirective,
    NgbTypeaheadModule,
  ],
  templateUrl: './pedido-new-form.component.html',
  styleUrl: './pedido-new-form.component.scss',
})
export class PedidoNewFormComponent {
  private destruir$: Subject<void> = new Subject<void>();
  readonly PedidoCrudErrorMessages = PedidoCrudErrorMessages;

  PedidoCrudForm = PedidoCrudFormBuilder();
  #colorModeService = inject(ColorModeService);
  _PedidoService = inject(PedidoService);
  _LocalesService = inject(LocalesService);
  _ProductosService = inject(ProductosService);
  _MetodoPagoService = inject(MetodoPagoService);
  _ClientesService = inject(ClientesService);

  @Input() PedidoDetail!: any;
  @Output() FormsValues = new EventEmitter<any>();

  loadingLocales: boolean = false;
  loadingProductos: boolean = false;
  loadingMetodosPagos: boolean = false;

  Locales: Local[] = [];
  Pedidos: any[] = [];
  MetodosPagos: MetodoPago[] = [];
  Productos: Producto[] = [];
  gastos: any[] = [];
  TotalFactura: number = 0;

  ngOnInit(): void {
    this.getLocales();
    this.getProductos();
    this.getMetodosPagos();
    this.changeCantidad(this.PedidoCrudForm);

    this.PedidoCrudForm.controls.productos.valueChanges.subscribe((value) => {
      logger.log('value', value);
      const totalPrecio = this.ProductorFormArray.getRawValue().reduce(
        (acc, producto) => acc + (producto.precio || 0),
        0
      );
      this.TotalFactura = totalPrecio;
      console.log('Total de precios:', totalPrecio);
    });
  }

  ngOnChanges(): void {
    if (this.PedidoDetail) this.setFormValues();
  }

  getLocales() {
    this.loadingLocales = true;

    this._LocalesService
      .getLocales({
        link: null,
        disablePaginate: '1',
      })
      // .pipe(delay(3000))
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Local[]) => {
        this.loadingLocales = false;
        this.Locales = [...data];
        logger.log(data);
      });
  }

  getProductos() {
    this.loadingProductos = true;

    this._ProductosService
      .getProductos({
        link: null,
        disablePaginate: '1',
      })
      // .pipe(delay(3000))
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Producto[]) => {
        this.loadingProductos = false;
        this.Productos = [...data];
        logger.log(data);
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

  getControlError(name: string): ValidationErrors | null {
    const control = this.PedidoCrudForm.controls
      ? this.PedidoCrudForm.get(name)
      : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getProductoFormControlError(
    index: number,
    controlName: string
  ): ValidationErrors | null {
    const gastoFormGroup = this.ProductorFormArray.at(index) as FormGroup;
    const control = gastoFormGroup.get(controlName);
    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.PedidoCrudForm.get(name) as FormControl;
  }

  setFormValues() {
    logger.log(this.PedidoDetail);

    // this.PedidoCrudForm.patchValue({
    //   nombre: this.Pedido.nombre,
    //   // apellido: this.Pedido.nombre,
    // });
  }

  changeProducto(producGroup: any) {
    // logger.log('producGroup', producGroup);
    const producto_id = producGroup.get('producto_id');
    const cantidad = producGroup.get('cantidad');
    const gratis = producGroup.get('gratis');

    const DETALLE_PRODUCTO_SELECCIONADO = this.Productos.find(
      (producto) => producto.id === producto_id.value
    );
    // logger.log('DETALLE_PRODUCTO_SELECCIONADO', DETALLE_PRODUCTO_SELECCIONADO);

    cantidad.enable();
    gratis.enable();
    cantidad.reset();
    cantidad.clearValidators();
    cantidad.setValidators([
      Validators.required,
      Validators.maxLength(10),
      Validators.min(0),
      Validators.max(Number(DETALLE_PRODUCTO_SELECCIONADO?.cantidad)),
    ]);
    producGroup.patchValue({
      cantidad: Number(DETALLE_PRODUCTO_SELECCIONADO?.cantidad) >= 1 ? 1 : 0,
      precio_unitario: DETALLE_PRODUCTO_SELECCIONADO?.precio,
      precio: DETALLE_PRODUCTO_SELECCIONADO?.precio,
    });
  }

  changeCantidad(producGroup: any) {
    const cantidad = producGroup.get('cantidad');
    const precioUnitario = producGroup.get('precio_unitario');
    if (cantidad && precioUnitario) {
      let precio = precioUnitario.value * cantidad.value;

      producGroup.patchValue({
        // precio_unitario: DETALLE_PRODUCTO_SELECCIONADO?.precio,
        precio: precio,
      });
    }
  }

  get ProductorFormArray() {
    return this.PedidoCrudForm.get('productos') as FormArray;
  }

  agregarProducto() {
    agregarProductosArray(this.PedidoCrudForm);
  }

  changeStatusGratis(producGroup: any) {
    logger.log('producGroup', producGroup.value);
    const precioUnitario = producGroup.get('precio_unitario');
    const precio = producGroup.get('precio');

    if (producGroup.value.gratis) {
      precioUnitario.patchValue(0);
      precio.patchValue(0);
    } else {
      this.changeProducto(producGroup);
    }
    // agregarProductosArray(this.PedidoCrudForm);
  }

  eliminarGasto(index: number) {
    logger.log('index', index);
    if (
      this.ProductorFormArray.length > 0 &&
      index >= 0 &&
      index < this.ProductorFormArray.length
    ) {
      this.ProductorFormArray.removeAt(index);
    }
  }

  formatterValue = (x: { nombre_completo: string } | string) =>
    typeof x === 'string' ? x : x.nombre_completo;

  searchClient: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      // tap(() => (this.LoadingSearchClient = true)),
      debounceTime(200),
      distinctUntilChanged(),
      filter((valorInput) => valorInput.length > 2), // Se ejecuta solo si tiene 2 o más caracteres
      switchMap((valorInput) => {
        let listadoFilter: ParametersUrl = {
          estado: 1,
          disablePaginate: '1',
          filtro: String(valorInput),
          link: null,
        };
        // logger.log('aa', valorInput);
        return this._ClientesService.getClientes(listadoFilter).pipe(
          catchError(() => {
            // this.LoadingSearchClient = true;
            return of([]);
          }),
          map((value) => {
            // this.LoadingSearchClient = false;

            return value;
          })
        );
      })
    );

  eventInputTypeHead({ item }: { item: Cliente }) {
    setTimeout(() => {
      logger.log('item', item);
      // this.clienteModel = `${item.nombre} ${item.apellido}`;
      // this.clienteId = Number(item.id);
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

  sendValueFom() {
    logger.log('sendValueFom', this.PedidoCrudForm);
    logger.log('this.PedidoCrudForm.valid', this.PedidoCrudForm.valid);

    if (this.PedidoCrudForm.valid) {
      Swal.fire({
        title: '¿Desea continuar?',
        text: 'Una vez que acepte se guardará la información',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, continuar',
        cancelButtonText: 'No, quedarme aquí',
        customClass: {
          container: this.#colorModeService.getStoredTheme(
            environment.SabinosTheme
          ),
        },
      }).then((result) => {
        if (result.isConfirmed) {
          // this._Router.navigateByUrl(`/clientes/editar/${data.id}`);
          this.FormsValues.emit(this.PedidoCrudForm.getRawValue());
        }
      });
    } else {
      Swal.mixin({
        customClass: {
          container: this.#colorModeService.getStoredTheme(
            environment.SabinosTheme
          ),
        },
      }).fire({
        text: 'Complete todos los campos obligatorios',
        icon: 'warning',
      });
    }
  }
}
