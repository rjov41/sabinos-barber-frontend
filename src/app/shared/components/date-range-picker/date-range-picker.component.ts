import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import dayjs, { Dayjs, locale } from 'dayjs';
import 'dayjs/locale/es'; // Cambia 'es' al idioma que necesites
import {
  NgxDaterangepickerBootstrapComponent,
  NgxDaterangepickerBootstrapDirective,
} from 'ngx-daterangepicker-bootstrap';
import logger from 'src/app/shared/utils/logger';

dayjs.locale('es'); // Configura el idioma global

@Component({
  selector: 'app-date-range-picker',
  standalone: true,
  imports: [NgxDaterangepickerBootstrapDirective, FormsModule, CommonModule],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss',
})
export class DateRangePickerComponent {
  // @Input() SelectType!: string
  @Input() selectedRangeCalendar!: any;
  @Input() floatingInput: boolean = false;
  @Output() handleDate = new EventEmitter<any>();

  dropsDown = 'down';
  dropsUp = 'up';
  opensRight = 'right';
  opensCenter = 'center';
  opensLeft = 'left';
  selectedRangeCalendarTimeRight: any;

  // selectedRangeCalendarAutoLeft: any;
  selectedSingleCalendarTimeRight: any;
  selectedSingleCalendarCenter: any;
  selectedSingleCalendarAutoLeft: any;
  selectedSimpleCalendarTimeUpRight: any;
  selectedSimpleCalendarUpCenter: any;
  selectedSimpleCalendarAutoUpLeft: any;
  // selectedRangeCalendarTimeInline: any;
  maxDate?: Dayjs;
  minDate?: Dayjs;
  invalidDates: Dayjs[] = [];

  locale = {
    firstDay: 1,
    // startDate: this.startDate,
    // endDate: this.endDate,
    format: 'DD-MM-YYYY',
    applyLabel: 'Aplicar',
    cancelLabel: 'Cancelar',
    fromLabel: 'Desde',
    toLabel: 'Hasta',
    daysOfWeek: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
  };
  // tooltips = [
  //   { date: dayjs(), text: 'Today is just unselectable' },
  //   { date: dayjs().add(2, 'days'), text: 'Yeeeees!!!' },
  // ];

  constructor() {
    // this.selectedRangeCalendarTimeRight = {
    //   startDate: dayjs().startOf('day'),
    //   endDate: dayjs().endOf('day'),
    // };
    // this.selectedRangeCalendar = {
    //   startDate: dayjs().startOf('day'),
    //   endDate: dayjs().endOf('day'),
    // };
    // this.selectedRangeCalendarAutoLeft = {
    //   startDate: dayjs().startOf('day'),
    //   endDate: dayjs().endOf('day'),
    // };
    // this.selectedSingleCalendarTimeRight = dayjs().startOf('day');
    // this.selectedSingleCalendarCenter = dayjs().startOf('day');
    // this.selectedSingleCalendarAutoLeft = dayjs().startOf('day');
    // this.selectedSimpleCalendarTimeUpRight = {
    //   startDate: dayjs().startOf('day'),
    //   endDate: dayjs().endOf('day'),
    // };
    // this.selectedSimpleCalendarUpCenter = {
    //   startDate: dayjs().startOf('day'),
    //   endDate: dayjs().endOf('day'),
    // };
    // this.selectedSimpleCalendarAutoUpLeft = {
    //   startDate: dayjs().startOf('day'),
    //   endDate: dayjs().endOf('day'),
    // };
    // this.selectedRangeCalendarTimeInline = {
    //   startDate: dayjs().startOf('day'),
    //   endDate: dayjs().endOf('day'),
    // };
  }

  isInvalidDate = (m: Dayjs) => {
    return this.invalidDates.some((d) => d.isSame(m, 'day'));
  };

  isCustomDate = (date: Dayjs) => {
    return date.month() === 0 || date.month() === 6 ? 'mycustomdate' : false;
  };

  // isTooltipDate = (m: Dayjs) => {
  //   const tooltip = this.tooltips.find((tt) => tt.date.isSame(m, 'day'));
  //   return tooltip ? tooltip.text : false;
  // };

  datesUpdatedRange(event: any) {
    if (event.startDate && event.endDate) this.handleDate.emit(event);
    // console.log('range', event);
  }

  datesUpdatedSingle($event: any) {
    console.log('single', $event);
  }

  datesUpdatedInline($event: Object) {
    console.log('inline', $event);
  }
}
