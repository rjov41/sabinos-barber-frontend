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
          import('./nomina-listado/nomina-listado.component').then(
            (m) => m.NominaListadoComponent
          ),
        data: {
          title: 'Listado',
        },
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: 'editar/:id',
        loadComponent: () =>
          import('./nomina-editar/nomina-editar.component').then(
            (m) => m.NominaEditarComponent
          ),
        data: {
          title: 'Editar',
        },
      },
      {
        path: 'insertar',
        loadComponent: () =>
          import('./nomina-insertar/nomina-insertar.component').then(
            (m) => m.NominaInsertarComponent
          ),
        data: {
          title: 'Agregar',
        },
      },
    ],
  },
];
