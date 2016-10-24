var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ParentComponent = (function () {
    function ParentComponent() {
    }
    ParentComponent = __decorate([
        core_1.Component({
            selector: 'parent',
            // свойство /deep/ или >>> (альтернативный вариант записи) означает, что стили будут применены ко всем дочерним компонентам данного компонента 
            styles: ["\n        :host /deep/ h3 {\n          font-style: italic;\n        } \n    "],
            template: "\n        <div class=\"panel well\">\n            <child></child>\n        </div>\n    "
        })
    ], ParentComponent);
    return ParentComponent;
})();
exports.ParentComponent = ParentComponent;
