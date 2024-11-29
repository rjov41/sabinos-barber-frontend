import { Validators } from '@angular/forms';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';

export const RolCrudValidators: FormGroupValidators = {
  name: [Validators.required, Validators.maxLength(30)],
};

export const RolCrudErrorMessages: FormErrorMessages = {
  name: {
    required: 'El nombre es requerido',
    maxlength: 'Solo se permite 30 caracteres.',
  },
};
