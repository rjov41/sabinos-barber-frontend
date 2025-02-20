import { inject, Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginService } from '../services/login.service';
import logger from '../shared/utils/logger';
import { navItemsProject } from '../layout/default-layout/navs/_nav-project';
import Swal from 'sweetalert2';
import { ColorModeService } from '@coreui/angular';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivateChild {
  private _LoginService = inject(LoginService);
  private _Router = inject(Router);
  private _ColorModeService = inject(ColorModeService);

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // logger.log('childRoute', childRoute);
    // logger.log('state', state);

    const userRole = this._LoginService.getUserData()?.role?.name;
    // const userRole = 'encargado';
    const currentUrl = state.url;
    const navItem = this.findNavItemByUrl(currentUrl);

    // Si la ruta no está en el menú o no tiene restricciones de roles, permitir acceso
    if (!navItem || !navItem.attributes?.roles) {
      return true;
    }

    // Validar si el usuario tiene acceso
    if (navItem.attributes.roles.includes(userRole)) {
      return true;
    }

    // Si no tiene permisos, mostrar alerta y redirigir
    Swal.fire({
      title: 'Acceso Denegado',
      text: 'No tienes permisos para acceder a esta página.',
      icon: 'warning',
      allowEscapeKey: false,
      allowOutsideClick: false,
      focusConfirm: false,
      customClass: {
        container: this._ColorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
      confirmButtonText: 'Ir a login',
    }).then(() => {
      this._Router.navigate(['/login']);
    });

    return false;
  }

  private findNavItemByUrl(url: string): any {
    for (const item of navItemsProject) {
      // Permitir acceso si la URL comienza con la URL del navItem
      if (url.startsWith(String(item.url))) {
        return item;
      }

      // También verificar si alguna de sus subrutas coincide
      if (item.children) {
        const childItem = item.children.find((child) =>
          url.startsWith(String(child.url))
        );
        if (childItem) return childItem;
      }
    }
    return null;
  }
}
