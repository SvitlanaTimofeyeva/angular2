///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>"

// Браузерная платформа
import { platformBrowserDynamic } from '../../node_modules/@angular/platform-browser-dynamic'

// Модуль приложения
import { AppModule } from './app.module';

// Компилляция и запуск модуля 
platformBrowserDynamic().bootstrapModule(AppModule);