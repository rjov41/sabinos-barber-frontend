import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import { Producto } from 'src/app/models/Producto.model';
import { ProductosService } from 'src/app/services/productos.service';
import logger from 'src/app/shared/utils/logger';
import { ProductoCrudFormComponent } from '../../../shared/components/forms/producto-crud-form/producto-crud-form.component';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-producto-editar',
  standalone: true,
  templateUrl: './producto-editar.component.html',
  styleUrl: './producto-editar.component.scss',
  imports: [CardModule, GridModule, ProductoCrudFormComponent],
})
export class ProductoEditarComponent {
  #colorModeService = inject(ColorModeService);
  private _ProductosService = inject(ProductosService);
  private _ActivatedRoute = inject(ActivatedRoute);

  loader: boolean = true;
  Id!: number;
  Producto!: Producto;

  ngOnInit(): void {
    this.Id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));

    this.getProductoById();
  }

  FormsValues(producto: Producto) {
    logger.log(producto);

    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    }).fire({
      title: 'Actualizando producto',
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
    this.loader = true;

    this._ProductosService
      .updateProducto(this.Id, producto)
      .subscribe((data) => {
        this.loader = false;
        // console.log(data);
        this.Producto = data.producto;
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

  getProductoById() {
    this._ProductosService
      .getProductoById(this.Id)
      .subscribe((data: Producto) => {
        this.loader = false;
        this.Producto = { ...data };
        console.log(data);
      });
  }
}
