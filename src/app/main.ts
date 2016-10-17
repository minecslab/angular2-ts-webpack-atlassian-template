import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

document.getElementById('hello').addEventListener('click', function() {
    document.body.appendChild(document.createElement('my-app'));
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
});
