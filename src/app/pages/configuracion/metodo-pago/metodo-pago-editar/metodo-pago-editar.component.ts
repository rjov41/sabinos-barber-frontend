import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CardModule,
  ColorModeService,
  GridModule,
  SpinnerComponent,
} from '@coreui/angular';
import logger from 'src/app/shared/utils/logger';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Subject, takeUntil } from 'rxjs';
import { HelpersService } from '../../../../services/helpers.service';
import { Nomina } from '../../../../models/Nomina.model';
import { NominaService } from '../../../../services/nomina.service';
import { NominaCrudFormComponent } from '../../../../shared/components/forms/nomina-crud-form/nomina-crud-form.component';
import { MetodoPagoCrudFormComponent } from '../../../../shared/components/forms/metodo-pago-crud-form/metodo-pago-crud-form.component';
import { MetodoPagoService } from '../../../../services/metodos_pago.service';
import { MetodoPago } from '../../../../models/MetodoPago.model';

@Component({
  selector: 'app-metodo-pago-editar',
  standalone: true,
  imports: [
    CardModule,
    GridModule,
    SpinnerComponent,
    MetodoPagoCrudFormComponent,
  ],
  templateUrl: './metodo-pago-editar.component.html',
  styleUrl: './metodo-pago-editar.component.scss',
})
export class MetodoPagoEditarComponent {
  private destruir$: Subject<void> = new Subject<void>();

  #colorModeService = inject(ColorModeService);
  private _MetodoPagoService = inject(MetodoPagoService);
  private _ActivatedRoute = inject(ActivatedRoute);
  private _HelpersService = inject(HelpersService);

  loader: boolean = true;
  Id!: number;
  MetodoPago!: MetodoPago;

  ngOnInit(): void {
    this.Id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));

    this.getEmpleadoById();
  }

  FormsValues(MetodoPago: MetodoPago) {
    logger.log(MetodoPago);
    this._HelpersService.loaderSweetAlert({
      title: 'Actualizando nomina',
      text: 'Esto puede demorar un momento.',
    });

    // this.loader = true;

    this._MetodoPagoService
      .updateMetodoPago(this.Id, MetodoPago)
      .pipe(takeUntil(this.destruir$))
      .subscribe((data) => {
        this.loader = false;
        // console.log(data);
        this.MetodoPago = data.Empleado;
        Swal.mixin({
          customClass: {
            container: this.#colorModeService.getStoredTheme(
              environment.SabinosTheme
            ),
          },
        })
          .fire({
            text: 'Método de pago modificado con éxito',
            icon: 'success',
          })
          .then((result) => {
            logger.log(result);
          });
      });
  }

  getEmpleadoById() {
    this._MetodoPagoService
      .getMetodoPagoById(this.Id)
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: MetodoPago) => {
        this.loader = false;
        this.MetodoPago = { ...data };
        logger.log(data);
      });
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
