import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function emailValidator(): ValidatorFn {
  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Si está vacío, no valida aquí (puedes usar Validators.required aparte)
    if (!value) {
      return null;
    }

    // Validar el patrón
    const isValid = emailRegex.test(value);
    return isValid ? null : { emailInvalid: true };
  };
}
