import { Component } from '@angular/core' 

// В данном примере показана двусторонняя привязка данных в Angular2

@Component({
    selector: 'my-app', 

    template: 
    `<div class="panel well">
     <input class="input-lg" [(ngModel)]="username" type="text" placeholder="Enter Name"/> 
     <h2> Hello {{username}}!</h2>
     </div>`
	
}) 

// указание значения свойства title 
export class AppComponent { 

}