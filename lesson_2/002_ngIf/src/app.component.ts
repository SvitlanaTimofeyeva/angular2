import { Component } from '@angular/core' 

@Component({
    selector: 'my-app', 
    // Директива ngIf используется для отображения/скрытия контента в зависимости от указанного условия 
    // Синтаксис: *ngIf = "condition", где condition - условие, которое должно быть соблюдено для отображения контента 
    template: ` 
        <div class="panel well">
            <h1>{{title}}</h1>
            <h3 *ngIf = "users.length < 5"> {{ text }}</h3>
        </div>
    `
})

export class AppComponent {
    title = 'Users: '; 
    text = 'There are less than 5 users'; 
    users = [{ name: "Martha", last_name: "Simpson" }, { name: "Brian", last_name: "Admams" },
        { name: "Dolly", last_name: "Parton" }, { name: "Robert", last_name: "Cool" }]; 
}