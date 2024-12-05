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
          import('./usuario-listado/usuario-listado.component').then(
            (m) => m.UsuarioListadoComponent
          ),
        data: {
          title: 'Listado',
        },
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: 'editar/:id',
        loadComponent: () =>
          import('./usuario-editar/usuario-editar.component').then(
            (m) => m.UsuarioEditarComponent
          ),
        data: {
          title: 'Editar',
        },
      },
      {
        path: 'insertar',
        loadComponent: () =>
          import('./usuario-insertar/usuario-insertar.component').then(
            (m) => m.UsuarioInsertarComponent
          ),
        data: {
          title: 'Agregar',
        },
      },
    ],
  },
];
