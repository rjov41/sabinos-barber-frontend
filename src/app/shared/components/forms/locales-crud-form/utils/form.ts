import { FormGroup, FormControl } from '@angular/forms';
import { LocalCrudValidators } from './validations';

export interface LocalCrudForm {
  nombre: FormControl<string | null>;
}

export const LocalCrudFormBuilder = () =>
  new FormGroup<LocalCrudForm>({
    nombre: new FormControl('', [...LocalCrudValidators['nombre']]),
  });
