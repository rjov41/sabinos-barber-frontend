import { Validators } from '@angular/forms';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';

export const TiposGastoCrudValidators: FormGroupValidators = {
  descripcion: [Validators.required],
};

export const TiposGastoCrudErrorMessages: FormErrorMessages = {
  tipo: {
    required: 'El tipo es requerido',
    maxlength: 'Solo se permite 80 caracteres.',
  },
  descripcion: {
    required: 'La descripción es requerida',
    maxlength: 'Solo se permite 80 caracteres.',
  },
};
