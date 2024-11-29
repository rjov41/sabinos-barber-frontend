import { Routes } from '@angular/router';

export const routesRol: Routes = [
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
          import('./rol-listado/rol-listado.component').then(
            (m) => m.RolListadoComponent
          ),
        data: {
          title: 'Listado',
        },
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: 'editar/:id',
        loadComponent: () =>
          import('./rol-editar/rol-editar.component').then(
            (m) => m.RolEditarComponent
          ),
        data: {
          title: 'Editar',
        },
      },
      {
        path: 'insertar',
        loadComponent: () =>
          import('./rol-insertar/rol-insertar.component').then(
            (m) => m.RolInsertarComponent
          ),
        data: {
          title: 'Agregar',
        },
      },
    ],
  },
];
