import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFloatingDirective, FormModule } from '@coreui/angular';
import dayjs, { Dayjs, locale } from 'dayjs';
import 'dayjs/locale/es'; // Cambia 'es' al idioma que necesites
import {
  NgxDaterangepickerBootstrapComponent,
  NgxDaterangepickerBootstrapDirective,
} from 'ngx-daterangepicker-bootstrap';
import logger from 'src/app/shared/utils/logger';

dayjs.locale('es'); // Configura el idioma global

@Component({
  selector: 'app-input-single-date',
  standalone: true,
  imports: [
    NgxDaterangepickerBootstrapDirective,
    FormsModule,
    CommonModule,
    FormModule,
    ReactiveFormsModule,
  ],
  templateUrl: './input-single-date.component.html',
  styleUrl: './input-single-date.component.scss',
})
export class InputSingleDateComponent {
  // @Input() SelectType!: string

  @Input() textLabel!: string;
  @Input() selectedDate: any = '01-02-2025';
  @Output() selectedDateChange = new EventEmitter<any>();

  @Input() floatingInput: boolean = false;
  @Output() handleDate = new EventEmitter<any>();

  dropsDown = 'down';
  dropsUp = 'up';
  opensRight = 'right';
  opensCenter = 'center';
  opensLeft = 'left';

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

  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   logger.log('changes', changes);
  // }

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
    this.selectedDate = dayjs().startOf('day');
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

  datesUpdatedSingle(event: any) {
    // console.log('single', this.selectedDate);
    // console.log('single2', event.startDate.format('YYYY-MM-DD'));
    // if (event.startDate)
    logger.log('event.startDate', event.startDate);
    if (event.startDate)
      this.selectedDateChange.emit(event.startDate.format('YYYY-MM-DD'));
    // this.selectedDateChange.emit(event);
  }

  datesUpdatedInline($event: Object) {
    // console.log('inline', $event);
  }
}
