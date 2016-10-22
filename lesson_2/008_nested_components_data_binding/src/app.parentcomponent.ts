import { Component } from '@angular/core' 

@Component({
    selector: 'parent', 
   // синтаксис  [attr] = "value" используется для односторонней привязки данных в качестве атрибута компонента  
   // таким образом осуществляется коммуникация родительских и дочерних компонентов 
    template:
    `<div class="panel well">
        <child [text] = "1"></child>
    </div>`
	
}) 


export class ParentComponent {
    title: string
}