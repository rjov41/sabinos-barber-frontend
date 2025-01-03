import { FormGroup, FormControl } from '@angular/forms';
import { PedidoCrudValidators } from './validations';

export interface PedidoCrudForm {
  cantidadPedido: FormControl<number | null>;
  precioUnitario: FormControl<number | null>;
  precioTotal: FormControl<number | null>;
}

export const PedidoCrudFormBuilder = () =>
  new FormGroup<PedidoCrudForm>({
    cantidadPedido: new FormControl(null, [
      ...PedidoCrudValidators['cantidadPedido'],
    ]),
    precioUnitario: new FormControl(null, [
      ...PedidoCrudValidators['precioUnitario'],
    ]),
    precioTotal: new FormControl(null, [
      ...PedidoCrudValidators['precioTotal'],
    ]),
  });
