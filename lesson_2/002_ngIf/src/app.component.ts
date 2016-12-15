import { Component } from '@angular/core' 

@Component({
    selector: 'my-app', 
    // Директива ngIf используется для отображения/скрытия контента в зависимости от указанного условия 
    // Синтаксис: *ngIf = "condition", где condition - условие, которое должно быть соблюдено для отображения контента 
    template: ` 
        <div class="panel well">
            <h2>{{title}}</h2> 
            <input type="text" [(ngModel)] = "mode" />
            <h3 *ngIf = "mode == 1"> {{ text1 }}</h3>
            <h3 *ngIf = "mode == 2"> {{ text2 }}</h3>
        </div>
    `
})

export class AppComponent {
    title = 'Enter 1 or 2!'; 
    mode = '1'; 
    text1 = 'Text 1'; 
    text2 = 'Text 2'; 
}