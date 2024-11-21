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
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    GridModule,
    RouterLink,
    ContainerComponent,
    LoginFormComponent,
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
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    FormModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
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
      .subscribe((data) => {
        this.loadingFormLogin = false;
        let Auth: Auth = { ...data };

        this._LoginService.setAuth(Auth);

        // this._RememberFiltersService.deleteAllFilterStorage();

        // this._CommunicationService.removeTheme() // Elimino localstore
        // this._CommunicationService.setTheme("white") // agrego localstore
        // // this.loadInfo = false;
        this._Router.navigateByUrl('/');
      });
  }
}
