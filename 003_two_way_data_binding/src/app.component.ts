import { Component } from '@angular/core' 

// В данном примере показана двусторонняя привязка данных в Angular2

@Component({
    selector: 'my-app', 

    template: 
    `<input [(ngModel)]="username" type="text" placeholder="Enter Name"/> 
     <p> Hello {{username}}!</p>`
	
}) 

// указание значения свойства title 
export class AppComponent { 

}