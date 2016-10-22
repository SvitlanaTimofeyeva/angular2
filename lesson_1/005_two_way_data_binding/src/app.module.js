var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
// каждое корневое приложение angular2 использует корневой модуль (root module) 
// декоратор @NgModule определяет метаданные, которые будет использовать модуль 
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            // встроенные модули angular2
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [app_component_1.AppComponent],
            // компоненты
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
