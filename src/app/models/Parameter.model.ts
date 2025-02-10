import { Relaciones } from './Relaciones.model';

export interface ParametersUrl extends Relaciones {
  link: null | string;
  page?: string | number;
  filter?: string;
  estado?: string | number;
  fecha_inicio?: string;
  fecha_fin?: string;
  allDates?: boolean;
  disablePaginate?: string;

  local?: string | number;
}
