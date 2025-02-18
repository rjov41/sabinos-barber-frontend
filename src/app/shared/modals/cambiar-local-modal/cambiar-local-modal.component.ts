import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalesCrudFormComponent } from '../../components/forms/locales-crud-form/locales-crud-form.component';
import { Local } from '../../../models/Local.model';
import logger from '../../utils/logger';
import { HelpersService } from '../../../services/helpers.service';
import { LoginService } from '../../../services/login.service';
import { CambiarLocalFormComponent } from '../../components/forms/cambiar-local-form/cambiar-local-form.component';
import { CommonModule } from '@angular/common';
import { ColorModeService } from '@coreui/angular';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-local-modal',
  standalone: true,
  imports: [CambiarLocalFormComponent, CommonModule],
  templateUrl: './cambiar-local-modal.component.html',
  styleUrl: './cambiar-local-modal.component.scss',
})
export class CambiarLocalModalComponent {
  activeModal = inject(NgbActiveModal);
  _HelpersService = inject(HelpersService);
  #colorModeService = inject(ColorModeService);
  _LoginService = inject(LoginService);

  Local!: Local;

  ngOnInit(): void {
    const UserData = this._LoginService.userData();
    this.Local = UserData.user.local;
    // this.Local = {
    //   id: 1,
    //   nombre: 'Sucursal 1',
    //   estado: 1,
    // };
  }

  FormsValues(Local: Local) {
    logger.log(Local);
    let UserData = this._LoginService.userData();
    UserData.user.local = Local;
    this._LoginService.setAuth({ ...UserData });
    Swal.mixin({
      customClass: {
        container: this.#colorModeService.getStoredTheme(
          environment.SabinosTheme
        ),
      },
    })
      .fire({
        text: 'Local modificado con éxito',
        icon: 'success',
      })
      .then((result: any) => {
        this.activeModal.close();
        logger.log(result);
      });
  }
}
