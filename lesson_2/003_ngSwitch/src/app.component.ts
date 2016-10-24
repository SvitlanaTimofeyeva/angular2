import { Component } from '@angular/core' 

@Component({
    selector: 'my-app', 

    // Директива ngSwitch используется для отображения/скрытия частей DOM-дерева на основе соответствия определенному условию.  
    // Она состоит из 2х компонентов - ngSwitch и ngSwitchCase 

    // Синтаксис:

    // <container - element[ngSwitch]="switch_expression" >
    // <some-element *ngSwitchCase="match_expression_1" >...</some-element>
    // <some-element *ngSwitchCase="match_expression_2" >...</some-element>
    // </container>
    
    template: ` 
        <div class="panel well">
            <input type="checkbox" class="input-lg" [(ngModel)]="mode" /> 
            <div class="panel" [ngSwitch]="mode">
                <h2 *ngSwitchCase = "true">Checkbox is checked</h2>
                <h2 *ngSwitchCase = "false">Checkbox is unchecked</h2> 
                <h2 *ngSwitchDefault>Default view</h2>
            </div>
        </div>
    `
})

export class AppComponent { }