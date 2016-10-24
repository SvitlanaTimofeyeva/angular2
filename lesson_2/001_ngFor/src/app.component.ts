import { Component } from '@angular/core' 

@Component({
    selector: 'my-app', 
    // Директива ngFor используется для отображения повторяющейся информации. 
    // Синтаксис: *ngFor = "let item of items", где items - массива элементов, 
    // а item - ссылка на текущий элемент массива 
    template: ` 
        <div class="panel well">
            <h1>{{title}}</h1>
            <ul>
                <li *ngFor = "let user of users">
                     {{ user.name }} {{ user.last_name }} 
                </li> 
            </ul> 
        </div>
    `
})

export class AppComponent {
    title = 'Users: ';
    users = [{ name: "Martha", last_name: "Simpson" }, { name: "Brian", last_name: "Admams" },
        { name: "Dolly", last_name: "Parton" }, { name: "Robert", last_name: "Cool" }]; 
}