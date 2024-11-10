import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClienteCrudComponent } from '../../../shared/components/forms/cliente-crud/cliente-crud.component';
import logger from 'src/app/shared/utils/logger';
import {
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  CardModule,
  ColComponent,
  ContainerComponent,
  GridModule,
  RowComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-producto-insertar',
  standalone: true,
  templateUrl: './producto-insertar.component.html',
  styleUrl: './producto-insertar.component.scss',
  imports: [
    CardModule,
    GridModule,
    RouterLink,
    ContainerComponent,
    ClienteCrudComponent,
  ],
})
export class ProductoInsertarComponent {
  FormsValues(event: any) {
    logger.log(event);
  }
}
