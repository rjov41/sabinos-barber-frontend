import { FormGroup, FormControl } from '@angular/forms';
import { LoginValidators } from './validations';

export interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export const LoginFormBuilder = () =>
  new FormGroup<LoginForm>({
    email: new FormControl(null, [...LoginValidators['email']]),
    password: new FormControl(null, [...LoginValidators['password']]),
  });
