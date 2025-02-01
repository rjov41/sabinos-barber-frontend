import { Producto } from './Producto.model';

export interface Factura {
  id?: number;

  cliente_id: number;
  empleado_id: number;
  productos: Producto[];
  metodo_pago_id: number;
  total: number;

  descripcion: string;
  descuento: string;

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}
