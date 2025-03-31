import {
  FormModule,
  GridModule,
  CardModule,
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  TextColorDirective,
  CardComponent,
  CardBodyComponent,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective,
  ColorModeService,
  LocalStorageService,
} from '@coreui/angular';

import { Component, inject } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { Router, RouterLink } from '@angular/router';
import { LoginFormComponent } from '../../shared/components/forms/login-form/login-form.component';
import logger from 'src/app/shared/utils/logger';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Auth } from '../../models/Auth';
import { catchError, delay, Subject, takeUntil, tap, throwError } from 'rxjs';
import { HelpersService } from '../../services/helpers.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    GridModule,
    ContainerComponent,
    LoginFormComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private destruir$: Subject<void> = new Subject<void>();

  private _HelpersService = inject(HelpersService);
  private _LoginService = inject(LoginService);
  private _Router = inject(Router);
  #colorModeService = inject(ColorModeService);
  loadingFormLogin: boolean = false;

  login(loginValues: { email: string; password: string }) {
    this.loadingFormLogin = true;
    logger.log(loginValues);

    this._LoginService
      .login({ ...loginValues })
      // .pipe(
      //   tap(() => {
      //     this.loadingFormLogin = false;
      //   }),
      //   delay(30000)
      // )
      .pipe(
        takeUntil(this.destruir$),
        catchError((error: any) => {
          this.loadingFormLogin = false;
          this._HelpersService.handleErrorApiCrud(
            error,
            'No se pudo iniciar sesión.'
          );

          Swal.mixin({
            customClass: {
              container: this.#colorModeService.getStoredTheme(
                environment.SabinosTheme
              ),
            },
          }).fire({
            icon: 'error',
            title: '!Error¡',
            text: 'Usuario o contraseña incorrecto',
          });
          return throwError(() => error);
        })
      )

      .subscribe((data) => {
        let Auth: Auth = { ...data };

        this._LoginService.setAuth(Auth);
        // this.loadingFormLogin = false;

        // this._RememberFiltersService.deleteAllFilterStorage();

        // this._CommunicationService.removeTheme() // Elimino localstore
        // this._CommunicationService.setTheme("white") // agrego localstore
        // // this.loadInfo = false;
        this._Router.navigateByUrl('/');
      });
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
