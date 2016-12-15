import { Component } from '@angular/core'  

// в данном примере рассмотрены события focus и blur

@Component({
    selector: 'my-app',
    template: `
        <div class="panel">
            <form class="form">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="input-lg form-control" placeholder="Name" (focus) = "focus_handler($event)" (blur) = "blur_handler($event)"/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="input-lg form-control" placeholder="Email" (focus) = "focus_handler($event)" (blur) = "blur_handler($event)"/>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea class="input-lg form-control" placeholder="Message" (focus) = "focus_handler($event)" (blur) = "blur_handler($event)"></textarea>
                </div>
                <div class="form-group">
                    <input type="submit" value="Send form!" class="btn-lg btn-success"/>
                </div>

            </form>
        </div>
    `, 
    styles: [`
        .form {
            width: 600px;
            margin: 0 auto;
        }
    `]
})

export class AppComponent {
    focus_handler($event) {

        $event.target.style.backgroundColor = '#d7ffd6';
        console.log('___focus on field___')
        console.log($event.target);
    } 

    blur_handler($event) { 

        $event.target.style.backgroundColor = '#fff0d6';
        console.log('___blur on field___')
        console.log($event.target);
    }
}