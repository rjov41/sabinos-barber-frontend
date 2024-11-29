export interface Empleado {
  id?: number;

  nombre_completo: string;
  dni: string;

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}
