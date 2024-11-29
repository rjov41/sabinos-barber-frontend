import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import { Empleado } from 'src/app/models/Empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import logger from 'src/app/shared/utils/logger';

import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { EmpleadoCrudFormComponent } from '../../../shared/components/forms/empleado-crud-form/Empleado-crud-form.component';

@Component({
  selector: 'app-empleado-insertar',
  standalone: true,
  imports: [CardModule, GridModule, EmpleadoCrudFormComponent],
  templateUrl: './empleado-insertar.component.html',
  styleUrl: './empleado-insertar.component.scss',
})
export class EmpleadoInsertarComponent {
  #colorModeService = inject(ColorModeService);
  private _EmpleadosService = inject(EmpleadosService);
  private _Router = inject(Router);

  loader: boolean = true;

  FormsValues(Empleado: Empleado) {
    logger.log(Empleado);

    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    }).fire({
      title: 'Agregando empleado',
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
    this._EmpleadosService.createEmpleado(Empleado).subscribe((response) => {
      this.loader = false;
      console.log(response);
      Swal.mixin({
        customClass: {
          container: this.#colorModeService.getStoredTheme(
            environment.SabinosTheme
          ),
        },
      })
        .fire({
          text: 'Empleado agregado con éxito',
          icon: 'success',
        })
        .then((result) => {
          this._Router.navigateByUrl(`/empleados/editar/${response.data.id}`);
        });
    });
  }
}
