import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import {
  ButtonDirective,
  ColComponent,
  ColorModeService,
  FormFloatingDirective,
  FormModule,
  ModalModule,
  RowComponent,
  SpinnerModule,
} from '@coreui/angular';
import { NominaCrudFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { NominaCrudErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from 'src/app/models/Empleado.model';
import { LocalesService } from '../../../../services/locales.service';
import { Local } from '../../../../models/Local.model';
import { Subject, takeUntil } from 'rxjs';
import { Nomina } from '../../../../models/Nomina.model';
import { DateRangePickerComponent } from '../../date-range-picker/date-range-picker.component';
import {
  END_DATE,
  formatearFecha,
  START_DATE,
} from '../../../utils/constants/filtro';
import dayjs from 'dayjs';
import { FacturasService } from '../../../../services/facturas.service';
import { Factura } from '../../../../models/Factura.model';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-nomina-crud-form',
  standalone: true,
  imports: [
    CommonModule,
    RowComponent,
    ColComponent,
    ButtonDirective,
    FormFloatingDirective,
    FormModule,
    ReactiveFormsModule,
    ValidMessagesFormComponent,
    ModalModule,
    DirectivesModule,
    SpinnerModule,
    DateRangePickerComponent,
  ],
  templateUrl: './nomina-crud-form.component.html',
  styleUrl: './nomina-crud-form.component.scss',
})
export class NominaCrudFormComponent {
  NominaCrudForm = NominaCrudFormBuilder();
  readonly NominaCrudErrorMessages = NominaCrudErrorMessages;

  private destruir$: Subject<void> = new Subject<void>();

  Fecha = {
    startDate: START_DATE, // Inicio del día de la fecha dada
    endDate: END_DATE, // Fin del día de la fecha dada
  };
  loadingEmpleados: boolean = false;
  Empleados: Empleado[] = [];

  #colorModeService = inject(ColorModeService);
  private _EmpleadosService = inject(EmpleadosService);
  private _FacturasService = inject(FacturasService);
  // private _LocalesService = inject(LocalesService);
  private _LoginService = inject(LoginService);

  @Input() Nomina!: Nomina;
  @Output() FormsValues = new EventEmitter<any>();

  Empleadoes: Empleado[] = [];

  loadingLocales = false;
  Locales: Local[] = [];

  loadingFacturas: boolean = false;

  ngOnInit(): void {
    this.getEmpleados();
    this.changeTotalAndPorcentaje();
    this.changeEmpleado();
    // this.getLocales();
  }

  ngOnChanges(): void {
    if (this.Nomina) this.setFormValues();
  }

  getControlError(name: string): ValidationErrors | null {
    const control = this.NominaCrudForm.controls
      ? this.NominaCrudForm.get(name)
      : null;

    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.NominaCrudForm.get(name) as FormControl;
  }

  changeTotalAndPorcentaje() {
    this.getControl('monto_facturado').valueChanges.subscribe((data) => {
      logger.log('data', data);

      let total = this.validPorcentaje(Number(data));

      this.getControl('total').patchValue(total);
    });

    this.getControl('porcentaje_adicional').valueChanges.subscribe(() => {
      let total = this.validPorcentaje(
        this.getControl('monto_facturado').value
      );

      this.getControl('total').patchValue(total);
    });

    this.getControl('adicional').valueChanges.subscribe(() => {
      let total = this.validPorcentaje(
        this.getControl('monto_facturado').value
      );

      this.getControl('total').patchValue(total);
    });
  }

  changeEmpleado() {
    this.getControl('empleado_id').valueChanges.subscribe((data) => {
      this.loadingFacturas = true;
      logger.log('data', data);

      this.getFacturas(data);
    });
  }

  validPorcentaje(total: number) {
    if (this.getControl('adicional').value) {
      const porcentajeAdicional = this.getControl('porcentaje_adicional').value;

      // Verifica que el porcentajeAdicional sea un número válido
      if (porcentajeAdicional && !isNaN(porcentajeAdicional)) {
        // Divide el porcentaje entre 100 para convertirlo a decimal
        const montoAdicional = (total * porcentajeAdicional) / 100;
        total = Number(montoAdicional) + Number(total);
      }
    }
    return total;
  }

  setFormValues() {
    logger.log(this.Nomina);

    this.NominaCrudForm.patchValue({
      empleado_id: this.Nomina.empleado_id,
      nombre: this.Nomina.nombre,
      monto_facturado: this.Nomina.monto_facturado,
      adicional: this.Nomina.adicional == 1 ? true : false,
      porcentaje_adicional: this.Nomina.porcentaje_adicional,
      total: this.Nomina.total,
    });
  }

  getEmpleados() {
    this.loadingEmpleados = true;
    this._EmpleadosService
      .getEmpleadoes({
        estado: 1,
        disablePaginate: '1',
        link: null,
      })
      // .pipe(delay(3000))
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Empleado[]) => {
        this.loadingEmpleados = false;
        this.Empleados = [...data];
      });
  }

  getFacturas(empleado_id: number) {
    // this.loadingEmpleados = true;
    this._FacturasService
      .getFacturas({
        estado: 1,
        disablePaginate: '1',
        empleado_id,
        link: null,
        fecha_inicio: formatearFecha(this.Fecha.startDate, 'YYYY-MM-DD'),
        fecha_fin: formatearFecha(this.Fecha.endDate, 'YYYY-MM-DD'),
      })
      // .pipe(delay(3000))
      .pipe(takeUntil(this.destruir$))
      .subscribe((facturas: Factura[]) => {
        logger.log('data nomina', facturas);
        this.loadingFacturas = false;
        const sumaTotal = facturas.reduce(
          (acumulador, item) => acumulador + item.total,
          0
        );

        logger.log(sumaTotal);
        this.NominaCrudForm.patchValue({
          monto_facturado: sumaTotal,
        });
      });
  }

  sendValueFom() {
    if (this.NominaCrudForm.valid) {
      const USER_DATA = this._LoginService.userData();
      const NOMINA = {
        ...this.NominaCrudForm.value,
        total: this.getControl('total').value,
        adicional: this.NominaCrudForm.value.adicional ? '1' : '0',
        local_id: USER_DATA.user.local_id,
      };
      logger.log(NOMINA);

      this.FormsValues.emit(NOMINA);
    } else {
      Swal.mixin({
        customClass: {
          container: this.#colorModeService.getStoredTheme(
            environment.SabinosTheme
          ),
        },
      }).fire({
        text: 'Complete todos los campos obligatorios',
        icon: 'warning',
      });
    }
  }

  // getLocales() {
  //   this.loadingLocales = true;

  //   this._LocalesService
  //     .getLocales({
  //       link: null,
  //       disablePaginate: '1',
  //     })
  //     // .pipe(delay(3000))
  //     // .pipe(takeUntil(this.destruir$))
  //     .subscribe((data: Local[]) => {
  //       this.loadingLocales = false;
  //       this.Locales = [...data];
  //       logger.log(data);
  //     });
  // }

  handleDate(event: { endDate: dayjs.Dayjs; startDate: dayjs.Dayjs }) {
    logger.log('range', event);
    this.Fecha = event;
  }

  ngOnDestroy(): void {
    // Completa el Subject para cancelar todas las suscripciones activas
    this.destruir$.next();
    this.destruir$.complete();
  }
}
