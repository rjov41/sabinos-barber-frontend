import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

const formatTemplate = (data: any) =>
  `<path fill='var(--ci-primary-color, currentColor)' d='${data}' class='ci-primary'/></svg> `;

export const CUSTOM_ICONS = {
  faFileInvoiceDollar: [
    `${faFileInvoiceDollar.icon[0]} ${faFileInvoiceDollar.icon[1]}`,
    formatTemplate(faFileInvoiceDollar.icon[4]),
  ],
};
