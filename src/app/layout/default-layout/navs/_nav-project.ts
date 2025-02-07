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
    name: 'Nominas',
    url: '/nominas',
    iconComponent: { name: 'faPersonCircleCheck' },
  },
  {
    name: 'Gastos',
    url: '/gastos',
    iconComponent: { name: 'faHandHoldingDollar' },
  },
  {
    name: 'Ajustes',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: 'Método de pago',
        url: '/ajustes/metodo-pago',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Tipo de gasto',
        url: '/ajustes/tipos-gasto',
        icon: 'nav-icon-bullet',
      },
    ],
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
