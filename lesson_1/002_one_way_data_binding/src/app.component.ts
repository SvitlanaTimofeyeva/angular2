import { Component } from '@angular/core' 

// В данном примере показана односторонняя привязка данных в Angular2

@Component({
    selector: 'my-app', 
	// Для привязки данных используется синтаксис {{prop}}, где prop - имя свойства, значение которого используется 
   
    template: 
	`<h1>Hello from Angular2!</h1> 
	<h2>{{title}}</h2> 
	<h3>{{num}}</h3> 
	<h4>{{obj.prop}}</h4>`
	
}) 

// указание значений свойств с привязкой данных 
// поддерживаются разные типы данных 
export class AppComponent { 
    title = 'Data binding sample!'; 
    num = 5; 
    obj = {
        prop: 'prop1'
    }; 
}