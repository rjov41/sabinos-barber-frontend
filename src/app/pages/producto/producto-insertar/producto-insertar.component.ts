import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClienteCrudComponent } from '../../../shared/components/forms/cliente-crud/cliente-crud.component';
import logger from 'src/app/shared/utils/logger';
import {
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  CardModule,
  ColComponent,
  ColorModeService,
  ContainerComponent,
  GridModule,
  RowComponent,
} from '@coreui/angular';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Producto } from '../../../models/Producto.model';

@Component({
  selector: 'app-producto-insertar',
  standalone: true,
  templateUrl: './producto-insertar.component.html',
  styleUrl: './producto-insertar.component.scss',
  imports: [
    CardModule,
    GridModule,
    RouterLink,
    ContainerComponent,
    ClienteCrudComponent,
  ],
})
export class ProductoInsertarComponent {
  #colorModeService = inject(ColorModeService);
  private _ProductosService = inject(ProductosService);

  loader: boolean = true;

  FormsValues(producto: Producto) {
    logger.log(producto);

    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    }).fire({
      title: 'Agregando producto',
      text: 'Esto puede demorar un momento.',
      timerProgressBar: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      // allowEnterKey: false,
      focusConfirm: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    this._ProductosService.createProducto(producto).subscribe((data) => {
      this.loader = false;
      console.log(data);
      Swal.mixin({
        customClass: {
          container: this.#colorModeService.getStoredTheme(
            environment.SabinosTheme
          ),
        },
      })
        .fire({
          text: 'Producto modificado con éxito',
          icon: 'success',
        })
        .then((result) => {
          console.log(result);
        });
    });
  }
}
