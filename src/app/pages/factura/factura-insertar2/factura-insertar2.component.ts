import { CommonModule } from '@angular/common';
import {
  ButtonModule,
  CardModule,
  ColorModeService,
  GridModule,
  ModalModule,
  ModalService,
  SpinnerComponent,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { FormModule } from '@coreui/angular';
import { Component, inject } from '@angular/core';
import {
  NgbHighlight,
  NgbModal,
  NgbModalRef,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import {
  Observable,
  Subject,
  OperatorFunction,
  of,
  interval,
  throwError,
} from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../../services/clientes.service';
import { EmpleadosService } from '../../../services/empleados.service';
import { ParametersUrl } from '../../../models/Parameter.model';
import logger from '../../../shared/utils/logger';
import { Cliente } from '../../../models/Cliente.model';
import { Empleado } from '../../../models/Empleado.model';
import { IModalAction } from '@coreui/angular/lib/modal/modal.service';
import { Producto, ProductoPedido } from '../../../models/Producto.model';
import { PedidoService } from '../../../services/pedido.service';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';
import { FacturaPedidoComponent } from '../factura-pedido/factura-pedido.component';
import { MetodoPagoService } from '../../../services/metodos_pago.service';
import { MetodoPago } from '../../../models/MetodoPago.model';
import { FacturasService } from '../../../services/facturas.service';
import { Factura } from '../../../models/Factura.model';
import { DirectivesModule } from '../../../shared/directivas/directives.module';
import { HelpersService } from '../../../services/helpers.service';
import { LoginService } from '../../../services/login.service';
import { PedidoNewFormComponent } from '../../../shared/components/forms/pedido-new-form/pedido-new-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura-insertar2',
  standalone: true,
  imports: [
    CardModule,
    GridModule,
    FormModule,
    IconDirective,
    CommonModule,
    NgbTypeaheadModule,
    FormsModule,
    SpinnerComponent,
    NgbHighlight,
    ModalModule,
    ButtonModule,
    DirectivesModule,
    PedidoNewFormComponent,
  ],
  templateUrl: './factura-insertar2.component.html',
  styleUrl: './factura-insertar2.component.scss',
})
export class FacturaInsertar2Component {
  private destruir$: Subject<void> = new Subject<void>();

  #colorModeService = inject(ColorModeService);
  private _HelpersService = inject(HelpersService);
  private _ClientesService = inject(ClientesService);
  private _Router = inject(Router);

  loader: boolean = true;

  FormsValues(Cliente: Cliente) {
    logger.log(Cliente);

    this._HelpersService.loaderSweetAlert({
      title: 'Cargando',
      text: 'Esto puede demorar un momento.',
    });
    // this._ClientesService
    //   .createCliente(Cliente)
    //   .pipe(takeUntil(this.destruir$))
    //   .subscribe((data) => {
    //     this.loader = false;
    //     logger.log(data);
    //     Swal.mixin({
    //       customClass: {
    //         container: this.#colorModeService.getStoredTheme(
    //           environment.SabinosTheme
    //         ),
    //       },
    //     })
    //       .fire({
    //         text: 'Cliente agregado con éxito',
    //         icon: 'success',
    //       })
    //       .then((result) => {
    //         this._Router.navigateByUrl(`/clientes/editar/${data.id}`);
    //       });
    //   });
  }
}
