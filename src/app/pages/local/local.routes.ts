import { Routes } from '@angular/router';

export const routesLocal: Routes = [
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
          import('./local-listado/local-listado.component').then(
            (m) => m.LocalListadoComponent
          ),
        data: {
          title: 'Listado',
        },
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: 'editar/:id',
        loadComponent: () =>
          import('./local-editar/local-editar.component').then(
            (m) => m.LocalEditarComponent
          ),
        data: {
          title: 'Editar',
        },
      },
      {
        path: 'insertar',
        loadComponent: () =>
          import('./local-insertar/local-insertar.component').then(
            (m) => m.LocalInsertarComponent
          ),
        data: {
          title: 'Agregar',
        },
      },
    ],
  },
];
