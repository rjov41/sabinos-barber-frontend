import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../utils/interfaces';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export const UsuarioCambiarClaveValidators: FormGroupValidators = {
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

export const UsuarioCambiarClaveErrorMessages: FormErrorMessages = {
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
