import { Routes } from '@angular/router';

export const routesEmpleado: Routes = [
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
          import('./empleado-listado/empleado-listado.component').then(
            (m) => m.EmpleadoListadoComponent
          ),
        data: {
          title: 'Listado',
        },
      },
      {
        // Ruta de edición con el parámetro dinámico :id
        path: 'editar/:id',
        loadComponent: () =>
          import('./empleado-editar/empleado-editar.component').then(
            (m) => m.EmpleadoEditarComponent
          ),
        data: {
          title: 'Editar',
        },
      },
      {
        path: 'insertar',
        loadComponent: () =>
          import('./empleado-insertar/empleado-insertar.component').then(
            (m) => m.EmpleadoInsertarComponent
          ),
        data: {
          title: 'Agregar',
        },
      },
    ],
  },
];
