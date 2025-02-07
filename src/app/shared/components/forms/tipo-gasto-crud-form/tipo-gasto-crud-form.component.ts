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
import { TiposGastoCrudFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { TiposGastoCrudErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';
import { Empleado } from 'src/app/models/Empleado.model';
import { Subject } from 'rxjs';
import { TipoGasto } from '../../../../models/TipoGasto.model';

@Component({
  selector: 'app-tipo-gasto-crud-form',
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
  templateUrl: './tipo-gasto-crud-form.component.html',
  styleUrl: './tipo-gasto-crud-form.component.scss',
})
export class TipoGastoCrudFormComponent {
  TipoGastoCrudForm = TiposGastoCrudFormBuilder();
  readonly TipoGastoCrudErrorMessages = TiposGastoCrudErrorMessages;

  private destruir$: Subject<void> = new Subject<void>();

  loadingEmpleados: boolean = false;
  Empleados: Empleado[] = [];

  #colorModeService = inject(ColorModeService);

  @Input() TipoGasto!: TipoGasto;
  @Output() FormsValues = new EventEmitter<any>();

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.TipoGasto) this.setFormValues();
  }

  getControlError(name: string): ValidationErrors | null {
    const control = this.TipoGastoCrudForm.controls
      ? this.TipoGastoCrudForm.get(name)
      : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.TipoGastoCrudForm.get(name) as FormControl;
  }

  setFormValues() {
    logger.log(this.TipoGastoCrudForm);

    this.TipoGastoCrudForm.patchValue({
      descripcion: this.TipoGasto.descripcion,
    });
  }

  sendValueFom() {
    if (this.TipoGastoCrudForm.valid) {
      const TipoGasto = {
        ...this.TipoGastoCrudForm.value,
      };
      logger.log(TipoGasto);

      this.FormsValues.emit(TipoGasto);
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
