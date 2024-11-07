import { INavData } from '@coreui/angular';

export const navItemsProject: INavData[] = [
  {
    name: 'Productos',
    url: '/productos',
    iconComponent: { name: 'cil-cut' },
  },
  {
    title: true,
    name: 'Theme',
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' },
  },
];
