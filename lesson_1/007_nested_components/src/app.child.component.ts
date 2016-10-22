import { Component } from '@angular/core'  

@Component({
    selector: 'child',
    template: `<h2>{{title}}</h2>`
})

export class ChildComponent {
    title = "Hello from child component!"
}