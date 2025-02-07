import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import logger from 'src/app/shared/utils/logger';

import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
// import { EmpleadoCrudFormComponent } from '../../../shared/components/forms/empleado-crud-form/empleado-crud-form.component';
import { Subject, takeUntil } from 'rxjs';
import { HelpersService } from '../../../../services/helpers.service';
import { MetodoPago } from '../../../../models/MetodoPago.model';
import { MetodoPagoService } from '../../../../services/metodos_pago.service';
import { TipoGastoCrudFormComponent } from '../../../../shared/components/forms/tipo-gasto-crud-form/tipo-gasto-crud-form.component';
import { TipoGastoService } from '../../../../services/tipo_gasto.service';
import { TipoGasto } from '../../../../models/TipoGasto.model';

@Component({
  selector: 'app-tipo-gasto-insertar',
  standalone: true,
  imports: [CardModule, GridModule, TipoGastoCrudFormComponent],
  templateUrl: './tipo-gasto-insertar.component.html',
  styleUrl: './tipo-gasto-insertar.component.scss',
})
export class TipoGastoInsertarComponent {
  private destruir$: Subject<void> = new Subject<void>();

  #colorModeService = inject(ColorModeService);
  private _TipoGastoService = inject(TipoGastoService);
  private _Router = inject(Router);
  private _HelpersService = inject(HelpersService);

  loader: boolean = true;

  FormsValues(tipoGasto: TipoGasto) {
    logger.log(tipoGasto);
    this._HelpersService.loaderSweetAlert({
      title: 'Agregando tipo de gasto',
      text: 'Esto puede demorar un momento.',
    });

    this._TipoGastoService
      .createTipoGasto(tipoGasto)
      .pipe(takeUntil(this.destruir$))
      .subscribe((response) => {
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
            text: 'Tipo de gasto agregado con éxito',
            icon: 'success',
          })
          .then((result) => {
            this._Router.navigateByUrl(
              `/ajustes/tipos-gasto/editar/${response.id}`
            );
          });
      });
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
