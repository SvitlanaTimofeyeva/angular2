///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>"
// Браузерная платформа
var platform_browser_dynamic_1 = require('../../node_modules/@angular/platform-browser-dynamic');
// Модуль приложения
var app_module_1 = require('./app.module');
// Компилляция и запуск модуля 
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
