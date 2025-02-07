import { FormGroup, FormControl } from '@angular/forms';
import { TiposGastoCrudValidators } from './validations';

export interface TiposGastoCrudForm {
  descripcion: FormControl<string | null>;
}

export const TiposGastoCrudFormBuilder = () =>
  new FormGroup<TiposGastoCrudForm>({
    descripcion: new FormControl('', [
      ...TiposGastoCrudValidators['descripcion'],
    ]),
  });
