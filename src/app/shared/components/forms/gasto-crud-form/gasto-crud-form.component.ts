import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
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
import { agregarGasto, GastoCrudFormBuilder } from './utils/form';
import { CommonModule } from '@angular/common';
import { GastoCrudErrorMessages } from './utils/validations';
import Swal from 'sweetalert2';
import logger from 'src/app/shared/utils/logger';
import { environment } from 'src/environments/environment';
import { DirectivesModule } from '../../../directivas/directives.module';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from 'src/app/models/Empleado.model';
import { Local } from '../../../../models/Local.model';
import { Subject, takeUntil } from 'rxjs';
import { Nomina } from '../../../../models/Nomina.model';
import { Usuario } from '../../../../models/Usuario.model';
import { UsuarioesService } from '../../../../services/usuarios.service';
import { ValidMessagesFormComponent } from '../../valid-messages-form/valid-messages-form.component';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-gasto-crud-form',
  standalone: true,
  imports: [
    CommonModule,
    RowComponent,
    ColComponent,
    ButtonDirective,
    FormFloatingDirective,
    FormModule,
    ReactiveFormsModule,
    ModalModule,
    DirectivesModule,
    SpinnerModule,
    ValidMessagesFormComponent,
    IconDirective,
  ],
  templateUrl: './gasto-crud-form.component.html',
  styleUrl: './gasto-crud-form.component.scss',
})
export class GastoCrudFormComponent {
  GastoCrudForm = GastoCrudFormBuilder();
  readonly GastoCrudErrorMessages = GastoCrudErrorMessages;

  private destruir$: Subject<void> = new Subject<void>();

  loadingEmpleados: boolean = false;
  Empleados: Empleado[] = [];

  loadingUsuarios: boolean = false;
  Usuarios: Usuario[] = [];

  #colorModeService = inject(ColorModeService);
  private _EmpleadosService = inject(EmpleadosService);
  private _UsuarioService = inject(UsuarioesService);

  @Input() Nomina!: Nomina;
  @Output() FormsValues = new EventEmitter<any>();

  loadingLocales = false;
  Locales: Local[] = [];

  ngOnInit(): void {
    this.getEmpleados();
    this.getUsuarios();

    this.GastoCrudForm.valueChanges.subscribe((data) => {
      logger.log('data', data);
      logger.log('GastoCrudForm.', this.GastoCrudForm.controls.gastos);
    });
  }

  ngOnChanges(): void {
    if (this.Nomina) this.setFormValues();
  }

  // Getter para acceder al FormArray de gastos
  get gastos() {
    return this.GastoCrudForm.get('gastos') as FormArray;
  }

  getControlError(name: string): ValidationErrors | null {
    const control = this.GastoCrudForm.get(name);
    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  // Obtener errores de controles dentro del FormArray
  getGastoControlError(
    index: number,
    controlName: string
  ): ValidationErrors | null {
    const gastoFormGroup = this.gastos.at(index) as FormGroup;
    const control = gastoFormGroup.get(controlName);
    return control && control.touched && control.invalid
      ? control.errors
      : null;
  }

  getControl(name: string): FormControl {
    return this.GastoCrudForm.get(name) as FormControl;
  }

  agregarNuevoGasto() {
    agregarGasto(this.GastoCrudForm);
  }

  setFormValues() {
    // Implementar lógica para cargar valores si es necesario
    logger.log(this.Nomina);
  }

  getEmpleados() {
    this.loadingEmpleados = true;
    this._EmpleadosService
      .getEmpleadoes({
        estado: 1,
        disablePaginate: '1',
        link: null,
      })
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Empleado[]) => {
        this.loadingEmpleados = false;
        this.Empleados = [...data];
      });
  }

  getUsuarios() {
    this.loadingUsuarios = true;
    this._UsuarioService
      .getUsuarioes({
        estado: 1,
        disablePaginate: '1',
        link: null,
      })
      .pipe(takeUntil(this.destruir$))
      .subscribe((data: Usuario[]) => {
        this.loadingUsuarios = false;
        this.Usuarios = [...data];
      });
  }

  sendValueFom() {
    if (this.GastoCrudForm.valid) {
      const FORM_DATA = {
        ...this.GastoCrudForm.value,
        gastos: this.GastoCrudForm.value.gastos,
      };
      this.FormsValues.emit(FORM_DATA);
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

  ValidarBtnForm() {
    if (this.GastoCrudForm.valid) {
      return true;
    } else {
      return false;
    }
  }

  eliminarGasto(index: number) {
    logger.log('index', index);
    if (this.gastos.length > 0 && index >= 0 && index < this.gastos.length) {
      this.gastos.removeAt(index);
    }
  }

  ngOnDestroy(): void {
    this.destruir$.next();
    this.destruir$.complete();
  }
}
