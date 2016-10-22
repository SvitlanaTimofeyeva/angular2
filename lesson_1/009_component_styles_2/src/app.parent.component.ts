import { Component } from '@angular/core' 

@Component({
    selector: 'parent', 
    // свойство /deep/ или >>> (альтернативный вариант записи) означает, что стили будут применены ко всем дочерним компонентам данного компонента 
    styles: [`
        :host /deep/ h3 {
          font-style: italic;
        } 
    `],  
    template: `
        <div class="panel well">
            <child></child>
        </div>
    `
})

export class ParentComponent { } 