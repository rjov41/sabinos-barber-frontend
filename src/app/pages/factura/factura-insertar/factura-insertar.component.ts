import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardModule,
  FormControlDirective,
  GridModule,
  InputGroupComponent,
  TableDirective,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { FormModule } from '@coreui/angular';

@Component({
  selector: 'app-factura-insertar',
  standalone: true,
  imports: [CardModule, GridModule, FormModule, IconDirective, CommonModule],
  templateUrl: './factura-insertar.component.html',
  styleUrl: './factura-insertar.component.scss',
})
export class FacturaInsertarComponent {}
