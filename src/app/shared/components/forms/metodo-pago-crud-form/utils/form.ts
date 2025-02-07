import { FormGroup, FormControl } from '@angular/forms';
import { MetodoPagoCrudValidators } from './validations';

export interface NominaCrudForm {
  tipo: FormControl<string | null>;
  descripcion: FormControl<string | null>;
}

export const MetodoPagoCrudFormBuilder = () =>
  new FormGroup<NominaCrudForm>({
    tipo: new FormControl('', [...MetodoPagoCrudValidators['tipo']]),
    descripcion: new FormControl('', [
      ...MetodoPagoCrudValidators['descripcion'],
    ]),
  });
