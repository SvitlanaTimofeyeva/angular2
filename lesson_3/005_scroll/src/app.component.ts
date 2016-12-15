import { Component } from '@angular/core'  

// В данном примере рассмотрено событие scroll. 

@Component({
    selector: 'my-app', 
    template: `

        <div class="panel scrolltarget" (window:scroll) = "scrolled($event)"> 
            <div class="panel well stats">
                <h1>Px scrolled: {{scrollval}}px</h1>
            </div>
        </div>
    `, 
    styles: [`
        .scrolltarget {
            height: 2000px; 
            background-color: wheat; 
        }
        .stats {
            position: fixed; 
            top: 0px; 
            width: 100%; 
            left: 0px; 
            right: 0px; 
        }

    `]
})

export class AppComponent { 

    scrollval = 0; 

    scrolled($event) {
        this.scrollval = window.pageYOffset; 
        console.log($event); 
    }
}