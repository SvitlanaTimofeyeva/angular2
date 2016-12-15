import { Component } from '@angular/core'  


@Component({
    selector: 'my-app',
    template: `
        <div class="panel">
            <form>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="input-lg form-control" placeholder="Name" />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="input-lg form-control" placeholder="Email" />
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea class="input-lg form-control"></textarea>
                </div>
                <div class="form-group">
                    <input type="submit" value="Send form!"/>
                </div>

            </form>
        </div>
    `
})

export class AppComponent {
    
}