import dayjs from 'dayjs';

export interface Filtro {
  id: string; // Identificador, inicialmente vacío
  marca: string; // Marca, inicialmente vacío
  descripcion: string; // Descripción, inicialmente vacío
  fecha: {
    startDate: dayjs.Dayjs; // Fecha inicial (usando Dayjs para el tipo)
    endDate: dayjs.Dayjs; // Fecha final (usando Dayjs para el tipo)
  };
  estado: number | string;
  local_id: number | string;
  fecha_inicio?: string;
  fecha_fin?: string;
}

export type FiltroKeys = keyof Filtro;
