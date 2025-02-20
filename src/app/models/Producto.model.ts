import { Local } from './Local.model';
export interface Producto {
  id?: number;

  marca: string;
  descripcion: string;
  cantidad: number;
  precio: number;
  local_id: number;
  local: Local;
  ilimitado: number;
  linea?: string;

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface ProductoPedido extends Producto {
  precioTotal: number;
  precioUnitario: number;
  cantidadPedido: number;
  gratis: number;
}
