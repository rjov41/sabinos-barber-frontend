import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../models/Usuario.model';
import { Listado } from '../models/Listados.model';
import { HelpersService } from './helpers.service';
import { ParametersUrl } from '../models/Parameter.model';
import logger from '../shared/utils/logger';
import { Producto, ProductoPedido } from '../models/Producto.model';
import { LocalStorageService } from '@coreui/angular';
import { environment } from '../../environments/environment';

const URL_Usuario = `${environment.apiUrl}usuario`;
export type UsuarioResponse = Usuario[] | Listado<Usuario>;

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private readonly KEY_STORAGE = environment.SabinosCarrito;
  private _Storage = inject(LocalStorageService);

  /**
   * Obtener el listado de productos del local storage.
   */
  private getProductos(): ProductoPedido[] {
    // const productos = localStorage.getItem(this.storageKey);
    const PRODUCTOS = this._Storage.getItem(this.KEY_STORAGE) as
      | ProductoPedido[]
      | null;

    return PRODUCTOS && PRODUCTOS.length > 0 ? PRODUCTOS : [];
  }

  /**
   * Guardar el listado de productos en el local storage.
   * @param productos Listado de productos.
   */
  private setProductos(productos: ProductoPedido[]): void {
    this._Storage.setItem(this.KEY_STORAGE, productos);
  }

  /**
   * Agregar un producto al listado.
   * Si el producto ya existe, suma la cantidad y actualiza el precio.
   * @param producto Producto a agregar.
   */
  agregarProducto(producto: ProductoPedido): void {
    const productos = this.getProductos();

    const index = productos.findIndex(
      (p) => p.id === producto.id && p.local_id === producto.local_id
    );

    if (index !== -1) {
      // Producto ya existe, actualizamos la cantidad y el precio
      productos[index].cantidadPedido += producto.cantidadPedido;
      productos[index].precioUnitario = producto.precioUnitario;
      productos[index].precioTotal =
        productos[index].cantidadPedido * productos[index].precio;
    } else {
      // Producto nuevo, lo agregamos al listado
      productos.push(producto);
    }

    this.setProductos(productos);
  }

  /**
   * Obtener el listado de productos actuales.
   */
  obtenerListado(): ProductoPedido[] {
    return this.getProductos();
  }

  /**
   * Eliminar todos los productos del listado.
   */
  limpiarListado(): void {
    localStorage.removeItem(this.KEY_STORAGE);
  }

  /**
   * Eliminar un producto del listado por su ID.
   * @param id ID del producto a eliminar.
   */
  eliminarProductoPorId(id: number): void {
    const productos = this.getProductos();
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    this.setProductos(nuevosProductos);
  }
}
