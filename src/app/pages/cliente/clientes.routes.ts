import { Routes } from '@angular/router';

export const routesCliente: Routes = [
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
          import('./cliente-listado/cliente-listado.component').then(
            (m) => m.ClienteListadoComponent
          ),
        data: {
          title: 'Listado',
        },
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: 'editar/:id',
        loadComponent: () =>
          import('./cliente-editar/cliente-editar.component').then(
            (m) => m.ClienteEditarComponent
          ),
        data: {
          title: 'Editar',
        },
      },
      {
        path: 'insertar',
        loadComponent: () =>
          import('./cliente-insertar/cliente-insertar.component').then(
            (m) => m.ClienteInsertarComponent
          ),
        data: {
          title: 'Agregar',
        },
      },
    ],
  },
];
