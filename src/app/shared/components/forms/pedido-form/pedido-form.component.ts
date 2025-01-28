import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
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
import { Producto, ProductoPedido } from 'src/app/models/Producto.model';
import { Subject, takeUntil } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  private destruir$: Subject<void> = new Subject<void>();
  activeModal = inject(NgbActiveModal);

  readonly PedidoCrudErrorMessages = PedidoCrudErrorMessages;
  PedidoForm = PedidoCrudFormBuilder();
  #colorModeService = inject(ColorModeService);
  _PedidoService = inject(PedidoService);
  _ModalService = inject(ModalService);
  _ModalServiceNgB = inject(NgbModal);

  @Input() Producto!: Producto;

  ngOnChanges(): void {
    if (this.Producto) {
      this.setFormValues();
      this.validarCantidadMaxima();
      this.validarPrecioTotal();
    }

    this.PedidoForm.valueChanges
      .pipe(takeUntil(this.destruir$))
      .subscribe(() => {
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

  validarPrecioTotal() {
    this.PedidoForm.controls.cantidadPedido.valueChanges.subscribe((value) => {
      logger.log('value', value);
      this.PedidoForm.controls.precioTotal.setValue(
        Number(value) * this.Producto.precio
      );
    });
  }

  validarCantidadMaxima() {
    // logger.log(
    //   'this.PedidoForm.controls.cantidad',
    //   this.PedidoForm.controls.cantidad
    // );

    this.PedidoForm.controls.cantidadPedido.addValidators([
      Validators.max(this.Producto.cantidad),
    ]);
  }

  setFormValues() {
    logger.log(this.Producto);

    this.PedidoForm.patchValue({
      // cantidad: this.Producto.cantidad,
      precioUnitario: this.Producto.precio,
    });
  }

  sendValueFom() {
    if (this.PedidoForm.valid) {
      const PRODUT: ProductoPedido = {
        ...this.Producto,
        precioTotal: Number(this.PedidoForm.controls.precioTotal.value),
        precioUnitario: Number(this.PedidoForm.controls.precioUnitario.value),
        cantidadPedido: Number(this.PedidoForm.controls.cantidadPedido.value),
      };
      // logger.log('darda', PRODUT);
      this._PedidoService.agregarProducto(PRODUT);
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
    this._ModalServiceNgB.dismissAll();
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
