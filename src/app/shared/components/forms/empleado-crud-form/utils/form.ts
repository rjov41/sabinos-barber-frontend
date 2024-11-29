import { FormGroup, FormControl } from '@angular/forms';
import { EmpleadoCrudValidators } from './validations';

export interface EmpleadoCrudForm {
  nombre_completo: FormControl<string | null>;
  dni: FormControl<string | null>;
}

export const EmpleadoCrudFormBuilder = () =>
  new FormGroup<EmpleadoCrudForm>({
    nombre_completo: new FormControl('', [
      ...EmpleadoCrudValidators['nombre_completo'],
    ]),
    dni: new FormControl('', [...EmpleadoCrudValidators['dni']]),
  });
