export interface Empleado {
  id?: number;

  nombre_completo: string;
  dni: string;
  local_id: number;

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}
