import { Component } from '@angular/core'  

// В данном примере рассмотрена обработка различных событий мыши в Angular2. 

@Component({
    selector: 'my-app', 
    template: `
        <div class="panel well">
            <button class="btn btn-lg btn-info" (mousedown) = "clicked($event)" >Mousedown</button> 
            <button class="btn btn-lg btn-success" (mouseup) = "clicked($event)" >Mouseup</button> 
            <button class="btn btn-lg btn-warning" (contextmenu) = "clicked($event)" >Contextmenu</button> 
            <button class="btn btn-lg btn-danger" (dblclick) = "clicked($event)" >Doubleclick</button>
        </div> 
        <div class="panel">
            <div class="sample" id="div">   
            </div>
        </div>
        <div class="panel">
            <div class="sample" (mouseover) = "hover_handler($event)" (mouseout) = "hover_handler($event)">
                <p>Mouseover/ Mouseout</p>
            </div>
            <div class="sample" (mouseenter) = "hover_handler2($event)" (mouseleave) = "hover_handler2($event)">
                 <p>Mouseenter/ Mouseleave</p>
            </div> 
        </div>
    `, 
    styles: [`
        .sample {
            width: 100px;
            height: 100px; 
            border-radius: 20px; 
            background-color: orangered; 
            transition: background-color .3s linear; 
            padding: 13px; 
            margin-top: 10px; 
        }

        p {
            color: #fff; 
        }
    `]
})

export class AppComponent { 

    clicked($event) { 

        var target = document.getElementById('div'); 

        switch ($event.type) {
            case 'mousedown': {
                target.style.backgroundColor = 'blue'; 
                break;
            }
            case 'mouseup': {
                target.style.backgroundColor = 'red'; 
                break;
            }
            case 'contextmenu': {
                target.style.backgroundColor = 'limegreen'; 
                break; 
            } 
            case 'dblclick': {
                target.style.width = '200px';  
                target.style.height = '200px'; 
                break; 
            }
        }
    } 

    hover_handler($event) {

        if (!$event.target.classList.contains('sample')) return false;  

        switch ($event.type) {
            case 'mouseover': {
                $event.target.style.backgroundColor = 'blue'; 
                break;
            }
            case 'mouseout': {
                $event.target.style.backgroundColor = 'orangered'; 
                break; 
            }
        }
    } 

    hover_handler2($event) {
        switch ($event.type) {
            case 'mouseenter': {
                $event.target.style.backgroundColor = 'blue'; 
                break;
            }
            case 'mouseleave': {
                $event.target.style.backgroundColor = 'orangered'; 
                break;
            }
        }
    }
}