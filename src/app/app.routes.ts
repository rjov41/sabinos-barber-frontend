import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { loginGuard } from './guards/login.guard';
import { RoleGuard } from './guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [loginGuard],
    canActivateChild: [RoleGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.routesPages),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./pages/error404/error404.component').then(
        (c) => c.Error404Component
      ),
  },
  { path: '**', redirectTo: '404' },
];
