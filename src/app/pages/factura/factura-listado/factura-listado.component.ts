import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { delay, Subject, takeUntil, timer } from 'rxjs';
import {
  ButtonDirective,
  FormControlDirective,
  InputGroupComponent,
  TableDirective,
  PaginationComponent,
  PageItemDirective,
  PageLinkDirective,
  GridModule,
  CardModule,
  TooltipDirective,
  ModalModule,
  ButtonModule,
  ModalService,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { FacturasService } from '../../../services/facturas.service';
import { CommonModule } from '@angular/common';
import { Listado } from 'src/app/models/Listados.model';
import { Producto } from 'src/app/models/Producto.model';
import { ParametersUrl } from 'src/app/models/Parameter.model';
import { FiltrosListFormComponent } from '../../../shared/components/forms/filtros-list-form/filtros-list-form.component';
import { IModalAction } from '@coreui/angular/lib/modal/modal.service';
import logger from 'src/app/shared/utils/logger';
import { Filtro, FiltroKeys } from 'src/app/models/Filter.model';
import dayjs from 'dayjs';
import { HelpersService } from 'src/app/services/helpers.service';
import Swal from 'sweetalert2';
import { ColorModeService } from '@coreui/angular';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-factura-listado',
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
  ],
  templateUrl: './factura-listado.component.html',
  styleUrl: './factura-listado.component.scss',
})
export class FacturaListadoComponent {
  private destruir$: Subject<void> = new Subject<void>();

  private _FacturasService = inject(FacturasService);
  private _ModalService = inject(ModalService);
  private _HelpersService = inject(HelpersService);
  readonly #ColorModeService = inject(ColorModeService);

  loaderTable: boolean = true;
  ParametrosURL: ParametersUrl = {
    allDates: true,
    estado: 1,
    link: null,
    disablePaginate: '0',
    local_model: '1',
    dateIni: dayjs().startOf('month').format('YYYY-MM-DD'),
    dateFin: dayjs().endOf('month').format('YYYY-MM-DD'),
  };
  FacturasList!: Listado<Producto>;

  ngOnInit(): void {
    this.getFacturas();
  }

  getFacturas() {
    this.loaderTable = true;

    this._FacturasService
      .getFacturas(this.ParametrosURL)
      // .pipe(delay(3000))
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Listado<Producto>) => {
        this.loaderTable = false;
        this.FacturasList = { ...data };
        console.log(data);
      });
  }

  newPage(link: any) {
    if (link.url == null) return;
    // console.log(link);

    this.ParametrosURL.link = link.url;

    this.getFacturas();
  }

  modalStatusById(id: string, show: boolean) {
    const action: IModalAction = { show, id };
    this._ModalService.toggle(action);
  }

  filtroEvent(filtros: Filtro) {
    logger.log('filtros', filtros);

    filtros.dateIni = dayjs(filtros.fecha.startDate).format('YYYY-MM-DD');
    filtros.dateFin = dayjs(filtros.fecha.endDate).format('YYYY-MM-DD');
    const FILTROS_SANETIZE = this._HelpersService.filterData(filtros);

    this.ParametrosURL = {
      ...this.ParametrosURL,
      ...FILTROS_SANETIZE,
      dateIni: FILTROS_SANETIZE.dateIni,
    };
    logger.log('this.ParametrosURL', this.ParametrosURL);

    this.getFacturas();
  }

  buscar() {
    this.getFacturas();
  }

  eliminar(factura: Producto) {
    Swal.mixin({
      customClass: {
        container: this.#ColorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    })
      .fire({
        title: '¿Estás seguro?',
        text: 'Este producto se eliminará y no podrás recuperarlo.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#51cbce',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this._HelpersService.loaderSweetAlert({
            title: 'Eliminando producto',
            text: 'Esto puede demorar un momento.',
          });
          // Swal.mixin({
          //   customClass: {
          //     container: this.#ColorModeService.getStoredTheme(
          //       environment.SabinosTheme
          //     ),
          //   },
          // }).fire({
          //   title: 'Eliminando producto',
          //   text: 'Esto puede demorar un momento.',
          //   timerProgressBar: true,
          //   allowEscapeKey: false,
          //   allowOutsideClick: false,
          //   // allowEnterKey: false,
          //   focusConfirm: false,
          //   didOpen: () => {
          //     Swal.showLoading();
          //   },
          // });
          this._FacturasService
            .deleteFactura(Number(factura.id))
            .pipe(takeUntil(this.destruir$))
            .subscribe((data) => {
              this.FacturasList.data = this.FacturasList.data.filter(
                (factu) => factu.id != factura.id
              );

              Swal.mixin({
                customClass: {
                  container: this.#ColorModeService.getStoredTheme(
                    environment.SabinosTheme
                  ),
                },
              }).fire({
                text: data[0],
                icon: 'success',
              });
            });
        }
      });
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
