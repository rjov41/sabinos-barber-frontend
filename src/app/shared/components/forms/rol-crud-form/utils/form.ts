import { FormGroup, FormControl } from '@angular/forms';
import { RolCrudValidators } from './validations';

export interface RolCrudForm {
  name: FormControl<string | null>;
}

export const RolCrudFormBuilder = () =>
  new FormGroup<RolCrudForm>({
    name: new FormControl('', [...RolCrudValidators['name']]),
  });
