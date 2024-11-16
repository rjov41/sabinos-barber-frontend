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
import { ProductoCrudFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { ProductoCrudErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';

@Component({
  selector: 'app-producto-crud-form',
  standalone: true,
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
  templateUrl: './producto-crud-form.component.html',
  styleUrl: './producto-crud-form.component.scss',
})
export class ProductoCrudFormComponent {
  readonly ProductoCrudErrorMessages = ProductoCrudErrorMessages;
  ProductoCrudForm = ProductoCrudFormBuilder();
  #colorModeService = inject(ColorModeService);

  @Input() Producto: any = null;
  @Output() FormsValues = new EventEmitter<any>();

  ngOnChanges(): void {
    if (this.Producto) this.setFormValues();
  }

  getControlError(name: string): ValidationErrors | null {
    const control = this.ProductoCrudForm.controls
      ? this.ProductoCrudForm.get(name)
      : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.ProductoCrudForm.get(name) as FormControl;
  }

  setFormValues() {
    this.ProductoCrudForm.patchValue({
      marca: 'marca',
      descripcion: 'descripcion',
      cantidad: 5,
      precio: 20.5,
      estado: 1,
    });
  }

  sendValueFom() {
    if (this.ProductoCrudForm.valid) {
      this.FormsValues.emit(this.ProductoCrudForm.value);
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
