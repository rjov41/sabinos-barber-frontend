import { INavData } from '@coreui/angular';

export const navItemsProject: INavData[] = [
  {
    name: 'Productos',
    url: '/productos',
    iconComponent: { name: 'cil-cut' },
  },
  {
    name: 'Clientes',
    url: '/clientes',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Locales',
    url: '/locales',
    iconComponent: { name: 'cil-factory' },
  },
  // {
  //   name: 'Roles',
  //   url: '/roles',
  //   iconComponent: { name: 'cil-lan' },
  // },
  {
    name: 'Usuarios',
    url: '/usuarios',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Empleados',
    url: '/empleados',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Facturas',
    url: '/facturas',
    iconComponent: { name: 'faFileInvoiceDollar' },
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
