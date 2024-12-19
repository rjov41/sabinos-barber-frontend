import { FormGroup, FormControl } from '@angular/forms';
import { PedidoCrudValidators } from './validations';

export interface PedidoCrudForm {
  cantidad: FormControl<number | null>;
  precio: FormControl<number | null>;
}

export const PedidoCrudFormBuilder = () =>
  new FormGroup<PedidoCrudForm>({
    cantidad: new FormControl(null, [...PedidoCrudValidators['cantidad']]),
    precio: new FormControl(null, [...PedidoCrudValidators['precio']]),
  });
