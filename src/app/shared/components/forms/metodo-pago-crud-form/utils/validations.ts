import { Validators } from '@angular/forms';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';

export const MetodoPagoCrudValidators: FormGroupValidators = {
  tipo: [Validators.required],
  descripcion: [Validators.required],
};

export const MetodoPagoCrudErrorMessages: FormErrorMessages = {
  tipo: {
    required: 'El tipo es requerido',
    maxlength: 'Solo se permite 80 caracteres.',
  },
  descripcion: {
    required: 'La descripción es requerida',
    maxlength: 'Solo se permite 80 caracteres.',
  },
};
