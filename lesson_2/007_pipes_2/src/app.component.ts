import { Component } from '@angular/core' 
import { items_arr } from './items' 

@Component ({
    template: `
        <div class="panel well">
            <h1>{{title}}</h1> 
            <table>
                <thead>
                    <tr>
                       <th>Name</th>
                       <th>Price</th>
                       <th>Category</th>
                       <th>Count</th>
                       <th>Tax</th>
                       <th>Expiration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor = "item of items">
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.category}}</td>
                        <td>{{item.count}}</td>
                        <td>{{item.tax}}</td>
                        <td>{{item.expiration}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class AppComponent {

    title: 'Items'; 
    items: items_arr = [{ name: "Item 1", price: 10.9, category: "Category 1", count: 10000, tax: 1.12, expiration: 10 },
    { name: "Item 2", price: 1.1, category: "Category 1", count: 8, tax: 0.55, expiration: 12 },
    { name: "Item 3", price: 2.6, category: "Category 2", count: 7, tax: 0.22, expiration: 5 },
    { name: "Item 4", price: 17.5, category: "Category 2", count: 33, tax: 2.77, expiration: 10 }]; 

}
