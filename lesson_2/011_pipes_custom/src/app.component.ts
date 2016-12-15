import { Component } from '@angular/core' 


// В даннлом примере рассмотрены пользовательские фильтры angular2 (custom pipes)



@Component({
    selector: 'my-app',
    template: `
        <div class="panel well">
            <h1>Items!</h1> 
            <input type="text" [(ngModel)] = "search_val" class="input-lg form-control" />    
        </div> 
        <div class="panel">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor = "let item of items | searchPipe : search_val" >
                        <td>{{item.name}}</td>
                        <td>{{item.value | powFilter: 5}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class AppComponent { 

    search_val = 'Category 1'; 
    items = [{ value: 30, name: 'Category 1' },
        { value: 40, name: 'Category 1' },
        { value: 33, name: 'Category 2' },
        { value: 89, name: 'Category 2' },
        { value: 45, name: 'Category 3' },
        { value: 34, name: 'Category 3' },
        { value: 56, name: 'Category 1' },
        { value: 23, name: 'Category 2' },
        { value: 47, name: 'Category 3' }]; 


    set_filter_value() {
        console.log(this.search_val)
    }

}