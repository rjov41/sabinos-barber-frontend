import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Cambia 'es' al idioma que necesites
dayjs.locale('es'); // Configura el idioma global

const START_DATE = dayjs().startOf('month');
const END_DATE = dayjs().endOf('month');

export const IniciarFiltro = {
  id: '',
  marca: '',
  descripcion: '',
  fecha: {
    startDate: START_DATE,
    endDate: END_DATE,
  },
  estado: 1,
  local_id: 0,
};
