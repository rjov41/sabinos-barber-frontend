import { FormGroup, FormControl } from '@angular/forms';
import { MetodoPagoCrudValidators } from './validations';

export interface MetodoPagoCrudForm {
  tipo: FormControl<string | null>;
  descripcion: FormControl<string | null>;
}

export const MetodoPagoCrudFormBuilder = () =>
  new FormGroup<MetodoPagoCrudForm>({
    tipo: new FormControl('', [...MetodoPagoCrudValidators['tipo']]),
    descripcion: new FormControl('', [
      ...MetodoPagoCrudValidators['descripcion'],
    ]),
  });
