import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import {
  ButtonDirective,
  ColComponent,
  ColorModeService,
  FormFloatingDirective,
  FormModule,
  ModalModule,
  ModalService,
  RowComponent,
} from '@coreui/angular';
import { PedidoCrudFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { PedidoCrudErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';
import { PedidoService } from '../../../../services/pedido.service';
import { Producto } from 'src/app/models/Producto.model';

@Component({
  selector: 'app-pedido-form',
  standalone: true,
  imports: [
    CommonModule,
    RowComponent,
    ColComponent,
    ButtonDirective,
    FormFloatingDirective,
    FormModule,
    ReactiveFormsModule,
    ValidMessagesFormComponent,
    ModalModule,
    DirectivesModule,
  ],
  templateUrl: './pedido-form.component.html',
  styleUrl: './pedido-form.component.scss',
})
export class PedidoFormComponent {
  readonly PedidoCrudErrorMessages = PedidoCrudErrorMessages;
  PedidoForm = PedidoCrudFormBuilder();
  #colorModeService = inject(ColorModeService);
  _PedidoService = inject(PedidoService);
  _ModalService = inject(ModalService);

  @Input() Producto!: Producto;

  ngOnChanges(): void {
    if (this.Producto) this.setFormValues();
    console.log(this.Producto);

    this.PedidoForm.valueChanges.subscribe(() => {
      console.log(this.PedidoForm);
    });
  }

  getControlError(name: string): ValidationErrors | null {
    const control = this.PedidoForm.controls ? this.PedidoForm.get(name) : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.PedidoForm.get(name) as FormControl;
  }

  setFormValues() {
    logger.log(this.Producto);

    this.PedidoForm.setValue({
      cantidad: this.Producto.cantidad,
      precio: this.Producto.precio,
    });
  }

  sendValueFom() {
    if (this.PedidoForm.valid) {
      const PRODUT = {
        ...this.Producto,
        ...this.PedidoForm.value,
      };
      this._PedidoService.agregarProducto(PRODUT as Producto);
      Swal.mixin({
        customClass: {
          container: this.#colorModeService.getStoredTheme(
            environment.SabinosTheme
          ),
        },
      })
        .fire({
          icon: 'success',
        })
        .then((result) => {
          this._ModalService.toggle({ id: 'ListadoProductos', show: false });
        });
    } else {
      Swal.mixin({
        customClass: {
          container: this.#colorModeService.getStoredTheme(
            environment.SabinosTheme
          ),
        },
      }).fire({
        text: 'Complete todos los campos obligatorios',
        icon: 'warning',
      });
    }
  }
}
