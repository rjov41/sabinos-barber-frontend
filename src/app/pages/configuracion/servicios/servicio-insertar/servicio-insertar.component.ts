import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import logger from 'src/app/shared/utils/logger';

import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Subject, takeUntil } from 'rxjs';
import { HelpersService } from '../../../../services/helpers.service';
import { ServicioService } from '../../../../services/servicios.service';
import { Servicios } from '../../../../models/Servicios.model';
import { ServicioCrudFormComponent } from '../../../../shared/components/forms/servicio-crud-form/servicio-crud-form.component';

@Component({
  selector: 'app-servicio-insertar',
  standalone: true,
  imports: [CardModule, GridModule, ServicioCrudFormComponent],
  templateUrl: './servicio-insertar.component.html',
  styleUrl: './servicio-insertar.component.scss',
})
export class ServicioInsertarComponent {
  private destruir$: Subject<void> = new Subject<void>();

  #colorModeService = inject(ColorModeService);
  private _HelpersService = inject(HelpersService);
  private _ServicioService = inject(ServicioService);
  private _Router = inject(Router);

  loader: boolean = true;

  FormsValues(Servicio: Servicios) {
    logger.log(Servicio);

    this._HelpersService.loaderSweetAlert({
      title: 'Agregando servicio',
      text: 'Esto puede demorar un momento.',
    });
    this._ServicioService
      .createServicioProducto(Servicio)
      .pipe(takeUntil(this.destruir$))
      .subscribe((data) => {
        this.loader = false;
        logger.log(data);
        Swal.mixin({
          customClass: {
            container: this.#colorModeService.getStoredTheme(
              environment.SabinosTheme
            ),
          },
        })
          .fire({
            text: 'Servicio agregado con éxito',
            icon: 'success',
          })
          .then((result) => {
            this._Router.navigateByUrl(`/ajustes/servicios`);
          });
      });
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
