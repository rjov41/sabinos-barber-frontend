import { RolCrudFormComponent } from 'src/app/shared/components/forms/rol-crud-form/rol-crud-form.component';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import { Role } from 'src/app/models/Role.model';
import { RolesService } from 'src/app/services/role.service';
import logger from 'src/app/shared/utils/logger';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Subject, takeUntil } from 'rxjs';
import { HelpersService } from '../../../services/helpers.service';

@Component({
  selector: 'app-rol-editar',
  standalone: true,
  imports: [CardModule, GridModule, RolCrudFormComponent],
  templateUrl: './rol-editar.component.html',
  styleUrl: './rol-editar.component.scss',
})
export class RolEditarComponent {
  private destruir$: Subject<void> = new Subject<void>();

  #colorModeService = inject(ColorModeService);
  private _RolsService = inject(RolesService);
  private _ActivatedRoute = inject(ActivatedRoute);
  private _HelpersService = inject(HelpersService);

  loader: boolean = true;
  Id!: number;
  Rol!: Role;

  ngOnInit(): void {
    this.Id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));

    this.getRolById();
  }

  FormsValues(Rol: Role) {
    logger.log(Rol);
    this._HelpersService.loaderSweetAlert({
      title: 'Actualizando el rol',
      text: 'Esto puede demorar un momento.',
    });

    // this.loader = true;

    this._RolsService
      .updateRol(this.Id, Rol)
      .pipe(takeUntil(this.destruir$))
      .subscribe((data) => {
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
    this._RolsService
      .getRolById(this.Id)
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Role) => {
        this.loader = false;
        this.Rol = { ...data };
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
