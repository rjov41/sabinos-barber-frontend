import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { delay, filter, map, tap } from 'rxjs/operators';

import { ColorModeService } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { environment } from 'src/environments/environment';
import logger from './shared/utils/logger';
import { HttpClient } from '@angular/common/http';
import { forkJoin, lastValueFrom } from 'rxjs';
import { CUSTOM_ICONS } from './icons/icon-font-awesome';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  title = 'Sabino´s App';

  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly #router = inject(Router);
  readonly #titleService = inject(Title);
  readonly #http = inject(HttpClient); // Inyectar HttpClient
  readonly #colorModeService = inject(ColorModeService);
  readonly #iconSetService = inject(IconSetService);

  constructor() {
    this.#titleService.setTitle(this.title);
    // iconSet singleton
    this.#iconSetService.icons = { ...iconSubset };
    this.#colorModeService.localStorageItemName.set(environment.SabinosTheme);
    this.#colorModeService.eventName.set('ColorSchemeChange');
    this.loadIcons();
  }

  ngOnInit(): void {
    this.#router.events
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
      });

    this.#activatedRoute.queryParams
      .pipe(
        delay(1),
        map((params) => <string>params['theme']?.match(/^[A-Za-z0-9\s]+/)?.[0]),
        filter((theme) => ['dark', 'light', 'auto'].includes(theme)),
        tap((theme) => {
          this.#colorModeService.colorMode.set(theme);
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }

  async loadIcons() {
    logger.log('CUSTOM_ICONS', CUSTOM_ICONS);
    logger.log('this.#iconSetService.icons', this.#iconSetService.icons);
    this.#iconSetService.icons = {
      ...this.#iconSetService.icons,
      ...CUSTOM_ICONS,
    };
    //   const iconRequests = CUSTOM_ICONS.map(({ nombreIcon, path, size }) =>
    //     this.#http.get(path, { responseType: 'text' }).pipe(
    //       map((iconText: string) => ({
    //         nombreIcon,
    //         path,
    //         size,
    //         iconText: iconText, // Esto es el contenido del SVG en formato texto
    //       }))
    //     )
    //   );

    //   forkJoin(iconRequests).subscribe({
    //     next: (responses) => {
    //       // logger.log('Custom icons loaded:', responses);
    //       responses.forEach((response) => {
    //         // Aquí puedes agregar el ícono de alguna forma, por ejemplo, añadiéndolo al DOM
    //         this.#iconSetService.icons = {
    //           ...this.#iconSetService.icons,
    //           [response.nombreIcon]: [response.size, response.iconText], // Aseguramos que sea un array de strings válidos
    //         };
    //         logger.log('this.#iconSetService.icons', this.#iconSetService.icons);
    //       });
    //     },
    //     error: (err) => {
    //       console.log(err, '');
    //     },
    //   });
  }
}
