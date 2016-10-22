var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// В данном примере показана односторонняя привязка данных в Angular2
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Data binding sample!';
        this.type = 'button';
    }
    AppComponent.prototype.clicked = function () {
        this.clickMessage = 'Click';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // синтаксис  [attr] = "value" используется для односторонней привязки данных к атрибуту DOM-элемента 
            template: "\n    <div class=\"panel well\">\n        <input [type] = \"type\" [value] = \"title\" (click) =\"clicked()\" class=\"btn btn-lg btn-success\"/>\n        <h1> {{clickMessage}} </h1>\n    </div>\n    "
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
