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
          import('./gasto-listado/gasto-listado.component').then(
            (m) => m.GastoListadoComponent
          ),
        data: {
          title: 'Listado',
        },
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: 'editar/:id',
        loadComponent: () =>
          import('./gasto-editar/gasto-editar.component').then(
            (m) => m.GastoEditarComponent
          ),
        data: {
          title: 'Editar',
        },
      },
      {
        path: 'insertar',
        loadComponent: () =>
          import('./gasto-insertar/gasto-insertar.component').then(
            (m) => m.GastoInsertarComponent
          ),
        data: {
          title: 'Agregar',
        },
      },
    ],
  },
];
