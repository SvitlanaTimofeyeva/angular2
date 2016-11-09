import { Component } from '@angular/core' 

// Фильтры используются в для форматирования данных
// В данном примере рассмотрены фильтры: 

// uppercase - фильтр для отображения текста в верхнем регистре 

// lowercase - фильтр для отображения текста в нижнем регистре 

// number - фильтр для форматирования чисел. Синтаксис: number_expression | number[:digitInfo]

//      digitInfo - строка в следующем формате: 
//      { minIntegerDigits }.{ minFractionDigits } -{ maxFractionDigits }

//      minIntegerDigits - минимальное количество отображаемых цифр до запятой. Значение по умолчанию - 1.
//      minFractionDigits - минимальное количество отображаемых цифр после запятой . Значение по умолчанию - 0.
//      maxFractionDigits - максимальное количество отображаемых цифр после точки. Значение по умолчанию - 3.


// percent - фильтр для отображения процентов 

//      синтаксис: number_expression | percent[:digitInfo] 
//      digitInfo - строка в описанном выше формате 


@Component({
    selector: 'my-app',
    template: `
        <div class="panel well">
            <h1>Items!</h1>
        </div> 
        <div class="panel">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Value</th> 
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor = "let item of items">
                        <td>{{item.name | uppercase }}</td>
                        <td>{{item.category | lowercase }}</td> 
                        <td>{{item.value | percent:'1.0-1'}}</td>
                        <td>{{item.price | number: '3.2-3'}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class AppComponent { 

    items = [{ name: 'Item 1', category: 'Category 1', value: 30.546, price: 40.346654 },
        { name: 'Item 2', category: 'Category 2', value: 40.34, price: 789.345 },
        { name: 'Item 3', category: 'Category 3', value: 33.5, price: 3345.44 },
        { name: 'Item 4', category: 'Category 1', value: 89, price: 2000 },
        { name: 'Item 5', category: 'Category 2', value: 45, price: 45.334 },
        { name: 'Item 6', category: 'Category 3', value: 34.5, price: 340.3 },
        { name: 'Item 7', category: 'Category 1', value: 56, price: 34.545 },
        { name: 'Item 8', category: 'Category 3', value: 23.346, price: 322.4 },
        { name: 'Item 9', category: 'Category 2', value: 47.9, price: 78.45 }] 
}