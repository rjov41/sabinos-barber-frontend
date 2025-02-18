import { Validators } from '@angular/forms';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';

export const LocalChangeValidators: FormGroupValidators = {
  local_id: [Validators.required],
};

export const LocalChangeErrorMessages: FormErrorMessages = {
  local_id: {
    required: 'El local es requerido',
  },
};
