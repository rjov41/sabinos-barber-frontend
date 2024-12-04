import { EmpleadoCrudFormComponent } from 'src/app/shared/components/forms/empleado-crud-form/empleado-crud-form.component';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import { Empleado } from 'src/app/models/Empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import logger from 'src/app/shared/utils/logger';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-empleado-editar',
  standalone: true,
  imports: [CardModule, GridModule, EmpleadoCrudFormComponent],
  templateUrl: './empleado-editar.component.html',
  styleUrl: './empleado-editar.component.scss',
})
export class EmpleadoEditarComponent {
  #colorModeService = inject(ColorModeService);
  private _EmpleadosService = inject(EmpleadosService);
  private _ActivatedRoute = inject(ActivatedRoute);

  loader: boolean = true;
  Id!: number;
  Empleado!: Empleado;

  ngOnInit(): void {
    this.Id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));

    this.getEmpleadoById();
  }

  FormsValues(Empleado: Empleado) {
    logger.log(Empleado);

    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    }).fire({
      title: 'Actualizando Empleado',
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

    this._EmpleadosService
      .updateEmpleado(this.Id, Empleado)
      .subscribe((data) => {
        this.loader = false;
        // console.log(data);
        this.Empleado = data.Empleado;
        Swal.mixin({
          customClass: {
            container: this.#colorModeService.getStoredTheme(
              environment.SabinosTheme
            ),
          },
        })
          .fire({
            text: 'Empleado modificado con éxito',
            icon: 'success',
          })
          .then((result) => {
            console.log(result);
          });
      });
  }

  getEmpleadoById() {
    this._EmpleadosService
      .getEmpleadoById(this.Id)
      .subscribe((data: Empleado) => {
        this.loader = false;
        this.Empleado = { ...data };
        console.log(data);
      });
  }
}
