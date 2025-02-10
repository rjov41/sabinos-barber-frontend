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
} from '@coreui/angular';
import { EmpleadoCrudFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { EmpleadoCrudErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from 'src/app/models/Empleado.model';
import { takeUntil } from 'rxjs';
import { LocalesService } from '../../../../services/locales.service';
import { Listado } from '../../../../models/Listados.model';
import { Local } from '../../../../models/Local.model';

@Component({
  selector: 'app-empleado-crud-form',
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
  templateUrl: './empleado-crud-form.component.html',
  styleUrl: './empleado-crud-form.component.scss',
})
export class EmpleadoCrudFormComponent {
  readonly EmpleadoCrudErrorMessages = EmpleadoCrudErrorMessages;
  EmpleadoCrudForm = EmpleadoCrudFormBuilder();
  #colorModeService = inject(ColorModeService);
  _EmpleadosService = inject(EmpleadosService);
  private _LocalsService = inject(LocalesService);

  @Input() Empleado!: Empleado;
  @Output() FormsValues = new EventEmitter<any>();

  Empleadoes: Empleado[] = [];

  loadingLocales = false;
  Locales: Local[] = [];

  ngOnInit(): void {
    this.getLocales();
  }

  ngOnChanges(): void {
    if (this.Empleado) this.setFormValues();
  }

  getControlError(name: string): ValidationErrors | null {
    const control = this.EmpleadoCrudForm.controls
      ? this.EmpleadoCrudForm.get(name)
      : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.EmpleadoCrudForm.get(name) as FormControl;
  }

  setFormValues() {
    logger.log(this.Empleado);

    this.EmpleadoCrudForm.patchValue({
      nombre_completo: this.Empleado.nombre_completo,
      dni: this.Empleado.dni,
      local_id: this.Empleado.local_id,
      // apellido: this.Empleado.nombre,
    });
  }

  getLocales() {
    this.loadingLocales = true;

    this._LocalsService
      .getLocales({
        link: null,
        disablePaginate: '1',
      })
      // .pipe(delay(3000))
      // .pipe(takeUntil(this.destruir$))
      .subscribe((data: Local[]) => {
        this.loadingLocales = false;
        this.Locales = [...data];
        logger.log(data);
      });
  }

  sendValueFom() {
    if (this.EmpleadoCrudForm.valid) {
      this.FormsValues.emit(this.EmpleadoCrudForm.value);
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
