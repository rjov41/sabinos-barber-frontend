import { Validators } from '@angular/forms';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';

export const PedidoCrudValidators: FormGroupValidators = {
  cantidadPedido: [Validators.required, Validators.min(1)],
  precioUnitario: [Validators.required, Validators.maxLength(20)],
  precioTotal: [Validators.required, Validators.maxLength(20)],
};

export const PedidoCrudErrorMessages: FormErrorMessages = {
  cantidadPedido: {
    required: 'La cantidad es requerida',
    max: 'Excede la existencia en el inventario.',
    min: 'El mínimo de producto es 1.',
  },
  precioUnitario: {
    required: 'El precio es requerido',
    maxlength: 'Solo se permite 20 caracteres.',
  },
  precioTotal: {
    required: 'El precio es requerido',
    maxlength: 'Solo se permite 20 caracteres.',
  },
};
