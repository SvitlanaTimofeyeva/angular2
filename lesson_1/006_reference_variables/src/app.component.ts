import { Component } from '@angular/core' 

// В данном примере показана двусторонняя привязка данных в Angular2

@Component({
    selector: 'my-app', 

    // В angular2 есть возможность получить данные ввода пользователя через переменную-ссылку (template reference variable) 
    // Переменная-ссылка - ссылка на DOM-элемент или директиву в шаблоне 
    // Синтаксис: #var_name, где var_name - имя переменной-ссылки. В пределах шаблона это имя не должно повторяться. 
    template: 
    `<div class="panel well">
     <input class="input-lg" #text value="text" /> 
     <h2> {{text.value}}</h2>
     </div>`
	
}) 

export class AppComponent { 

}