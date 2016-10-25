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

// digitInfo - строка в формате {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}
// minIntegerDigits - количество цифр до запятой, которые будут отображены 
// minFractionDigits - минимальное количество цифр после запятой 

@Component({
    selector: 'my-app',
    template: `
        <div class="panel well">
            <h1>Items!</h1>
        </div> 
        <div class="panel">
            <table>
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
                        <td>{{item.price}}</td>
                        <td>{{item.expires | date}}</td> 
                        <td>{{item.value}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class AppComponent { 

    items = [{ name: 'Item 1', category: 'Category 1', price: 10, expires: new Date(), value: 30 },
        { name: 'Item 2', category: 'Category 2', price: 20, expires: 6, value: 40 },
        { name: 'Item 3', category: 'Category 3', price: 15, expires: 9, value: 33 },
        { name: 'Item 4', category: 'Category 1', price: 10, expires: 3, value: 89 },
        { name: 'Item 5', category: 'Category 2', price: 20, expires: 2, value: 45 },
        { name: 'Item 6', category: 'Category 3', price: 15, expires: 7, value: 34 },
        { name: 'Item 7', category: 'Category 1', price: 20, expires: 3, value: 56 },
        { name: 'Item 8', category: 'Category 3', price: 10, expires: 2, value: 23 },
        { name: 'Item 9', category: 'Category 2', price: 10, expires: 8, value: 47 }] 
}