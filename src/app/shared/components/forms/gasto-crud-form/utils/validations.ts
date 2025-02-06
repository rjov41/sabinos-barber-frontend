import { Validators } from '@angular/forms';
import {
  FormErrorMessages,
  FormGroupValidators,
} from '../../../../utils/interfaces';

export const GastoCrudValidators: FormGroupValidators = {
  user_id: [Validators.required],
  empleado_id: [Validators.required],
  producto_id: [
    Validators.required,
    Validators.min(1),
    Validators.pattern(/^[0-9]+$/),
  ],
  cantidad: [
    Validators.required,
    Validators.min(1),
    Validators.max(1000),
    Validators.pattern(/^[0-9]+$/),
  ],
  precio_unitario: [
    Validators.required,
    Validators.min(0.01),
    Validators.pattern(/^\d+(\.\d{1,2})?$/),
  ],
  precio: [
    Validators.required,
    Validators.min(1),
    Validators.pattern(/^[0-9]+$/),
  ],
  tipo_gasto: [
    Validators.required,
    Validators.min(1),
    Validators.pattern(/^[0-9]+$/),
  ],
};

export const GastoCrudErrorMessages: FormErrorMessages = {
  user_id: {
    required: 'El usuario es requerido',
    maxlength: 'Máximo 80 caracteres permitidos',
  },
  empleado_id: {
    required: 'El empleado es requerido',
    maxlength: 'Máximo 80 caracteres permitidos',
  },
  producto_id: {
    required: 'El producto es requerido',
    min: 'Debe ser un ID válido',
    pattern: 'Solo números enteros permitidos',
  },
  cantidad: {
    required: 'La cantidad es requerida',
    min: 'Mínimo 1 unidad',
    max: 'Máximo 1000 unidades',
    pattern: 'Solo números enteros permitidos',
  },
  precio_unitario: {
    required: 'El precio unitario es requerido',
    min: 'El precio mínimo es 0.01',
    pattern: 'Formato monetario inválido (ej: 123.45)',
  },
  precio: {
    required: 'El precio unitario es requerido',
    min: 'El precio mínimo es 0.01',
    pattern: 'Formato monetario inválido (ej: 123.45)',
  },
  tipo_gasto: {
    required: 'El tipo de gasto es requerido',
    min: 'Seleccione un tipo válido',
    pattern: 'Solo números enteros permitidos',
  },
};
