export interface MetodoPago {
  id?: number;

  tipo: string;
  descripcion: string;

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}
