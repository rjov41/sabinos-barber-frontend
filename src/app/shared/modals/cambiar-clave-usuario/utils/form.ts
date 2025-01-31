import { FormGroup, FormControl } from '@angular/forms';
import {
  passwordMatchValidator,
  UsuarioCambiarClaveValidators,
} from './validations';

export interface UsuarioPasswordCambiarClaveForm {
  password: FormControl<string | null>;
  password_repeat: FormControl<string | null>;
}

export const UsuarioCambiarClaveFormBuilder = () =>
  new FormGroup<UsuarioPasswordCambiarClaveForm>(
    {
      password: new FormControl('', [
        ...UsuarioCambiarClaveValidators['password'],
      ]),
      password_repeat: new FormControl('', [
        ...UsuarioCambiarClaveValidators['password_repeat'],
      ]),
    },
    { validators: passwordMatchValidator('password', 'password_repeat') }
  );
