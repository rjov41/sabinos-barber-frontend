import { FormGroup, FormControl } from '@angular/forms';
import { ServicioCrudValidators } from './validations';

export interface ServicioCrudForm {
  descripcion: FormControl<string | null>;
  precio: FormControl<number | null>;
}

export const ServicioCrudFormBuilder = () =>
  new FormGroup<ServicioCrudForm>({
    descripcion: new FormControl('', [
      ...ServicioCrudValidators['descripcion'],
    ]),
    precio: new FormControl(0, [...ServicioCrudValidators['precio']]),
  });
