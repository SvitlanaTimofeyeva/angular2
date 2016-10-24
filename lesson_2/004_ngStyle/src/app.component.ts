import { Component } from '@angular/core' 

@Component({
    selector: 'my-app', 

    // Директива ngStyle позволяет задавать стили элементам
    // Синтаксис: 
    // <some - element[ngStyle]="{'font-style': styleExp}" >...</some-element> 
    // <some-element [ngStyle]="objExp">...</some-element> 
    
    template: ` 
        <div class="panel well">
           <div [ngStyle]="{'width': '100px', 'height': '100px', 'background-color': 'red', 'border-radius': '20px'}"></div>
        </div>
        <div class="panel well">
           <div [style.background] = "blue" [style.width.px] = "100" [style.height.px] = "100" [style.borderRadius] = "20"></div>
        </div>
    `
})

export class AppComponent { }