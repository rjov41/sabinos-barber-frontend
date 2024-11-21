import { Local } from './Local.model';
export interface Producto {
  id?: number;

  marca: string;
  descripcion: string;
  cantidad: number;
  precio: number;
  local_id: number;
  local: Local;

  estado?: number;
  created_at?: Date;
  updated_at?: Date;
}
