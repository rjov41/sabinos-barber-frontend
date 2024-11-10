import { FormGroup, FormControl } from '@angular/forms';
import { ClienteCrudValidators } from './validations';

export interface ClienteCrudForm {
  marca: FormControl<string | null>;
  descripcion: FormControl<string | null>;
  cantidad: FormControl<number | null>;
  precio: FormControl<number | null>;
  estado: FormControl<string | number | null>;
}

export const ClienteCrudFormBuilder = () =>
  new FormGroup<ClienteCrudForm>({
    marca: new FormControl('', [...ClienteCrudValidators['marca']]),
    descripcion: new FormControl(null, [
      ...ClienteCrudValidators['descripcion'],
    ]),
    cantidad: new FormControl(null, [...ClienteCrudValidators['cantidad']]),
    precio: new FormControl(null, [...ClienteCrudValidators['precio']]),
    estado: new FormControl('', [...ClienteCrudValidators['estado']]),
  });
