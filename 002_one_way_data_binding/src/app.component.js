"use strict";
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
        this.num = 5;
        this.obj = {
            prop: 'prop1'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // Для привязки данных используется синтаксис {{prop}}, где prop - имя свойства, значение которого используется 
            template: "<h1>Hello from Angular2!</h1> \n\t<h2>{{title}}</h2> \n\t<h3>{{num}}</h3> \n\t<h4>{{obj.prop}}</h4>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
