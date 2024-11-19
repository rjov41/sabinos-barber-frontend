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
  ContainerComponent,
  FormFloatingDirective,
  FormModule,
  ModalModule,
  RowComponent,
  SpinnerComponent,
} from '@coreui/angular';
import { SelectComponent } from 'src/app/documentacion/forms/select/select.component';
import { LoginFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { LoginErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  imports: [
    CommonModule,
    SelectComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    FormFloatingDirective,
    FormModule,
    ReactiveFormsModule,
    ValidMessagesFormComponent,
    ModalModule,
    DirectivesModule,
    IconDirective,
    SpinnerComponent,
  ],
})
export class LoginFormComponent {
  #colorModeService = inject(ColorModeService);

  LoginForm = LoginFormBuilder();

  readonly LoginErrorMessages = LoginErrorMessages;

  @Output() LoginFormValues = new EventEmitter<any>();
  @Input() loadingFormLogin: boolean = false;

  getControlError(name: string): ValidationErrors | null {
    const control = this.LoginForm.controls ? this.LoginForm.get(name) : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.LoginForm.get(name) as FormControl;
  }

  login() {
    if (this.LoginForm.valid) {
      this.loadingFormLogin = true;
      this.LoginFormValues.emit(this.LoginForm.value);
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
