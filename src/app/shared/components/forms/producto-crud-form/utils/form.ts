import { FormGroup, FormControl } from '@angular/forms';
import { ProductoCrudValidators } from './validations';

export interface ProductoCrudForm {
  marca: FormControl<string | null>;
  descripcion: FormControl<string | null>;
  cantidad: FormControl<number | null>;
  precio: FormControl<number | null>;
  estado: FormControl<string | number | null>;
}

export const ProductoCrudFormBuilder = () =>
  new FormGroup<ProductoCrudForm>({
    marca: new FormControl('', [...ProductoCrudValidators['marca']]),
    descripcion: new FormControl(null, [
      ...ProductoCrudValidators['descripcion'],
    ]),
    cantidad: new FormControl(null, [...ProductoCrudValidators['cantidad']]),
    precio: new FormControl(null, [...ProductoCrudValidators['precio']]),
    estado: new FormControl('', [...ProductoCrudValidators['estado']]),
  });
