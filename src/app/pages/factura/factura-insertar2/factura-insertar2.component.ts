import { CommonModule } from '@angular/common';
import {
  ButtonModule,
  CardModule,
  ColorModeService,
  GridModule,
  ModalModule,
  Tabs2Module,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { FormModule } from '@coreui/angular';
import { Component, inject, HostListener, effect } from '@angular/core';
import { NgbModal, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../../services/clientes.service';
import { EmpleadosService } from '../../../services/empleados.service';
import { ParametersUrl } from '../../../models/Parameter.model';
import logger from '../../../shared/utils/logger';
import { Cliente } from '../../../models/Cliente.model';
import { Empleado } from '../../../models/Empleado.model';
import { Producto } from '../../../models/Producto.model';
import { MetodoPagoService } from '../../../services/metodos_pago.service';
import { MetodoPago } from '../../../models/MetodoPago.model';
import { DirectivesModule } from '../../../shared/directivas/directives.module';
import { HelpersService } from '../../../services/helpers.service';
import { PedidoNewFormComponent } from '../../../shared/components/forms/pedido-new-form/pedido-new-form.component';
import { ProductosService } from '../../../services/productos.service';
import { LocalesService } from '../../../services/locales.service';
import { Local } from '../../../models/Local.model';
import { FacturarClienteModalComponent } from '../../../shared/modals/facturar-cliente-modal/facturar-cliente-modal.component';
import { NOW } from '../../../shared/utils/constants/filtro';
import { ServicioService } from '../../../services/servicios.service';
import { Servicios } from '../../../models/Servicios.model';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-factura-insertar2',
  standalone: true,
  imports: [
    CardModule,
    GridModule,
    FormModule,
    IconDirective,
    CommonModule,
    NgbTypeaheadModule,
    FormsModule,
    ModalModule,
    ButtonModule,
    DirectivesModule,
    PedidoNewFormComponent,
    Tabs2Module,
    FacturarClienteModalComponent,
  ],
  templateUrl: './factura-insertar2.component.html',
  styleUrl: './factura-insertar2.component.scss',
})
export class FacturaInsertar2Component {
  private destruir$: Subject<void> = new Subject<void>();

  #colorModeService = inject(ColorModeService);
  private _HelpersService = inject(HelpersService);
  private _ClientesService = inject(ClientesService);
  private _EmpleadosService = inject(EmpleadosService);
  private _ServicioService = inject(ServicioService);
  private _ProductosService = inject(ProductosService);
  private _MetodoPagoService = inject(MetodoPagoService);
  private _LoginService = inject(LoginService);
  private _ModalServiceNgB = inject(NgbModal);

  EmpleadoList: any[] = [];
  Servicios: Servicios[] = [];
  Productos: Producto[] = [];
  MetodosPagos: MetodoPago[] = [];
  Clientes: Cliente[] = [];

  FacturasDetalles: any[] = [];

  private ParametrosURL: ParametersUrl = {
    allDates: false,
    link: null,
    disablePaginate: '1',
  };

  loaderEmpleados: boolean = false;
  loadingServicios: boolean = false;
  loadingProductos: boolean = false;
  loadingMetodosPagos: boolean = false;
  loaderClientes: boolean = true;

  scrollPosition = 0;

  constructor() {
    effect(() => {
      this._LoginService.getUserData();
      this.getEmpleados();
      this.getServicios();
      this.getProductos();
      this.getMetodosPagos();
      this.getClientes();
    });
  }
  ngOnInit(): void {
    // this.getEmpleados();
    // this.getServicios();
    // this.getProductos();
    // this.getMetodosPagos();
    // this.getClientes();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
  }

  tabChange(event: any) {
    // logger.log(event);
  }

  ActualizarProductos(index: number) {
    // logger.log('index', index);
    this.getProductos();
  }

  getEmpleados() {
    this.loaderEmpleados = true;

    this._EmpleadosService
      .getEmpleadoes({
        ...this.ParametrosURL,
        factura_model: '1',
        factura_detalle_model: '1',
        factura_producto_model: '1',
        fecha_creacion_factura: NOW.format('YYYY-MM-DD'),
        local_id: this._LoginService.getUserData().local.id,
      })
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Empleado[]) => {
        this.loaderEmpleados = false;
        this.EmpleadoList = [...data];
        // logger.log(data);
      });
  }

  getServicios() {
    this.loadingServicios = true;

    this._ServicioService
      .getServicios({
        link: null,
        disablePaginate: '1',
      })
      // .pipe(delay(3000))
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Servicios[]) => {
        this.loadingServicios = false;
        this.Servicios = [...data];
        // logger.log(data);
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
        // logger.log(data);
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

  getClientes() {
    this.loaderClientes = true;

    this._ClientesService
      .getClientes(this.ParametrosURL)
      // .pipe(delay(3000))
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Cliente[]) => {
        this.loaderClientes = false;
        this.Clientes = [...data];
        // logger.log(data);
      });
  }

  agregarFactura(empleadiId: number) {
    const modalRef = this._ModalServiceNgB.open(FacturarClienteModalComponent);
    modalRef.componentInstance.Clientes = this.Clientes;
    modalRef.componentInstance.MetodosPagos = this.MetodosPagos;
    modalRef.componentInstance.Servicios = this.Servicios;
    modalRef.componentInstance.empleado_id = empleadiId;

    modalRef.componentInstance.ResponseFacturaCreate.subscribe((data: any) => {
      const EmpleadoResponse = [...data];
      const empleadoIndex = this.EmpleadoList.findIndex(
        (empleado) => empleado.id === EmpleadoResponse[0].empleado_id
      );

      if (
        empleadoIndex !== -1 &&
        (!this.EmpleadoList[empleadoIndex].facturas ||
          this.EmpleadoList[empleadoIndex].facturas.length === 0)
      ) {
        // Actualizamos solo la propiedad 'factura' para el empleado encontrado

        this.EmpleadoList[empleadoIndex].facturas = [...EmpleadoResponse];
        this.getClientes();
      }
    });
  }

  FormsValues(Cliente: Cliente) {
    // logger.log(Cliente);

    this._HelpersService.loaderSweetAlert({
      title: 'Cargando',
      text: 'Esto puede demorar un momento.',
    });
    // this._ClientesService
    //   .createCliente(Cliente)
    //   .pipe(takeUntil(this.destruir$))
    //   .subscribe((data) => {
    //     this.loader = false;
    //     logger.log(data);
    //     Swal.mixin({
    //       customClass: {
    //         container: this.#colorModeService.getStoredTheme(
    //           environment.SabinosTheme
    //         ),
    //       },
    //     })
    //       .fire({
    //         text: 'Cliente agregado con éxito',
    //         icon: 'success',
    //       })
    //       .then((result) => {
    //         this._Router.navigateByUrl(`/clientes/editar/${data.id}`);
    //       });
    //   });
  }
}
