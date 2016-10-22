var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // загрузка шаблона компонента из отдельного файла (с использованием webpack)
            // обратите внимание, что путь к html шаблону должен быть указан относительно главного html файла вашего приложения
            // (в данном примере - относительно файла index.html)
            templateUrl: './src/app.component.html'
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
