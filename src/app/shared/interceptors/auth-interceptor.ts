import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { AppHeaders } from '../../models/DefaultHeaders';

const defaultHeaders: AppHeaders = {
  'Content-Type': 'application/json',
  // 'Access-Control-Allow-Origin': '*',
};

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clonar la solicitud para agregar encabezados o modificar la configuración.
  const headers: AppHeaders = headersConstructor(req.headers);

  const authReq = req.clone({
    setHeaders: {
      ...headers,
    },
  });

  // Pasar la solicitud modificada al siguiente paso en la cadena de interceptores.
  return next(authReq);
};

const headersConstructor = (reqHeaders: HttpHeaders): AppHeaders => {
  const keys = reqHeaders.keys();

  // Crear una copia inicial de los encabezados predeterminados
  const headers = { ...defaultHeaders };

  // Sobrescribir los valores del encabezado predeterminado con los valores de la solicitud
  keys.forEach((key) => {
    const headerValue = reqHeaders.get(key);
    if (headerValue !== null) {
      headers[key] = headerValue; // Priorizar el valor del encabezado existente
    }
  });

  return headers;
};
