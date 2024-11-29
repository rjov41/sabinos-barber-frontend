import { Validators } from '@angular/forms';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';

export const LocalCrudValidators: FormGroupValidators = {
  nombre: [Validators.required, Validators.maxLength(20)],
};

export const LocalCrudErrorMessages: FormErrorMessages = {
  nombre: {
    required: 'El nombre es requerido',
    maxlength: 'Solo se permite 20 caracteres.',
  },
};
