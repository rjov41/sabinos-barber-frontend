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
import { LocalCrudFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { LocalCrudErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';
import { LocalesService } from 'src/app/services/locales.service';
import { Local } from 'src/app/models/Local.model';

@Component({
  selector: 'app-locales-crud-form',
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
  templateUrl: './locales-crud-form.component.html',
  styleUrl: './locales-crud-form.component.scss',
})
export class LocalesCrudFormComponent {
  readonly LocalCrudErrorMessages = LocalCrudErrorMessages;
  LocalCrudForm = LocalCrudFormBuilder();
  #colorModeService = inject(ColorModeService);
  _LocalesServices = inject(LocalesService);

  @Input() Local!: Local;
  @Output() FormsValues = new EventEmitter<any>();

  Locales: Local[] = [];

  ngOnChanges(): void {
    if (this.Local) this.setFormValues();
  }

  getControlError(name: string): ValidationErrors | null {
    const control = this.LocalCrudForm.controls
      ? this.LocalCrudForm.get(name)
      : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.LocalCrudForm.get(name) as FormControl;
  }

  setFormValues() {
    logger.log(this.Local);

    this.LocalCrudForm.patchValue({
      nombre: this.Local.nombre,
      // apellido: this.Local.nombre,
    });
  }

  sendValueFom() {
    if (this.LocalCrudForm.valid) {
      this.FormsValues.emit(this.LocalCrudForm.value);
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
