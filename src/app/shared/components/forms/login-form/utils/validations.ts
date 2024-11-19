import { Validators } from '@angular/forms';
import { emailValidator } from '../../../../utils/validaciones';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';

export const LoginValidators: FormGroupValidators = {
  email: [Validators.required, Validators.maxLength(30), emailValidator()],
  password: [Validators.required, Validators.maxLength(30)],
};

export const LoginErrorMessages: FormErrorMessages = {
  email: {
    required: 'El email es requerido.',
    maxlength: 'Solo se permite 30 caracteres.',
    emailInvalid: 'El tipo de email no es valido',
  },
  password: {
    required: 'La contraseña es requerida.',
    maxlength: 'Solo se permite 30 caracteres.',
  },
};
