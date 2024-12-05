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
          import('./producto-list/producto-list.component').then(
            (m) => m.ProductoListComponent
          ),
        data: {
          title: 'Listado',
        },
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: 'editar/:id',
        loadComponent: () =>
          import('./producto-editar/producto-editar.component').then(
            (m) => m.ProductoEditarComponent
          ),
        data: {
          title: 'Editar',
        },
      },
      {
        path: 'insertar',
        loadComponent: () =>
          import('./producto-insertar/producto-insertar.component').then(
            (m) => m.ProductoInsertarComponent
          ),
        data: {
          title: 'Agregar',
        },
      },
    ],
  },
];
