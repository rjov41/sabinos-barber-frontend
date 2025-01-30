import { Validators } from '@angular/forms';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';

export const ClienteCrudValidators: FormGroupValidators = {
  nombre: [Validators.required, Validators.maxLength(80)],
  apellido: [Validators.required, Validators.maxLength(80)],
  telefono: [Validators.required, Validators.maxLength(20)],
  fecha_nacimiento: [Validators.required],
};

export const ClienteCrudErrorMessages: FormErrorMessages = {
  nombre: {
    required: 'El nombre es requerido',
    maxlength: 'Solo se permite 80 caracteres.',
  },
  apellido: {
    required: 'El apellido es requerido.',
    maxlength: 'Solo se permite 80 caracteres.',
  },
  telefono: {
    required: 'El teléfono es requerido.',
    maxlength: 'Solo se permite 20 caracteres.',
  },
  fecha_nacimiento: {
    required: 'La fecha de nacimiento es requerida.',
  },
};
