import { Routes } from '@angular/router';

export const routesPages: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'productos',
        loadChildren: () =>
          import('./producto/productos.routes').then((m) => m.routesProducto),
        data: {
          title: 'Productos',
        },
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./cliente/clientes.routes').then((m) => m.routesCliente),
        data: {
          title: 'Clientes',
        },
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'locales',
        loadChildren: () =>
          import('./local/local.routes').then((m) => m.routesLocal),
        data: {
          title: 'Locales',
        },
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'roles',
        loadChildren: () =>
          import('./rol/local.routes').then((m) => m.routesRol),
        data: {
          title: 'Roles',
        },
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./usuario/usuario.routes').then((m) => m.routesUsuario),
        data: {
          title: 'Usuarios',
        },
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'empleados',
        loadChildren: () =>
          import('./empleado/empleado.routes').then((m) => m.routesEmpleado),
        data: {
          title: 'Empleados',
        },
      },
    ],
  },
];
