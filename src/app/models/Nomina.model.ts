export interface Nomina {
  id: number;
  empleado_id: number;
  nombre: string;
  monto_facturado: number;
  adicional: boolean | number;
  porcentaje_adicional: number;
  total: number;
}
