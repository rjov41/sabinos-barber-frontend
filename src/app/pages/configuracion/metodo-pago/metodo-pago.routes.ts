import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '',
        loadComponent: () =>
          import('./metodo-pago-listado/metodo-pago-listado.component').then(
            (m) => m.MetodoPagoListadoComponent
          ),
        data: {
          title: 'Listado',
        },
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: 'editar/:id',
        loadComponent: () =>
          import('./metodo-pago-editar/metodo-pago-editar.component').then(
            (m) => m.MetodoPagoEditarComponent
          ),
        data: {
          title: 'Editar',
        },
      },
      {
        path: 'insertar',
        loadComponent: () =>
          import('./metodo-pago-insertar/metodo-pago-insertar.component').then(
            (m) => m.MetodoPagoInsertarComponent
          ),
        data: {
          title: 'Agregar',
        },
      },
    ],
  },
];
