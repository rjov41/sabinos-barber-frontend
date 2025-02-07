import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
  RowComponent,
  SpinnerModule,
} from '@coreui/angular';
import { MetodoPagoCrudFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { MetodoPagoCrudErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';
import { Empleado } from 'src/app/models/Empleado.model';
import { Subject, takeUntil } from 'rxjs';
import { MetodoPago } from '../../../../models/MetodoPago.model';

@Component({
  selector: 'app-metodo-pago-crud-form',
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
    SpinnerModule,
  ],
  templateUrl: './metodo-pago-crud-form.component.html',
  styleUrl: './metodo-pago-crud-form.component.scss',
})
export class MetodoPagoCrudFormComponent {
  MetodoPagoCrudForm = MetodoPagoCrudFormBuilder();
  readonly MetodoPagoCrudErrorMessages = MetodoPagoCrudErrorMessages;

  private destruir$: Subject<void> = new Subject<void>();

  loadingEmpleados: boolean = false;
  Empleados: Empleado[] = [];

  #colorModeService = inject(ColorModeService);

  @Input() MetodoPago!: MetodoPago;
  @Output() FormsValues = new EventEmitter<any>();

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.MetodoPago) this.setFormValues();
  }

  getControlError(name: string): ValidationErrors | null {
    const control = this.MetodoPagoCrudForm.controls
      ? this.MetodoPagoCrudForm.get(name)
      : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.MetodoPagoCrudForm.get(name) as FormControl;
  }

  setFormValues() {
    logger.log(this.MetodoPago);

    this.MetodoPagoCrudForm.patchValue({
      tipo: this.MetodoPago.tipo,
      descripcion: this.MetodoPago.descripcion,
    });
  }

  sendValueFom() {
    if (this.MetodoPagoCrudForm.valid) {
      const MetodoPago = {
        ...this.MetodoPagoCrudForm.value,
      };
      logger.log(MetodoPago);

      this.FormsValues.emit(MetodoPago);
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

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
