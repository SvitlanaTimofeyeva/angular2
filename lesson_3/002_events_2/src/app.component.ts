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

    // в данном примере рассмотрены свойства объекта $event в Angular2
    clicked($event) {
        
        var text = 'Angular2 event object \n';  
        for (let prop in $event) {
            text += prop + ': ' + $event[prop] + '\n'
        }; 
        alert(text);  
        console.log($event); 
        $event.target.style.backgroundColor = '#96a7e2'; 
    }

    title = 'Click'; 
}