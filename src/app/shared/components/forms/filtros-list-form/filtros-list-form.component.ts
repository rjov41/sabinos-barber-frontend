import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ButtonModule,
  CardModule,
  ColComponent,
  ContainerComponent,
  FormFloatingDirective,
  FormLabelDirective,
  FormSelectDirective,
  RowComponent,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

import { NgxDaterangepickerBootstrapDirective } from 'ngx-daterangepicker-bootstrap';
import logger from 'src/app/shared/utils/logger';
import { DateRangePickerComponent } from '../../date-range-picker/date-range-picker.component';
import { LocalesService } from '../../../../services/Local.service';
import { Local } from 'src/app/models/Local.model';
import { ParametersUrl } from 'src/app/models/Parameter.model';
import { IniciarFiltro } from '../../../utils/constants/filtro';
import { Filtro } from '../../../../models/Filter.model';
import dayjs from 'dayjs';

@Component({
  selector: 'app-filtros-list-form',
  standalone: true,
  imports: [
    FormFloatingDirective,
    CommonModule,
    NgxDaterangepickerBootstrapDirective,
    CardModule,
    ContainerComponent,
    RowComponent,
    ColComponent,
    ButtonModule,
    IconDirective,
    DateRangePickerComponent,
    FormsModule,
    FormSelectDirective,
    FormLabelDirective,
  ],
  templateUrl: './filtros-list-form.component.html',
  styleUrl: './filtros-list-form.component.scss',
})
export class FiltrosListFormComponent {
  @Input() showId: boolean = false;
  @Input() showMarca: boolean = false;
  @Input() showDescripcion: boolean = false;
  @Input() showDate: boolean = false;
  @Input() showLocales: boolean = false;
  @Input() showEstado: boolean = false;
  @Output() filtrar = new EventEmitter<Filtro>();

  private _LocalesServices = inject(LocalesService);

  private ParametrosURL: ParametersUrl = {
    allDates: true,
    link: null,
    disablePaginate: '1',
  };

  filtro: Filtro = {
    ...IniciarFiltro,
  };

  Locales: Local[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.filtro = {
      ...this.filtro,
      estado: this.showEstado ? 1 : '',
      local_id: this.showLocales ? 0 : '',
    };
    if (this.showLocales) {
      this._LocalesServices
        .getLocales(this.ParametrosURL)
        .subscribe((locales: Local[]) => {
          this.Locales = locales;
        });
    }
  }

  onFiltrar() {
    // logger.log(this.filtro);
    this.filtrar.emit(this.filtro);
  }

  // Método para limpiar los campos
  onLimpiar() {
    this.filtro = { ...IniciarFiltro };
  }

  handleDate(event: { endDate: dayjs.Dayjs; startDate: dayjs.Dayjs }) {
    console.log('range', event);
    this.filtro.fecha = event;
  }
}
