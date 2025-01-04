import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import { Local } from 'src/app/models/Local.model';
import { LocalesService } from 'src/app/services/locales.service';
import logger from 'src/app/shared/utils/logger';

import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { LocalesCrudFormComponent } from '../../../shared/components/forms/locales-crud-form/locales-crud-form.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-local-insertar',
  standalone: true,
  imports: [CardModule, GridModule, LocalesCrudFormComponent],
  templateUrl: './local-insertar.component.html',
  styleUrl: './local-insertar.component.scss',
})
export class LocalInsertarComponent {
  private destruir$: Subject<void> = new Subject<void>();

  #colorModeService = inject(ColorModeService);
  private _LocalesService = inject(LocalesService);
  private _Router = inject(Router);

  loader: boolean = true;

  FormsValues(Local: Local) {
    logger.log(Local);

    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    }).fire({
      title: 'Agregando Local',
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
    this._LocalesService
      .createLocal(Local)
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
            text: 'Local agregado con éxito',
            icon: 'success',
          })
          .then((result) => {
            this._Router.navigateByUrl(`/locales/editar/${data.Local.id}`);
          });
      });
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
