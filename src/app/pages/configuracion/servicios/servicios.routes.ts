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
          import('./servicio-listado/servicio-listado.component').then(
            (m) => m.ServicioListadoComponent
          ),
        data: {
          title: 'Listado',
        },
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: 'editar/:id',
        loadComponent: () =>
          import('./servicio-editar/servicio-editar.component').then(
            (m) => m.ServicioEditarComponent
          ),
        data: {
          title: 'Editar',
        },
      },
      {
        path: 'insertar',
        loadComponent: () =>
          import('./servicio-insertar/servicio-insertar.component').then(
            (m) => m.ServicioInsertarComponent
          ),
        data: {
          title: 'Agregar',
        },
      },
    ],
  },
];
