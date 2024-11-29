import { RolCrudFormComponent } from 'src/app/shared/components/forms/rol-crud-form/rol-crud-form.component';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import { Role } from 'src/app/models/Role.model';
import { RolesService } from 'src/app/services/role.service';
import logger from 'src/app/shared/utils/logger';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rol-editar',
  standalone: true,
  imports: [CardModule, GridModule, RolCrudFormComponent],
  templateUrl: './rol-editar.component.html',
  styleUrl: './rol-editar.component.scss',
})
export class RolEditarComponent {
  #colorModeService = inject(ColorModeService);
  private _RolsService = inject(RolesService);
  private _ActivatedRoute = inject(ActivatedRoute);

  loader: boolean = true;
  Id!: number;
  Rol!: Role;

  ngOnInit(): void {
    this.Id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));

    this.getRolById();
  }

  FormsValues(Rol: Role) {
    logger.log(Rol);

    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    }).fire({
      title: 'Actualizando el rol',
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
    this.loader = true;

    this._RolsService.updateRol(this.Id, Rol).subscribe((data) => {
      this.loader = false;
      // console.log(data);
      this.Rol = data.Rol;
      Swal.mixin({
        customClass: {
          container: this.#colorModeService.getStoredTheme(
            environment.SabinosTheme
          ),
        },
      })
        .fire({
          text: 'Rol modificado con éxito',
          icon: 'success',
        })
        .then((result) => {
          console.log(result);
        });
    });
  }

  getRolById() {
    this._RolsService.getRolById(this.Id).subscribe((data: Role) => {
      this.loader = false;
      this.Rol = { ...data };
      console.log(data);
    });
  }
}
