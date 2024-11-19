import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const _LoginService = inject(LoginService);
  const _Router = inject(Router);

  if (_LoginService.isLogin()) {
    return true;
  }
  // return false;
  const url = _Router.createUrlTree(['/login']);
  return url;
};
