import { Validators } from '@angular/forms';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';

export const EmpleadoCrudValidators: FormGroupValidators = {
  nombre_completo: [Validators.required, Validators.maxLength(80)],
  dni: [Validators.required, Validators.maxLength(80)],
};

export const EmpleadoCrudErrorMessages: FormErrorMessages = {
  nombre_completo: {
    required: 'El nombre es requerido',
    maxlength: 'Solo se permite 80 caracteres.',
  },
  dni: {
    required: 'El dni es requerido',
    maxlength: 'Solo se permite 80 caracteres.',
  },
};
