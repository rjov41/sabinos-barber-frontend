import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import Swal from 'sweetalert2';
import { ColorModeService } from '@coreui/angular';
import { environment } from '../../../environments/environment';
import { LoginService } from '../../services/login.service';
import { PedidoService } from '../../services/pedido.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const _colorModeService = inject(ColorModeService);
  const _LoginService = inject(LoginService);
  const _PedidoService = inject(PedidoService);

  return next(req).pipe(
    tap({
      error: (error) => {
        if (
          (error.status == 401 && error.error.message === 'Unauthorized') ||
          (error.status == 401 && error.error.message === 'Unauthenticated.')
        ) {
          console.warn('Error 401 detectado en:', req.url);
          Swal.mixin({
            customClass: {
              container: _colorModeService.getStoredTheme(
                environment.SabinosTheme
              ),
            },
          })
            .fire({
              title: 'Sesión expirada',
              text: 'Debe volver a iniciar sesión',
              icon: 'warning',
              // allowEnterKey: false,
              focusConfirm: false,
            })
            .then((result) => {
              _LoginService.deleteAuth();
              _PedidoService.limpiarListado();
              router.navigate(['/login']);
            });

          // router.navigate(['/login']);
        }
      },
    })
  );
};
