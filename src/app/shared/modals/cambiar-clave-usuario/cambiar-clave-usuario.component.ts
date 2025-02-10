import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
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
  SpinnerComponent,
} from '@coreui/angular';
import { ValidMessagesFormComponent } from '../../components/valid-messages-form/valid-messages-form.component';
import { DirectivesModule } from '../../directivas/directives.module';
import { catchError, Subject, takeUntil } from 'rxjs';
import { UsuarioesService } from '../../../services/usuarios.service';
import { RolesService } from '../../../services/role.service';
import { UsuarioCambiarClaveFormBuilder } from './utils/form';
import { UsuarioCambiarClaveErrorMessages } from './utils/validations';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../../models/Usuario.model';
import logger from '../../utils/logger';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';
import { HelpersService } from '../../../services/helpers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-clave-usuario',
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
    SpinnerComponent,
  ],
  templateUrl: './cambiar-clave-usuario.component.html',
  styleUrl: './cambiar-clave-usuario.component.scss',
})
export class CambiarClaveUsuarioComponent {
  private destruir$: Subject<void> = new Subject<void>();
  readonly UsuarioCrudErrorMessages = UsuarioCambiarClaveErrorMessages;
  private _UsuarioesServices = inject(UsuarioesService);
  private _HelpersService = inject(HelpersService);
  private _RolesService = inject(RolesService);
  public _ActiveModal = inject(NgbActiveModal);
  private _Router = inject(Router);
  UsuarioCambioClaveForm = UsuarioCambiarClaveFormBuilder();
  #colorModeService = inject(ColorModeService);

  @Input() Usuario!: Usuario;
  loader: boolean = false;
  ngOnInit(): void {
    logger.log('this.Usuario', this.Usuario);
  }

  ngOnChanges(): void {}

  getControlError(name: string): ValidationErrors | null {
    const control = this.UsuarioCambioClaveForm.controls
      ? this.UsuarioCambioClaveForm.get(name)
      : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.UsuarioCambioClaveForm.get(name) as FormControl;
  }

  sendValueFom() {
    if (this.UsuarioCambioClaveForm.valid) {
      this.loader = true;

      const { password, password_repeat } = this.UsuarioCambioClaveForm.value;
      this._UsuarioesServices
        .updateContraseña(Number(this.Usuario.id), {
          password: String(password),
          password_confirmation: String(password_repeat),
        })
        .pipe(
          takeUntil(this.destruir$),
          catchError((error) =>
            this._HelpersService.handleErrorApiCrud(
              error,
              'No se pudo insertar el usuario.'
            )
          )
        )
        .subscribe((data) => {
          this.loader = false;
          // console.log(data);
          Swal.mixin({
            customClass: {
              container: this.#colorModeService.getStoredTheme(
                environment.SabinosTheme
              ),
            },
          })
            .fire({
              text: 'Contraseña modificada con éxito',
              icon: 'success',
            })
            .then((result) => {
              this._ActiveModal.dismiss();
            });
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
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
