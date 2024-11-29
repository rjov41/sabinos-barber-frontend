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
import { RolCrudFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { RolCrudErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';
import { RolesService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/Role.model';

@Component({
  selector: 'app-rol-crud-form',
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
  templateUrl: './rol-crud-form.component.html',
  styleUrl: './rol-crud-form.component.scss',
})
export class RolCrudFormComponent {
  readonly RolCrudErrorMessages = RolCrudErrorMessages;
  RolCrudForm = RolCrudFormBuilder();
  #colorModeService = inject(ColorModeService);
  _RolesServices = inject(RolesService);

  @Input() Rol!: Role;
  @Output() FormsValues = new EventEmitter<any>();

  Roles: Role[] = [];

  ngOnChanges(): void {
    if (this.Rol) this.setFormValues();
  }

  getControlError(name: string): ValidationErrors | null {
    const control = this.RolCrudForm.controls
      ? this.RolCrudForm.get(name)
      : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.RolCrudForm.get(name) as FormControl;
  }

  setFormValues() {
    logger.log(this.Rol);

    this.RolCrudForm.patchValue({
      name: this.Rol.name,
      // apellido: this.Rol.nombre,
    });
  }

  sendValueFom() {
    if (this.RolCrudForm.valid) {
      this.FormsValues.emit(this.RolCrudForm.value);
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
