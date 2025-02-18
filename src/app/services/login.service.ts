import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { HelpersService } from './helpers.service';
import { LocalStorageService } from '@coreui/angular';
import { Observable } from 'rxjs';
import { Auth, UserAuth } from '../models/Auth';

const URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private _Storage = inject(LocalStorageService);
  private _Helpers = inject(HelpersService);
  private KEY_STORAGE = environment.SabinosStorage;

  private UserDataStorage = signal<any>(null);
  // public methods

  isLogin(): boolean {
    const Auth = this._Storage.getItem(this.KEY_STORAGE) as Auth | null;

    if (Auth && Auth.token) {
      return true;
    }

    return false;
  }

  userData(): Auth {
    const Auth = this._Storage.getItem(this.KEY_STORAGE) as Auth | null;

    if (Auth && Auth.token) {
      return Auth;
    }

    return {} as Auth;
  }

  login(data: { email: string; password: string }): Observable<Auth> {
    return this.http.post<Auth>(`${URL}signin`, data, {
      // headers: this._Helpers.headerJson_Token(),
      responseType: 'json',
    });
  }

  setAuth(Auth: Auth) {
    this._Storage.setItem(this.KEY_STORAGE, Auth);
    this.setUserData(this.userData().user);
    // logger.log(this._Storage.getItem(environment.SabinosStorage));
  }

  deleteAuth() {
    this._Storage.removeItem(this.KEY_STORAGE);
    // logger.log(this._Storage.getItem(environment.SabinosStorage));
  }

  setUserData(nuevoValor: UserAuth) {
    this.UserDataStorage.set(nuevoValor);
  }

  getUserData(): UserAuth {
    if (!this.UserDataStorage()) {
      this.setUserData(this.userData().user);
    }

    return this.UserDataStorage();
  }
}
