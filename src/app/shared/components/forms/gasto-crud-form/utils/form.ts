import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { GastoCrudValidators } from './validations';

export interface GastoCrudForm {
  user_id: FormControl<number | null>;
  empleado_id: FormControl<number | null>;
  gastos: FormArray<FormGroup<GastoItemForm>>;
}
export interface GastoItemForm {
  producto_id: FormControl<number | null>;
  cantidad: FormControl<number | null>;
  precio_unitario: FormControl<number | null>;
  precio: FormControl<number | null>;
  tipo_gasto: FormControl<number | null>;
}

export const GastoCrudFormBuilder = () =>
  new FormGroup<GastoCrudForm>({
    user_id: new FormControl(0, [...GastoCrudValidators['user_id']]),
    empleado_id: new FormControl(0, [...GastoCrudValidators['empleado_id']]),
    gastos: new FormArray<FormGroup<GastoItemForm>>([gastoForm]),
    // detalle_gasto_id: new FormControl(0, [
    //   ...GastoCrudValidators['monto_facturado'],
    // ]),
  });

const gastoForm = new FormGroup<GastoItemForm>({
  producto_id: new FormControl(null, [...GastoCrudValidators['producto_id']]),
  cantidad: new FormControl(null, [...GastoCrudValidators['cantidad']]),
  precio_unitario: new FormControl(null, [
    ...GastoCrudValidators['precio_unitario'],
  ]),
  precio: new FormControl(null, [...GastoCrudValidators['precio']]),
  tipo_gasto: new FormControl(null, [...GastoCrudValidators['tipo_gasto']]),
});

export const agregarGasto = (form: FormGroup<GastoCrudForm>) => {
  form.controls.gastos.push(gastoForm); // Agrega el nuevo gasto al FormArray
};
