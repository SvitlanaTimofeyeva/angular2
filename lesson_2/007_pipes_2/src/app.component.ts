import { Component } from '@angular/core' 

// Фильтры используются в для форматирования данных
// В данном примере рассмотрены фильтры для отображения даты и валюты

// Фильтр даты: синтаксис --> date_expression | date[:format]

// Доступные форматы отображения даты: 
    //'medium': 'yMMMdjms' (e.g.Sep 3, 2010, 12:05:08 PM for en- US)
    //'short':  'yMdjm' (e.g. 9/ 3 / 2010, 12:05 PM for en- US)
    //'fullDate':  'yMMMMEEEEd' (e.g.Friday, September 3, 2010 for en- US)
    //'longDate':  'yMMMMd' (e.g.September 3, 2010 for en- US)
    //'mediumDate': 'yMMMd' (e.g.Sep 3, 2010 for en- US)
    //'shortDate':  'yMd' (e.g. 9/ 3 / 2010 for en- US)
    //'mediumTime': 'jms' (e.g. 12:05:08 PM for en- US)
    //'shortTime':  'jm' (e.g. 12:05 PM for en- US)

// Фильтр валюты: синтаксис --> number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]
// number_expression - число 
// currencyCode - валютный код ISO_4217 (https://en.wikipedia.org/wiki/ISO_4217#X_currencies). например, USD, EUR и т.д. 

//      digitInfo - строка в следующем формате: 
//      { minIntegerDigits }.{ minFractionDigits } -{ maxFractionDigits } 

//      minIntegerDigits - минимальное количество отображаемых цифр до запятой. Значение по умолчанию - 1.
//      minFractionDigits - минимальное количество отображаемых цифр после запятой . Значение по умолчанию - 0.
//      maxFractionDigits - максимальное количество отображаемых цифр после точки. Значение по умолчанию - 3.

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
                        <th>Price</th>
                        <th>Expires</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor = "let item of items">
                        <td>{{item.name}}</td>
                        <td>{{item.category}}</td> 
                        <td>{{item.price | currency:'USD':true:'3.2-2'}}</td>
                        <td>{{item.expires | date}}</td> 
                        <td>{{item.value}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class AppComponent { 

    items = [{ name: 'Item 1', category: 'Category 1', price: 10.7, expires: new Date(5678960), value: 30 },
        { name: 'Item 2', category: 'Category 2', price: 20.5467, expires: new Date(56785465), value: 40 },
        { name: 'Item 3', category: 'Category 3', price: 15.5637, expires: new Date(32456675756), value: 33 },
        { name: 'Item 4', category: 'Category 1', price: 104.456, expires: new Date(3425654654266), value: 89 },
        { name: 'Item 5', category: 'Category 2', price: 20.536676, expires: new Date(456555590), value: 45 },
        { name: 'Item 6', category: 'Category 3', price: 15.5, expires: new Date(456567890), value: 34 },
        { name: 'Item 7', category: 'Category 1', price: 209.5, expires: new Date(5463547890), value: 56 },
        { name: 'Item 8', category: 'Category 3', price: 10.657, expires: new Date(564567890), value: 23 },
        { name: 'Item 9', category: 'Category 2', price: 10.56, expires: new Date(345347890), value: 47 }] 
}