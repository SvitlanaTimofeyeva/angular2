import { Component } from '@angular/core' 

// В данном примере показана двусторонняя привязка данных в Angular2

@Component({
    selector: 'my-app', 

    // Для двусторонней привязки данных используется директива ngModel 
    template: 
    `<div class="panel well">
     <input class="input-lg" [(ngModel)]="username" type="text" placeholder="Enter Name"/> 
     <h2> Hello {{username}}!</h2>
     </div>`
	
}) 

export class AppComponent { 

}