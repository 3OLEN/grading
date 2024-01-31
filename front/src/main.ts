import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, appConfig)
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
    });
