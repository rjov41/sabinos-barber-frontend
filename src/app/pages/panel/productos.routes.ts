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
          import('./panel-list/panel-list.component').then(
            (m) => m.PanelListComponent
          ),
        data: {
          title: 'Inicio',
        },
      },
    ],
  },
];
