import { Component } from '@angular/core';
import { CardModule, GridModule } from '@coreui/angular';
import { ClienteCrudComponent } from 'src/app/shared/components/forms/cliente-crud/cliente-crud.component';
import logger from 'src/app/shared/utils/logger';

@Component({
  selector: 'app-producto-editar',
  standalone: true,
  templateUrl: './producto-editar.component.html',
  styleUrl: './producto-editar.component.scss',
  imports: [CardModule, GridModule, ClienteCrudComponent],
})
export class ProductoEditarComponent {
  FormsValues(event: any) {
    logger.log(event);
  }
}
