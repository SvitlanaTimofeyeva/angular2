import { Input, Component } from '@angular/core'  
import { ParentComponent } from './app.parentcomponent' 

@Component({
    selector: 'child',
    template: `<h2> {{text}} </h2>`
})

export class ChildComponent {
    @Input() text: string
}