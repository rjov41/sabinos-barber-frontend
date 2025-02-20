import { INavData } from '@coreui/angular';

export const navItemsProject: INavData[] = [
  {
    name: 'Inicio',
    url: '/',
    iconComponent: { name: 'cil-home' },
    attributes: {
      roles: ['administrador'],
      seccion: 'Inicio',
    },
  },
  {
    name: 'Productos',
    url: '/productos',
    iconComponent: { name: 'cil-cut' },
    attributes: {
      roles: ['administrador'],
    },
  },
  {
    name: 'Clientes',
    url: '/clientes',
    iconComponent: { name: 'cil-user' },
    attributes: {
      roles: ['administrador'],
    },
  },
  {
    name: 'Locales',
    url: '/locales',
    iconComponent: { name: 'cil-factory' },
    attributes: {
      roles: ['administrador'],
    },
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
    attributes: {
      roles: ['administrador'],
    },
  },
  {
    name: 'Empleados',
    url: '/empleados',
    iconComponent: { name: 'cil-user' },
    attributes: {
      roles: ['administrador'],
    },
  },
  {
    name: 'Facturas',
    url: '/facturas',
    iconComponent: { name: 'faFileInvoiceDollar' },
    attributes: {
      roles: ['administrador'],
    },
  },
  {
    name: 'Nominas',
    url: '/nominas',
    iconComponent: { name: 'faPersonCircleCheck' },
    attributes: {
      roles: ['administrador'],
    },
  },
  {
    name: 'Gastos',
    url: '/gastos',
    iconComponent: { name: 'faHandHoldingDollar' },
    attributes: {
      roles: ['administrador'],
    },
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
    attributes: {
      roles: ['administrador'],
    },
  },
];
