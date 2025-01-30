import { FormGroup, FormControl } from '@angular/forms';
import { ClienteCrudValidators } from './validations';

export interface ClienteCrudForm {
  nombre: FormControl<string | null>;
  apellido: FormControl<string | null>;
  telefono: FormControl<string | null>;
  fecha_nacimiento: FormControl<any | null>;
}

export const ClienteCrudFormBuilder = () =>
  new FormGroup<ClienteCrudForm>({
    nombre: new FormControl('', [...ClienteCrudValidators['nombre']]),
    apellido: new FormControl(null, [...ClienteCrudValidators['apellido']]),
    telefono: new FormControl(null, [...ClienteCrudValidators['telefono']]),
    fecha_nacimiento: new FormControl('', [
      ...ClienteCrudValidators['fecha_nacimiento'],
    ]),
  });
