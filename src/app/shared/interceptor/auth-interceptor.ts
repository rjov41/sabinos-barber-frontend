import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clonar la solicitud para agregar encabezados o modificar la configuración.
  const authReq = req.clone({
    setHeaders: {
      Authorization: `bearer 5|ufVCfCDIiqn1vKWJM8mKUx77a1zauTK1KcdzNdRV`,
      // Authorization: `Bearer tu_token_de_autenticacion`, // Puedes agregar tu lógica para obtener el token
    },
  });

  // Pasar la solicitud modificada al siguiente paso en la cadena de interceptores.
  return next(authReq);
};
