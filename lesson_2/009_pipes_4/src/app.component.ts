import { Component } from '@angular/core' 

// Фильтры используются в для форматирования данных
// В данном примере рассмотрен фильтр для отображения данных, полученных асинхронно. 

// Фильтр отображения асинхронных данных выводит на экран последнее значение, полученное при разрешении Promise. 
// При получении нового значения от промиса отображаемые данные отображаются автоматически. 


@Component({
    selector: 'my-app',
    template: `
        <div class="panel well">
            <button class="btn btn-lg btn-info" (click) = "getData(1)">One</button>
            <button class="btn btn-lg btn-success" (click) = "getData(2)">Two</button>
        </div> 
        <div class="panel">
            <h2>{{msg | async}}</h2>
        </div>
    `
})

export class AppComponent {

    msg: Promise<string> = null; 
    private resolve: Function = null; 

    getData(num) {
        this.msg = new Promise<string>((resolve, reject) => {
            setTimeout(function () {
                resolve('Hello from button ' + num)
            }, 500)
        });
    }
}