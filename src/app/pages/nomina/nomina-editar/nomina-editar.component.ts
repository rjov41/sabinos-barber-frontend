import { EmpleadoCrudFormComponent } from 'src/app/shared/components/forms/empleado-crud-form/empleado-crud-form.component';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import { Empleado } from 'src/app/models/Empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import logger from 'src/app/shared/utils/logger';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Subject, takeUntil } from 'rxjs';
import { HelpersService } from '../../../services/helpers.service';
import { Nomina } from '../../../models/Nomina.model';
import { NominaService } from '../../../services/nomina.service';
import { NominaCrudFormComponent } from '../../../shared/components/forms/nomina-crud-form/nomina-crud-form.component';

@Component({
  selector: 'app-nomina-editar',
  standalone: true,
  imports: [CardModule, GridModule, NominaCrudFormComponent],
  templateUrl: './nomina-editar.component.html',
  styleUrl: './nomina-editar.component.scss',
})
export class NominaEditarComponent {
  private destruir$: Subject<void> = new Subject<void>();

  #colorModeService = inject(ColorModeService);
  private _NominaService = inject(NominaService);
  private _ActivatedRoute = inject(ActivatedRoute);
  private _HelpersService = inject(HelpersService);

  loader: boolean = true;
  Id!: number;
  Nomina!: Nomina;

  ngOnInit(): void {
    this.Id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));

    this.getEmpleadoById();
  }

  FormsValues(Nomina: Nomina) {
    logger.log(Nomina);
    this._HelpersService.loaderSweetAlert({
      title: 'Actualizando nomina',
      text: 'Esto puede demorar un momento.',
    });

    // this.loader = true;

    this._NominaService
      .updateNomina(this.Id, Nomina)
      .pipe(takeUntil(this.destruir$))
      .subscribe((data) => {
        this.loader = false;
        // console.log(data);
        this.Nomina = data.Empleado;
        Swal.mixin({
          customClass: {
            container: this.#colorModeService.getStoredTheme(
              environment.SabinosTheme
            ),
          },
        })
          .fire({
            text: 'Nomina modificada con éxito',
            icon: 'success',
          })
          .then((result) => {
            console.log(result);
          });
      });
  }

  getEmpleadoById() {
    this._NominaService
      .getNominaById(this.Id)
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Nomina) => {
        this.loader = false;
        this.Nomina = { ...data };
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
