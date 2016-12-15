// Браузерная платформа
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

// Модуль приложения
import { AppModule } from './app.module';

// Компилляция и запуск модуля 
platformBrowserDynamic().bootstrapModule(AppModule);