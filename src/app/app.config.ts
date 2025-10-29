import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import {
  alarm,
  arrowForward,
  book,
  calendar,
  chatbubbleEllipses,
  clipboard,
  flash,
  heart,
  leaf,
  paw,
  sparkles
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIonicAngular({}),
    provideAppInitializer(() =>
      addIcons({
        heart,
        paw,
        arrowForward,
        chatbubbleEllipses,
        calendar,
        leaf,
        book,
        sparkles,
        alarm,
        clipboard,
        flash
      })
    ) // Registers the icons used in templates // Реєструє іконки, що використовуються в шаблонах
  ]
};
