import { Component } from '@angular/core' 

// В данном примере показана односторонняя привязка данных в Angular2

@Component({
    selector: 'parent', 
   // синтаксис  [attr] = "value" используется для односторонней привязки данных к атрибуту DOM-элемента 
    template:
    `<div class="panel well">
        <child></child>
    </div>`
	
}) 


export class ParentComponent {  }