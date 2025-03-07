import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';

import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  INavData,
  InputGroupComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective,
} from '@coreui/angular';

import { DefaultFooterComponent, DefaultHeaderComponent } from './';
import { navItems } from './navs/_nav';
import { navItemsProject } from './navs/_nav-project';
import { environment } from '../../../environments/environment';
import { LoginService } from '../../services/login.service';

function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  standalone: true,
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    RouterLink,
    IconDirective,
    NgScrollbar,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    DefaultHeaderComponent,
    ShadowOnScrollDirective,
    ContainerComponent,
    RouterOutlet,
    DefaultFooterComponent,
    InputGroupComponent,
  ],
})
export class DefaultLayoutComponent {
  private _LoginService = inject(LoginService);

  public navItems: INavData[] = [];
  // :  [...navItemsProject];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.filterByRole();
  }

  onScrollbarUpdate($event: any) {
    // if ($event.verticalUsed) {
    // console.log('verticalUsed', $event.verticalUsed);
    // }
  }

  filterByRole() {
    // const roleUsuario = 'administrador';
    const roleUsuario = this._LoginService.getUserData().role.name;
    // const SECCIONES = environment.production
    //   ? [...navItemsProject]
    //   : [...navItemsProject, ...navItems];
    const SECCIONES = environment.production
      ? [...navItemsProject]
      : [...navItemsProject];

    this.navItems = SECCIONES.filter((item) =>
      this.tieneAcceso(roleUsuario, item)
    );
  }

  tieneAcceso(roleUsuario: string, item: any): boolean {
    return item.attributes?.roles?.includes(roleUsuario) ?? true;
  }
}
