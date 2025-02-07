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
          import('./tipo-gasto-listado/tipo-gasto-listado.component').then(
            (m) => m.TipoGastoListadoComponent
          ),
        data: {
          title: 'Listado',
        },
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: 'editar/:id',
        loadComponent: () =>
          import('./tipo-gasto-editar/tipo-gasto-editar.component').then(
            (m) => m.TipoGastoEditarComponent
          ),
        data: {
          title: 'Editar',
        },
      },
      {
        path: 'insertar',
        loadComponent: () =>
          import('./tipo-gasto-insertar/tipo-gasto-insertar.component').then(
            (m) => m.TipoGastoInsertarComponent
          ),
        data: {
          title: 'Agregar',
        },
      },
    ],
  },
];
