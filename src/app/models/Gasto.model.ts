export interface Gasto {
  id?: number;

  user_id: number;
  empleado_id: number;
  detalle_gasto_id: number;

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}
