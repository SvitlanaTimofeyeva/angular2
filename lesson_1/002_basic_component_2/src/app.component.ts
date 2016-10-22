import { Component } from '@angular/core' 

@Component({

    selector: 'my-app',  

    // загрузка шаблона компонента из отдельного файла (с использованием webpack)
    // обратите внимание, что путь к html шаблону должен быть указан относительно главного html файла вашего приложения
    // (в данном примере - относительно файла index.html)
    templateUrl: './src/app.component.html'
}) 

export class AppComponent { }