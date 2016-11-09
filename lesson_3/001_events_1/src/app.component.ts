import { Component } from '@angular/core'  

@Component({
    selector: 'my-app', 
    template: `
        <div class="panel well">
            <button class="btn btn-lg btn-danger" (click) = "clicked($event)" >{{title}}</button>
        </div>
    `
})

export class AppComponent { 

    clicked($event) {
        alert('clicked!'); 
        $event.target.style.backgroundColor = '#96a7e2'; 
    }

    title = 'Click'; 
}