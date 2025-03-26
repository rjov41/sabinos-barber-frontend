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
import { Component, inject, HostListener } from '@angular/core';
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
  private _LocalesService = inject(LocalesService);
  private _ProductosService = inject(ProductosService);
  private _MetodoPagoService = inject(MetodoPagoService);
  private _ModalServiceNgB = inject(NgbModal);

  EmpleadoList: any[] = [];
  Locales: Local[] = [];
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
  loadingLocales: boolean = false;
  loadingProductos: boolean = false;
  loadingMetodosPagos: boolean = false;
  loaderClientes: boolean = true;

  scrollPosition = 0;

  ngOnInit(): void {
    this.getEmpleados();
    this.getLocales();
    this.getProductos();
    this.getMetodosPagos();
    this.getClientes();
    logger.log('scroll');
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
  }

  tabChange(event: any) {
    logger.log(event);
  }

  ActualizarProductos(index: number) {
    logger.log('index', index);
    this.getProductos();
  }

  getEmpleados() {
    this.loaderEmpleados = true;

    this._EmpleadosService
      .getEmpleadoes(this.ParametrosURL)
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Empleado[]) => {
        this.loaderEmpleados = false;
        this.EmpleadoList = [...data];
        logger.log(data);
      });
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

  getClientes() {
    this.loaderClientes = true;

    this._ClientesService
      .getClientes(this.ParametrosURL)
      // .pipe(delay(3000))
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Cliente[]) => {
        this.loaderClientes = false;
        this.Clientes = [...data];
        logger.log(data);
      });
  }

  agregarFactura(empleadiId: number) {
    const modalRef = this._ModalServiceNgB.open(FacturarClienteModalComponent);
    modalRef.componentInstance.Clientes = this.Clientes;
    modalRef.componentInstance.MetodosPagos = this.MetodosPagos;
    modalRef.componentInstance.Servicios = this.Locales;
    modalRef.componentInstance.empleado_id = empleadiId;

    modalRef.componentInstance.ResponseFacturaCreate.subscribe((data: any) => {
      logger.log('dataFacturaCreate', data);
    });
  }

  FormsValues(Cliente: Cliente) {
    logger.log(Cliente);

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
