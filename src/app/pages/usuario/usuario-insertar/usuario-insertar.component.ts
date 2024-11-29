import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioesService } from 'src/app/services/usuarios.service';
import logger from 'src/app/shared/utils/logger';

import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { UsuarioCrudFormComponent } from '../../../shared/components/forms/usuario-crud-form/usuario-crud-form.component';

@Component({
  selector: 'app-usuario-insertar',
  standalone: true,
  imports: [CardModule, GridModule, UsuarioCrudFormComponent],
  templateUrl: './usuario-insertar.component.html',
  styleUrl: './usuario-insertar.component.scss',
})
export class UsuarioInsertarComponent {
  #colorModeService = inject(ColorModeService);
  private _UsuarioesService = inject(UsuarioesService);
  private _Router = inject(Router);

  loader: boolean = true;

  FormsValues(Usuario: Usuario) {
    logger.log(Usuario);

    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    }).fire({
      title: 'Agregando usuario',
      text: 'Esto puede demorar un momento.',
      timerProgressBar: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      // allowEnterKey: false,
      focusConfirm: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    this._UsuarioesService.createUsuario(Usuario).subscribe((data) => {
      this.loader = false;
      console.log(data);
      Swal.mixin({
        customClass: {
          container: this.#colorModeService.getStoredTheme(
            environment.SabinosTheme
          ),
        },
      })
        .fire({
          text: 'Usuario agregado con éxito',
          icon: 'success',
        })
        .then((result) => {
          this._Router.navigateByUrl(`/usuarios/editar/${data.Usuario.id}`);
        });
    });
  }
}
