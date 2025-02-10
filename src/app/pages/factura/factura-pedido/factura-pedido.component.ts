import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { delay, Subject, takeUntil, timer } from 'rxjs';
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
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { ProductosService } from '../../../services/productos.service';
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
import { PedidoFormComponent } from '../../../shared/components/forms/pedido-form/pedido-form.component';

@Component({
  selector: 'app-factura-pedido',
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
  ],
  templateUrl: './factura-pedido.component.html',
  styleUrl: './factura-pedido.component.scss',
})
export class FacturaPedidoComponent {
  private destruir$: Subject<void> = new Subject<void>();

  private _ProductosService = inject(ProductosService);
  private _ModalService = inject(ModalService);

  ProductosList!: Listado<Producto>;
  Producto!: Producto;
  loaderTable: boolean = true;
  loadingProductos: boolean = false;
  ParametrosURL: ParametersUrl = {
    allDates: true,
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
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Listado<Producto>) => {
        this.loaderTable = false;
        this.ProductosList = { ...data };
        logger.log(data);
      });
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

  modalStatusById(id: string, show: boolean, producto: Producto | null = null) {
    const action: IModalAction = { show, id };
    if (producto) {
      this.Producto = producto;
    }
    this._ModalService.toggle(action);
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
