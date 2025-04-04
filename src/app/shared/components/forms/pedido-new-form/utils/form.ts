import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { PedidoCrudValidators, validarProductosCargados } from './validations';

export interface PedidoCrudForm {
  cliente_id: FormControl<number | null>;
  servicio_id: FormControl<number | null>;
  metodo_pago_id: FormControl<number | null>;
  productos: FormArray<FormGroup<PedidoProductoForm>>;
  pendiente: FormControl<boolean | null>;
  completado: FormControl<boolean | null>;
  editable: FormControl<boolean | null>;
}

export const PedidoCrudFormBuilder = () =>
  new FormGroup<PedidoCrudForm>(
    {
      cliente_id: new FormControl(
        {
          disabled: true,
          value: null,
        },
        [...PedidoCrudValidators['cliente_id']]
      ),
      servicio_id: new FormControl(null, [
        ...PedidoCrudValidators['servicio_id'],
      ]),
      metodo_pago_id: new FormControl(null, [
        ...PedidoCrudValidators['metodo_pago_id'],
      ]),
      productos: new FormArray<FormGroup<PedidoProductoForm>>([
        // crearProductoArrayForm(),
      ]), // Inicializar con un gasto
      pendiente: new FormControl(false),
      completado: new FormControl(false),
      editable: new FormControl(true),
    },
    { validators: validarProductosCargados }
  );

export interface PedidoProductoForm {
  producto_id: FormControl<number | null>;
  cantidad: FormControl<number | null>;
  precio_unitario: FormControl<number | null>;
  precio: FormControl<number | null>;
  gratis: FormControl<boolean | null>;
  pendiente: FormControl<boolean | null>;
  completado: FormControl<boolean | null>;
  editable: FormControl<boolean | null>;
  pendienteEliminado: FormControl<boolean | null>;
  facturtaProdutoId: FormControl<boolean | null>;
}

const crearProductoArrayForm = (): FormGroup<PedidoProductoForm> => {
  return new FormGroup<PedidoProductoForm>(
    {
      producto_id: new FormControl(null, [
        ...PedidoCrudValidators['producto_id'],
      ]),
      cantidad: new FormControl({ disabled: true, value: 0 }, [
        ...PedidoCrudValidators['cantidad'],
      ]),
      precio_unitario: new FormControl({ disabled: true, value: 0 }, [
        ...PedidoCrudValidators['precio_unitario'],
      ]),
      precio: new FormControl({ disabled: true, value: 0 }, [
        ...PedidoCrudValidators['precio'],
      ]),
      gratis: new FormControl({ disabled: true, value: false }, [
        ...PedidoCrudValidators['gratis'],
      ]),
      pendiente: new FormControl(false),
      completado: new FormControl(false),
      editable: new FormControl(false),
      pendienteEliminado: new FormControl(false),
      facturtaProdutoId: new FormControl(null),
    },
    { updateOn: 'change' }
  );
};

export const agregarProductosArray = (form: FormGroup<PedidoCrudForm>) => {
  form.controls.productos.push(crearProductoArrayForm()); // Agregar una nueva instancia
};
