import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: '-------------------------------',
  },
  {
    title: true,
    name: '---- Documentacion -----',
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    title: true,
    name: 'Theme',
  },
  {
    name: 'Colors',
    url: '/documentacion/theme/colors',
    iconComponent: { name: 'cil-drop' },
  },
  {
    name: 'Typography',
    url: '/documentacion/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' },
  },
  {
    name: 'Components',
    title: true,
  },
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/documentacion/base/accordion',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Breadcrumbs',
        url: '/documentacion/base/breadcrumbs',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Cards',
        url: '/documentacion/base/cards',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Carousel',
        url: '/documentacion/base/carousel',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Collapse',
        url: '/documentacion/base/collapse',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'List Group',
        url: '/documentacion/base/list-group',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Navs & Tabs',
        url: '/documentacion/base/navs',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Pagination',
        url: '/documentacion/base/pagination',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Placeholder',
        url: '/documentacion/base/placeholder',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Popovers',
        url: '/documentacion/base/popovers',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Progress',
        url: '/documentacion/base/progress',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Spinners',
        url: '/documentacion/base/spinners',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Tables',
        url: '/documentacion/base/tables',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Tabs',
        url: '/documentacion/base/tabs',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Tooltips',
        url: '/documentacion/base/tooltips',
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/documentacion/buttons/buttons',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Button groups',
        url: '/documentacion/buttons/button-groups',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Dropdowns',
        url: '/documentacion/buttons/dropdowns',
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/documentacion/forms/form-control',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Select',
        url: '/documentacion/forms/select',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Checks & Radios',
        url: '/documentacion/forms/checks-radios',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Range',
        url: '/documentacion/forms/range',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Input Group',
        url: '/documentacion/forms/input-group',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Floating Labels',
        url: '/documentacion/forms/floating-labels',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Layout',
        url: '/documentacion/forms/layout',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Validation',
        url: '/documentacion/forms/validation',
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    name: 'Charts',
    iconComponent: { name: 'cil-chart-pie' },
    url: '/documentacion/charts',
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/documentacion/icons/coreui-icons',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'success',
          text: 'FREE',
        },
      },
      {
        name: 'CoreUI Flags',
        url: '/documentacion/icons/flags',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'CoreUI Brands',
        url: '/documentacion/icons/brands',
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/documentacion/notifications/alerts',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Badges',
        url: '/documentacion/notifications/badges',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Modal',
        url: '/documentacion/notifications/modal',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Toast',
        url: '/documentacion/notifications/toasts',
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    name: 'Widgets',
    url: '/documentacion/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/documentacion/login',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Register',
        url: '/documentacion/register',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Error 404',
        url: '/documentacion/404',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Error 500',
        url: '/documentacion/500',
        icon: 'nav-icon-bullet',
      },
    ],
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto',
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' },
  },
];
