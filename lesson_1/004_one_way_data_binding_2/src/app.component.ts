import { Component } from '@angular/core' 

// В данном примере показана односторонняя привязка данных в Angular2

@Component({
    selector: 'my-app', 
   // синтаксис  [attr] = "value" используется для односторонней привязки данных к атрибуту DOM-элемента 
    template:
    `
    <div class="panel well">
        <input [type] = "type" [value] = "title" (click) ="clicked()" class="btn btn-lg btn-success"/>
        <h1> {{clickMessage}} </h1>
    </div>
    `
	
}) 

export class AppComponent { 
    title = 'Data binding sample!'; 
    type = 'button'; 
    clickMessage = 'Click'; 

    clicked() {
        this.clickMessage = 'Click'; 
    }
}