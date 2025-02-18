import { FormGroup, FormControl } from '@angular/forms';
import { LocalChangeValidators } from './validations';

export interface LocalChangeForm {
  local_id: FormControl<number | string | null>;
}

export const LocalChangeFormBuilder = () =>
  new FormGroup<LocalChangeForm>({
    local_id: new FormControl('', [...LocalChangeValidators['local_id']]),
  });
