import { Cliente } from './Cliente.model';
import { Empleado } from './Empleado.model';
import { MetodoPago } from './MetodoPago.model';
import { Producto } from './Producto.model';
import { Relaciones } from './Relaciones.model';

export interface Factura {
  id?: number;

  cliente_id: number;
  empleado_id: number;
  productos: Producto[];
  metodo_pago_id: number;
  total: number;
  descripcion: string;
  descuento: string;

  cliente?: Cliente;
  empleado?: Empleado;
  metodo_pago?: MetodoPago;

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}
