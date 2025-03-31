import { MetodoPago } from './MetodoPago.model';
import { Servicios } from './Servicios.model';
import { Cliente } from './Cliente.model';

export interface FacturaDetalle {
  id?: number;

  factura_id: number;
  created_at: string;
  updated_at: string;
  estado: number;

  servicio_id: number;
  servicio?: Servicios;

  cliente?: Cliente;
  cliente_id: number;

  metodo_pago_id: number;
  metodo_pago?: MetodoPago;

  factura_producto?: any[];
}
