export interface Cliente {
  id?: number;

  nombre: string;
  apellido: string;
  telefono: string;

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}
