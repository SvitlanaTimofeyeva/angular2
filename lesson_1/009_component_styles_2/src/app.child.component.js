var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ChildComponent = (function () {
    function ChildComponent() {
    }
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child',
            // в angular2 есть специальный css псевдокласс :host, который позволяет задать стили элементу, в котором отображается компонент 
            styles: ["\n        :host {\n            background-color: violet; \n            display: block; \n            border-radius: 20px; \n            width:200px; \n            height: 100px; \n            padding: 15px;\n            text-align: center;\n        } \n       /* \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0438\u043B\u0438 \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0434\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u043C\u0435\u0435\u0442 css \u043A\u043B\u0430\u0441\u0441 active */\n        :host(.active) h3 {\n          font-style: italic;\n        }\n    "],
            template: "\n        <div><h3>Style Demo</h3></div> \n    "
        })
    ], ChildComponent);
    return ChildComponent;
})();
exports.ChildComponent = ChildComponent;
