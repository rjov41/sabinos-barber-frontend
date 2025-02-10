import { FormGroup, FormControl } from '@angular/forms';
import { NominaCrudValidators } from './validations';

export interface NominaCrudForm {
  empleado_id: FormControl<number | null>;
  nombre: FormControl<string | null>;
  monto_facturado: FormControl<number | null>;
  adicional: FormControl<boolean | null>;
  porcentaje_adicional: FormControl<number | null>;
  total: FormControl<number | null>;
}

export const NominaCrudFormBuilder = () =>
  new FormGroup<NominaCrudForm>({
    empleado_id: new FormControl(0, [...NominaCrudValidators['empleado_id']]),
    nombre: new FormControl('', [...NominaCrudValidators['nombre']]),
    monto_facturado: new FormControl({ value: 0, disabled: true }, [
      ...NominaCrudValidators['monto_facturado'],
    ]),
    adicional: new FormControl(false, [...NominaCrudValidators['adicional']]),
    porcentaje_adicional: new FormControl(0, [
      ...NominaCrudValidators['porcentaje_adicional'],
    ]),
    total: new FormControl({ value: 0, disabled: true }, [
      ...NominaCrudValidators['total'],
    ]),
  });
