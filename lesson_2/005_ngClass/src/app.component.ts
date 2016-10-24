import { Component } from '@angular/core' 

@Component({
    selector: 'my-app', 

    // Директива ngClass позволяет добавлять и удалять css классы элемента 

    // Синтаксис: 

    // <some-element [ngClass]="'first second'">...</some-element>
    // <some-element [ngClass]="['first', 'second']">...</some-element>
    // <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
    
    template: `
        <div class="panel well"> 
            <input type="checkbox" [(ngModel)] = "mode" />
            <div [ngClass] = "'one two'"></div>
            <div [ngClass] = "['two','three']"></div>
            <div [ngClass] = "{'one': mode, 'three': !mode}"></div>
        </div>
    `, 
    styles: [`
        .one {
            margin-top: 15px; 
            width: 100px; 
            height: 100px; 
            border-radius: 20px; 
            background-color: red; 
        }
        .two {
            margin-top: 15px;  
            width: 100px; 
            height: 100px; 
            border-radius: 20px; 
            background-color: blue; 
        }
        .three { 
            margin-top: 15px; 
            width: 100px; 
            height: 100px; 
            border-radius: 20px; 
            background-color: limegreen; 
        }
    `]
})

export class AppComponent {
    mode = true; 
 }