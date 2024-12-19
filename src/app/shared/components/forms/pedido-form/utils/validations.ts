import { Validators } from '@angular/forms';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';

export const PedidoCrudValidators: FormGroupValidators = {
  cantidad: [Validators.required, Validators.min(1), Validators.maxLength(3)],
  precio: [Validators.required, Validators.maxLength(20)],
};

export const PedidoCrudErrorMessages: FormErrorMessages = {
  cantidad: {
    required: 'La cantidad es requerida',
    maxlength: 'Solo se permite 20 caracteres.',
    min: 'El mínimo de producto es 1.',
  },
  precio: {
    required: 'El precio es requerido',
    maxlength: 'Solo se permite 20 caracteres.',
  },
};
