import { Component } from '@angular/core'  

@Component({
    selector: 'my-app', 
    template: `
        <div class="panel well">
            <button class="btn btn-lg btn-danger" (click) = "add($event)" >{{title}}</button>  
            <button class="btn btn-lg btn-danger" (click) = "subtract($event)" >{{title}}</button> 
            <h1>{{counter}}</h1>
        </div>
    `
})

export class AppComponent { 
    title = 'Click';
    counter = 0;  

    add($event) {
        this.counter++; 
    }

    subtract($event) {
        this.counter--;
    }


}