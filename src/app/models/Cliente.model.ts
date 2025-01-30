export interface Cliente {
  id?: number;

  nombre: string;
  apellido: string;
  telefono: string;
  fecha_nacimiento: string;

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}
