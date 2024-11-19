import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { delay, timer } from 'rxjs';
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
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { ProductosService } from '../../../services/productos.service';
import { CommonModule } from '@angular/common';
import { Listado } from 'src/app/models/Listados.model';
import { Producto } from 'src/app/models/Producto.model';
import { ParametersUrl } from 'src/app/models/Parameter.model';
import { FiltrosListFormComponent } from '../../../shared/components/forms/filtros-list-form/filtros-list-form.component';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.scss',
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
    FiltrosListFormComponent,
    ModalModule,
    ButtonModule,
  ],
})
export class ProductoListComponent {
  private _productosService = inject(ProductosService);

  loaderTable: boolean = true;
  ParametrosURL: ParametersUrl = {
    allDates: true,
    link: null,
    disablePaginate: '0',
  };
  ProductosList!: Listado<Producto>;
  visible = false;

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.loaderTable = true;
    this._productosService
      .getProductos(this.ParametrosURL)
      // .pipe(delay(3000))
      .subscribe((data: Listado<Producto>) => {
        this.loaderTable = false;
        this.ProductosList = { ...data };
        console.log(data);
      });
  }

  newPage(link: any) {
    if (link.url == null) return;
    // console.log(link);

    this.ParametrosURL.link = link.url;

    this.getProductos();
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }
  filtroEvent(event: any) {
    console.log(event);
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
}
