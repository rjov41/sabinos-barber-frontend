export interface Producto {
  id?: number;

  marca: string;
  descripcion: string;
  cantidad: number;
  precio: number;
  local_id: number;

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}
