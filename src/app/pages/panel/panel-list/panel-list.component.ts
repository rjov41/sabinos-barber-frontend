import { Component, inject } from '@angular/core';
import {
  ButtonDirective,
  ButtonModule,
  CardGroupComponent,
  CardModule,
  FormControlDirective,
  GridModule,
  InputGroupComponent,
  ModalModule,
  ModalService,
  PageItemDirective,
  PageLinkDirective,
  PaginationComponent,
  ProgressBarDirective,
  ProgressComponent,
  SpinnerComponent,
  TableDirective,
  TemplateIdDirective,
  TextColorDirective,
  TooltipDirective,
  WidgetStatCComponent,
} from '@coreui/angular';
import { FiltrosListFormComponent } from '../../../shared/components/forms/filtros-list-form/filtros-list-form.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { FormsModule } from '@angular/forms';
import { HelpersService } from '../../../services/helpers.service';
import { ColorModeService } from '@coreui/angular';
import { IModalAction } from '@coreui/angular/lib/modal/modal.service';
import { ParametersUrl } from '../../../models/Parameter.model';
import dayjs from 'dayjs';
import logger from '../../../shared/utils/logger';
import { Subject, takeUntil } from 'rxjs';
import { PanelService } from '../../../services/panel.service';
import { Filtro } from '../../../models/Filter.model';
import { WidgetsDropdownComponent } from '../../../documentacion/widgets/widgets-dropdown/widgets-dropdown.component';
import { WidgetsBrandComponent } from '../../../documentacion/widgets/widgets-brand/widgets-brand.component';
import { Panel } from '../../../models/Panel.model';

@Component({
  selector: 'app-panel-list',
  standalone: true,
  imports: [
    TableDirective,
    CardModule,
    GridModule,
    InputGroupComponent,
    FormControlDirective,
    ButtonDirective,
    IconDirective,
    PaginationComponent,
    PageItemDirective,
    PageLinkDirective,
    RouterLink,
    CommonModule,
    TooltipDirective,
    FiltrosListFormComponent,
    ModalModule,
    ButtonModule,
    FormsModule,
    SpinnerComponent,
    TextColorDirective,
    WidgetsDropdownComponent,
    ProgressBarDirective,
    ProgressComponent,
    TemplateIdDirective,
    IconDirective,
    WidgetsBrandComponent,
    CardGroupComponent,
    WidgetStatCComponent,
  ],
  templateUrl: './panel-list.component.html',
  styleUrl: './panel-list.component.scss',
})
export class PanelListComponent {
  private destruir$: Subject<void> = new Subject<void>();
  private _ModalService = inject(ModalService);
  private _HelpersService = inject(HelpersService);
  private _PanelService = inject(PanelService);
  readonly #ColorModeService = inject(ColorModeService);

  loaderPanel: boolean = true;
  Panel!: Panel;

  ParametrosURL: ParametersUrl = {
    allDates: false,
    estado: 1,
    link: null,
    local_id: 1,
    disablePaginate: '1',
    fecha_inicio: dayjs().startOf('month').format('YYYY-MM-DD'),
    fecha_fin: dayjs().endOf('month').format('YYYY-MM-DD'),
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getPanel();
  }

  getPanel() {
    this.loaderPanel = true;

    this._PanelService
      .getPanel(this.ParametrosURL)
      // .pipe(delay(3000))
      .pipe(takeUntil(this.destruir$))
      .subscribe((data) => {
        this.loaderPanel = false;
        this.Panel = { ...data };
        logger.log(data);
      });
  }

  modalStatusById(id: string, show: boolean) {
    const action: IModalAction = { show, id };
    this._ModalService.toggle(action);
  }

  filtroEvent(filtros: Filtro) {
    logger.log('filtros', filtros);

    filtros.fecha_inicio = dayjs(filtros.fecha.startDate).format('YYYY-MM-DD');
    filtros.fecha_fin = dayjs(filtros.fecha.endDate).format('YYYY-MM-DD');
    const FILTROS_SANETIZE = this._HelpersService.filterData(filtros);

    this.ParametrosURL = {
      ...this.ParametrosURL,
      ...FILTROS_SANETIZE,
      fecha_inicio: FILTROS_SANETIZE.fecha_inicio,
    };

    if (this.ParametrosURL.allDates) {
      delete this.ParametrosURL.fecha_fin;
      delete this.ParametrosURL.fecha_inicio;
    }
    logger.log('this.ParametrosURL', this.ParametrosURL);

    this.getPanel();
  }
}
