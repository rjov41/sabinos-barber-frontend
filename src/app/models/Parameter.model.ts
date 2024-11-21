export interface ParametersUrl {
  link: null | string;
  page?: string | number;
  filter?: string;
  estado?: string | number;
  dateIni?: string;
  dateFin?: string;
  allDates?: boolean;
  disablePaginate?: string;

  local?: string | number;
  local_model?: string;
}
