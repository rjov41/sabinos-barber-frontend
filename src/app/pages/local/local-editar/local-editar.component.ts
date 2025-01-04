import { LocalesCrudFormComponent } from 'src/app/shared/components/forms/locales-crud-form/locales-crud-form.component';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule, ColorModeService, GridModule } from '@coreui/angular';
import { Local } from 'src/app/models/Local.model';
import { LocalesService } from 'src/app/services/locales.service';
import logger from 'src/app/shared/utils/logger';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-local-editar',
  standalone: true,
  imports: [CardModule, GridModule, LocalesCrudFormComponent],
  templateUrl: './local-editar.component.html',
  styleUrl: './local-editar.component.scss',
})
export class LocalEditarComponent {
  private destruir$: Subject<void> = new Subject<void>();

  #colorModeService = inject(ColorModeService);
  private _LocalsService = inject(LocalesService);
  private _ActivatedRoute = inject(ActivatedRoute);

  loader: boolean = true;
  Id!: number;
  Local!: Local;

  ngOnInit(): void {
    this.Id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));

    this.getLocalById();
  }

  FormsValues(Local: Local) {
    logger.log(Local);

    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    }).fire({
      title: 'Actualizando Local',
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

    this._LocalsService
      .updateLocal(this.Id, Local)
      .pipe(takeUntil(this.destruir$))
      .subscribe((data) => {
        this.loader = false;
        // console.log(data);
        this.Local = data.Local;
        Swal.mixin({
          customClass: {
            container: this.#colorModeService.getStoredTheme(
              environment.SabinosTheme
            ),
          },
        })
          .fire({
            text: 'Local modificado con éxito',
            icon: 'success',
          })
          .then((result) => {
            console.log(result);
          });
      });
  }

  getLocalById() {
    this._LocalsService
      .getLocalById(this.Id)
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Local) => {
        this.loader = false;
        this.Local = { ...data };
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
