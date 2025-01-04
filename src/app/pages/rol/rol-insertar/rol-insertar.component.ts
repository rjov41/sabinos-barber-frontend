import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import { Role } from 'src/app/models/Role.model';
import { RolesService } from 'src/app/services/role.service';
import logger from 'src/app/shared/utils/logger';

import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { RolCrudFormComponent } from '../../../shared/components/forms/rol-crud-form/rol-crud-form.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-rol-insertar',
  standalone: true,
  imports: [CardModule, GridModule, RolCrudFormComponent],
  templateUrl: './rol-insertar.component.html',
  styleUrl: './rol-insertar.component.scss',
})
export class RolInsertarComponent {
  private destruir$: Subject<void> = new Subject<void>();
  #colorModeService = inject(ColorModeService);
  private _RolesService = inject(RolesService);
  private _Router = inject(Router);

  loader: boolean = true;

  FormsValues(Rol: Role) {
    logger.log(Rol);

    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    }).fire({
      title: 'Agregando rol',
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
    this._RolesService
      .createRol(Rol)
      .pipe(takeUntil(this.destruir$))
      .subscribe((data) => {
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
            text: 'Rol agregado con éxito',
            icon: 'success',
          })
          .then((result) => {
            this._Router.navigateByUrl(`/roles/editar/${data.Rol.id}`);
          });
      });
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
