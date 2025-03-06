import { Cliente } from './Cliente.model';
import { Empleado } from './Empleado.model';
import { MetodoPago } from './MetodoPago.model';
import { Producto } from './Producto.model';
import { Usuario } from './Usuario.model';

export interface Factura {
  id?: number;

  cliente_id: number;
  empleado_id: number;
  productos: Producto[];
  metodo_pago_id: number;
  total: number;
  sub_total?: number;
  descripcion: string;
  descuento: string;

  cliente?: Cliente;
  empleado?: Empleado;
  user?: Usuario;
  metodo_pago?: MetodoPago;
  factura_detalle?: FacturaDetalle[];

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}

interface FacturaDetalle {
  id: number;
  factura_id: number;
  producto_id: number;
  precio: number;
  cantidad: number;
  estado: number;
  cobrar: number;
  gratis?: number;
  created_at?: string;
  updated_at?: string;

  producto?: Producto;
}
