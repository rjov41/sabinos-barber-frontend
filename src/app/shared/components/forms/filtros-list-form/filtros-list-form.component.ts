import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ButtonModule,
  CardModule,
  ColComponent,
  ContainerComponent,
  FormFloatingDirective,
  FormModule,
  RowComponent,
} from '@coreui/angular';

import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Cambia 'es' al idioma que necesites
dayjs.locale('es'); // Configura el idioma global

import {
  NgxDaterangepickerBootstrapComponent,
  NgxDaterangepickerBootstrapDirective,
} from 'ngx-daterangepicker-bootstrap';
import logger from 'src/app/shared/utils/logger';

@Component({
  selector: 'app-filtros-list-form',
  standalone: true,
  imports: [
    FormFloatingDirective,
    FormsModule,
    CommonModule,
    NgxDaterangepickerBootstrapComponent,
    NgxDaterangepickerBootstrapDirective,
    CardModule,
    ContainerComponent,
    RowComponent,
    ColComponent,
    FormModule,
    ButtonModule,
  ],
  templateUrl: './filtros-list-form.component.html',
  styleUrl: './filtros-list-form.component.scss',
})
export class FiltrosListFormComponent {
  @Input() mostrarId: boolean = true;
  @Input() mostrarMarca: boolean = true;
  @Input() mostrarDescripcion: boolean = true;
  @Output() filtrar = new EventEmitter<any>();

  filtro = {
    id: '',
    marca: '',
    descripcion: '',
    fecha: {
      startDate: dayjs('2019-01-25'),
      endDate: dayjs('2019-01-27'),
    },
  };

  locale = {
    firstDay: 1,
    format: 'DD/MM/YYYY',
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

  onFiltrar() {
    logger.log(this.filtro);
    this.filtrar.emit(this.filtro);
  }

  // Método para limpiar los campos
  onLimpiar() {
    this.filtro = {
      id: '',
      marca: '',
      descripcion: '',
      fecha: {
        startDate: dayjs(),
        endDate: dayjs(),
      },
    };
  }

  datesUpdatedRange($event: Object) {
    console.log('range', $event);
  }
}
