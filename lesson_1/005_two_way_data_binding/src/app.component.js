var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// В данном примере показана двусторонняя привязка данных в Angular2
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // Для двусторонней привязки данных используется директива ngModel 
            template: "<div class=\"panel well\">\n     <input class=\"input-lg\" [(ngModel)]=\"username\" type=\"text\" placeholder=\"Enter Name\"/> \n     <h2> Hello {{username}}!</h2>\n     </div>"
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
