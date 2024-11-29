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
import { Cliente } from 'src/app/models/Cliente.model';
import { LocalesService } from 'src/app/services/locales.service';
import { Local } from 'src/app/models/Local.model';

@Component({
  selector: 'app-cliente-crud-form',
  standalone: true,
  imports: [
    CommonModule,
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
  templateUrl: './cliente-crud-form.component.html',
  styleUrl: './cliente-crud-form.component.scss',
})
export class ClienteCrudFormComponent {
  readonly ClienteCrudErrorMessages = ClienteCrudErrorMessages;
  ClienteCrudForm = ClienteCrudFormBuilder();
  #colorModeService = inject(ColorModeService);
  _LocalesServices = inject(LocalesService);

  @Input() Cliente!: Cliente;
  @Output() FormsValues = new EventEmitter<any>();

  Locales: Local[] = [];
  ngOnInit(): void {
    this.getLocales();
  }
  ngOnChanges(): void {
    if (this.Cliente) this.setFormValues();
  }

  getLocales() {
    this._LocalesServices
      .getLocales({ disablePaginate: '1', link: null })
      .subscribe((locales: Local[]) => {
        this.Locales = locales;
      });
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
    logger.log(this.Cliente);

    this.ClienteCrudForm.patchValue({
      nombre: this.Cliente.nombre,
      apellido: this.Cliente.apellido,
      telefono: this.Cliente.telefono,
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
