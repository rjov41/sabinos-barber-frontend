import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { delay, map, Subject, takeUntil, timer } from 'rxjs';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import {
  ButtonDirective,
  FormControlDirective,
  InputGroupComponent,
  TableDirective,
  PaginationComponent,
  PageItemDirective,
  PageLinkDirective,
  GridModule,
  CardModule,
  TooltipDirective,
  ModalModule,
  ButtonModule,
  ModalService,
  ModalComponent,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { ProductosService } from '../../../../services/productos.service';
import { CommonModule } from '@angular/common';
import { Listado } from 'src/app/models/Listados.model';
import { Producto } from 'src/app/models/Producto.model';
import { ParametersUrl } from 'src/app/models/Parameter.model';
import { IModalAction } from '@coreui/angular/lib/modal/modal.service';
import logger from 'src/app/shared/utils/logger';

import dayjs from 'dayjs';
import { HelpersService } from 'src/app/services/helpers.service';
import Swal from 'sweetalert2';
import { ColorModeService } from '@coreui/angular';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { PedidoFormComponent } from '../../../../shared/components/forms/pedido-form/pedido-form.component';
import { ClientesService } from '../../../../services/clientes.service';
import { PedidoService } from '../../../../services/pedido.service';

@Component({
  selector: 'app-productos-pedido',
  standalone: true,
  imports: [
    TableDirective,
    CardModule,
    GridModule,
    InputGroupComponent,
    FormControlDirective,
    ButtonDirective,
    IconDirective,
    PaginationComponent,
    PageItemDirective,
    PageLinkDirective,
    RouterLink,
    CommonModule,
    TooltipDirective,
    ModalModule,
    ButtonModule,
    FormsModule,
    PedidoFormComponent,
    NgbModule,
  ],
  providers: [NgbModal, NgbActiveModal],
  templateUrl: './productos-pedido.component.html',
  styleUrl: './productos-pedido.component.scss',
})
export class ProductosPedidoComponent {
  @ViewChild('listadoProductos2') listadoProductos2!: ModalComponent;
  private destruir$: Subject<void> = new Subject<void>();

  private _PedidoService = inject(PedidoService);
  private _ProductosService = inject(ProductosService);
  private _ModalService = inject(ModalService);
  public _ModalServiceNgB = inject(NgbModal);
  activeModal = inject(NgbActiveModal);

  modalRef!: NgbModalRef;

  ProductosList!: Listado<Producto>;
  Producto!: Producto;
  loaderTable: boolean = true;
  loadingProductos: boolean = false;
  ParametrosURL: ParametersUrl = {
    allDates: false,
    estado: 1,
    link: null,
    disablePaginate: '0',
    local_model: '0',
    fecha_inicio: dayjs().startOf('month').format('YYYY-MM-DD'),
    fecha_fin: dayjs().endOf('month').format('YYYY-MM-DD'),
  };

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.loaderTable = true;

    this._ProductosService
      .getProductos(this.ParametrosURL)
      .pipe(
        takeUntil(this.destruir$),
        map((response) => this.restarCantidadProductosSeleccionados(response))
      )
      .subscribe((data: Listado<Producto>) => {
        this.loaderTable = false;
        this.ProductosList = { ...data };
        logger.log(data);
      });
  }

  restarCantidadProductosSeleccionados(
    response: Listado<Producto>
  ): Listado<Producto> {
    const PRODUCTOS_CARRITO = this._PedidoService.obtenerListado();

    const productosRestados = response.data.map((producto) => {
      const productoExistente = PRODUCTOS_CARRITO.find(
        (p) => p.id === producto.id
      ); // Buscar por ID
      if (productoExistente && !producto.ilimitado) {
        return {
          ...producto,
          cantidad: producto.cantidad - productoExistente.cantidadPedido, // Restar la cantidad
        };
      }
      return producto; // Devolver el producto sin cambios si no coincide
    });

    return { ...response, data: productosRestados };
  }

  buscar() {
    this.getProductos();
  }

  newPage(link: any) {
    if (link.url == null) return;
    // console.log(link);

    this.ParametrosURL.link = link.url;

    this.getProductos();
  }

  modalStatusById(
    id: string,
    show: boolean,
    producto: Producto | null = null,
    conten: any = false
  ) {
    const action: IModalAction = { show, id };
    // logger.log('action', action);

    if (producto) {
      this.Producto = producto;
    }
    // this._ModalService.toggle({
    //   show: false,
    //   id: 'listadoProductos2',
    //   modal: this.listadoProductos2,
    // });
    // this._ModalService.toggle(action);
    // this._ModalServiceNgB.open(PedidoFormComponent, { size: 'lg' });
    this.modalRef = this._ModalServiceNgB.open(conten, { size: 'lg' });
    // [0]._contentRef.nodes[0][1]
    // logger.log('modalRef', modalRef);
    // modalRef.componentInstance.name = 'World';
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
