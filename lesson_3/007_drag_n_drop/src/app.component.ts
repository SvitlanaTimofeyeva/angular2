import { Component } from '@angular/core'  

        // Для работы с drag and drop в JS прдусмотрены следующие события:
        //  drag -  перетаскивании элемента или выбранного текса с помощью мыши
        //  dragend -  пользователь отпускает курсор мыши
        //  dragenter - перетаскиваемый элемент достигает конечного элемента 
        //  dragleave -  перетаскиваемый элемент выходит за пределы конечного элемента 
        //  dragover -  курсор мыши наведен на элемент при перетаскивании 
        //  dragstart - начало переноса элемента или выбранного текста с помощью мыши
        //  drop -  происходит drop элемента 

@Component({
    selector: 'my-app',
    template: `
        <div class="panel well" (dragstart) = "dragstart_handler($event)" >
            <div class="brick" id="brick0" draggable="true"></div> 
            <div class="brick" id="brick1" draggable="true"></div>
            <div class="brick" id="brick2" draggable="true"></div>
            <div class="brick" id="brick3" draggable="true"></div>
            <div class="brick" id="brick4" draggable="true"></div>
            <div class="brick" id="brick5" draggable="true"></div>
            <div class="brick" id="brick6" draggable="true"></div>
            <div class="brick" id="brick7" draggable="true"></div>
            <div class="brick" id="brick8" draggable="true"></div>
            <div class="brick" id="brick9" draggable="true"></div> 
        </div>
        <div class="panel dropzone" (dragover) = "dragover_handler($event)" (drop) = "drop_handler($event)">
            <h1>Drag bricks here</h1>
        </div>
    `,
    styles: [`
        .brick {
            width: 70px;
            height: 40px;
            background-color: blue;
            border-radius: 20px;
            margin-top: 10px; 
            cursor: pointer;
        } 
        .dropzone {
            height: 400px; 
        }
    `]
})

export class AppComponent {
    dragstart_handler($event) {
        if (!$event.target.classList.contains('brick')) return false; 

        $event.target.style.backgroundColor = 'blue';
        $event.dataTransfer.effectAllowed = 'move';
        $event.dataTransfer.setData('text/plain', $event.target.id); 
        console.log($event.target); 
    }

    dragover_handler($event) {
        $event.preventDefault();  
        
    }

    drop_handler($event) {
        var data = $event.dataTransfer.getData("text/plain");
        $event.target.appendChild(document.getElementById(data));

        console.log('drop!'); 
    }
}