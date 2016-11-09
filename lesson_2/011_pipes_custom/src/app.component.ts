import { Component } from '@angular/core' 


// В даннлом примере рассмотрены пользовательские фильтры angular2 (custom pipes)



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
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor = "let item of items" >
                        <td>{{item.value | powFilter: 5}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class AppComponent { 

    items = [{ value: 30 },
        { value: 40 },
        { value: 33 },
        { value: 89 },
        { value: 45 },
        { value: 34 },
        { value: 56 },
        { value: 23 },
        { value: 47 }]; 

}