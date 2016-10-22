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
            styles: ["\n        .one {\n\t\t\tbackground-color: blue;\n\t\t\tcolor: #ffc4c4;\n\t\t\twidth: 200px;\n\t\t\theight: 200px;\n\t\t\tborder-radius: 20px;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 25px; \n            padding-top: 60px;\n        } \n        .two {\n\t\t\tbackground-color: #ffc4c4;\n\t\t\tcolor: blue;\n\t\t\twidth: 200px;\n\t\t\theight: 200px;\n\t\t\tborder-radius: 20px;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 25px; \n            padding-top: 60px;\n        } \n    "],
            template: "\n        <div class=\"one\"><h3>Style Demo 1</h3></div> \n        <div class=\"two\"><h3>Style Demo 2</h3></div>\n    "
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
