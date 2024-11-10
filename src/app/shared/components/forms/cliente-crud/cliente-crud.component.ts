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
  FormSelectDirective,
  ModalModule,
  RowComponent,
} from '@coreui/angular';
import { SelectComponent } from 'src/app/documentacion/forms/select/select.component';
import { ClienteCrudFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { ClienteCrudErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';

@Component({
  selector: 'app-cliente-crud',
  standalone: true,
  templateUrl: './cliente-crud.component.html',
  styleUrl: './cliente-crud.component.scss',
  imports: [
    CommonModule,
    SelectComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    FormFloatingDirective,
    FormSelectDirective,
    FormModule,
    ReactiveFormsModule,
    ValidMessagesFormComponent,
    ModalModule,
    DirectivesModule,
  ],
})
export class ClienteCrudComponent {
  readonly ClienteCrudErrorMessages = ClienteCrudErrorMessages;
  ClienteCrudForm = ClienteCrudFormBuilder();
  #colorModeService = inject(ColorModeService);

  @Input() Cliente: any = null;
  @Output() FormsValues = new EventEmitter<any>();

  ngOnInit(): void {
    if (this.Cliente) this.setFormValues();
  }

  getControlError(name: string): ValidationErrors | null {
    const control = this.ClienteCrudForm.controls
      ? this.ClienteCrudForm.get(name)
      : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.ClienteCrudForm.get(name) as FormControl;
  }

  setFormValues() {
    this.ClienteCrudForm.patchValue({
      marca: 'marca',
      descripcion: 'descripcion',
      cantidad: 5,
      precio: 20.5,
      estado: 1,
    });
  }

  sendValueFom() {
    if (this.ClienteCrudForm.valid) {
      this.FormsValues.emit(this.ClienteCrudForm.value);
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
