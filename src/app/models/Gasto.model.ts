import { Empleado } from './Empleado.model';
import { Usuario } from './Usuario.model';

export interface Gasto {
  id?: number;

  user_id: number;
  empleado_id: number;
  detalle_gasto_id: number;

  empleado?: Empleado;
  user?: Usuario;

  // gasto_detalle:

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}
