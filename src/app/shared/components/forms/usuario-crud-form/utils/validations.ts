import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';
import { emailValidator } from '../../../../utils/validaciones';

export const UsuarioCrudValidators: FormGroupValidators = {
  nombre_completo: [Validators.required, Validators.maxLength(160)],
  email: [Validators.required, Validators.maxLength(30), emailValidator()],
  rol_id: [Validators.required],
  password: [
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(6),
  ],
  password_repeat: [
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(6),
  ],
};

export const UsuarioCrudErrorMessages: FormErrorMessages = {
  rol_id: {
    required: 'El rol es requerido',
  },
  nombre_completo: {
    required: 'El nombre es requerido',
    maxlength: 'Solo se permite 160 caracteres.',
  },
  email: {
    required: 'El email es requerido',
    maxlength: 'Solo se permite 160 caracteres.',
  },
  password: {
    required: 'La contraseña es requerida',
    maxlength: 'Solo se permite entre 6 y 10 caracteres.',
    minlength: 'Solo se permite entre 6 y 10 caracteres.',
  },
  password_repeat: {
    required: 'La contraseña es requerida',
    maxlength: 'Solo se permite entre 6 y 10 caracteres.',
    minlength: 'Solo se permite entre 6 y 10 caracteres.',
  },
};

export function passwordMatchValidator(
  passwordField: string,
  confirmPasswordField: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(passwordField);
    const confirmPasswordControl = formGroup.get(confirmPasswordField);

    // Si las contraseñas no coinciden, retorna un error

    if (passwordControl?.value !== confirmPasswordControl?.value) {
      // passwordControl?.setErrors({ passwordsMismatch: true });
      // confirmPasswordControl?.setErrors({ passwordsMismatch: true });
      return { passwordsMismatch: true };
    }
    return null; // Si coinciden, no hay error
  };
}
