import { Routes } from '@angular/router';

export const routesDocumentacion: Routes = [
  {
    path: 'documentacion',
    data: {
      title: 'documentacion',
    },
    children: [
      {
        path: '404',
        loadComponent: () =>
          import('./documentacion/pages/page404/page404.component').then(
            (m) => m.Page404Component
          ),
        data: {
          title: 'Page 404',
        },
      },
      {
        path: '500',
        loadComponent: () =>
          import('./documentacion/pages/page500/page500.component').then(
            (m) => m.Page500Component
          ),
        data: {
          title: 'Page 500',
        },
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./documentacion/pages/login/login.component').then(
            (m) => m.LoginComponent
          ),
        data: {
          title: 'Login Page',
        },
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./documentacion/dashboard/routes').then((m) => m.routes),
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./documentacion/theme/routes').then((m) => m.routes),
      },
      {
        path: 'base',
        loadChildren: () => import('./documentacion/base/routes').then((m) => m.routes),
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./documentacion/buttons/routes').then((m) => m.routes),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./documentacion/forms/routes').then((m) => m.routes),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./documentacion/icons/routes').then((m) => m.routes),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./documentacion/notifications/routes').then((m) => m.routes),
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./documentacion/widgets/routes').then((m) => m.routes),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./documentacion/charts/routes').then((m) => m.routes),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./documentacion/pages/routes').then((m) => m.routes),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./documentacion/pages/register/register.component').then(
            (m) => m.RegisterComponent
          ),
        data: {
          title: 'Register Page',
        },
      },
    ],
  },
];
