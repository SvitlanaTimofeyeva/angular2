import { Component } from '@angular/core' 

@Component({
    selector: 'child', 
    // в angular2 есть специальный css псевдокласс :host, который позволяет задать стили элементу, в котором отображается компонент 
    styles: [`
        :host {
            background-color: violet; 
            display: block; 
            border-radius: 20px; 
            width:200px; 
            height: 100px; 
            padding: 15px;
            text-align: center;
        } 
       /* данные стили будут применены только если элемент, в котором отображается данный компонент имеет css класс active */
        :host(.active) h3 {
          font-style: italic;
        }
    `], 
    template: `
        <div><h3>Style Demo</h3></div> 
    `
}) 

export class ChildComponent { }