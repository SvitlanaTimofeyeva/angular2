import { Component } from '@angular/core'  

// В данном примере рассмотрена обработка различных событий клавиатуры в Angular2 (keydown, keyup, keypress). 

@Component({
    selector: 'my-app', 
    template: `
        <div class="panel well"> 
            <div class="row">
                <div class="col-md-12">
                    <input type="text" class="input-lg form-control" (keypress) = "keypress_handler($event)" 
                   (keyup) = "keyup_handler($event)" (keydown) = "keydown_handler($event)" />
                </div>
            </div>
          <div class="row">
                 <div class="sample col-md-4">
                    <p class="cell">Keydown</p> 
                    <div class="stats" id="stats1"></div>
                </div>
                 <div class="sample col-md-4" > 
                    <p class="cell">Keyup</p>
                    <div class="stats" id="stats2"></div>
                </div>
                 <div class="sample col-md-4">
                    <p class="cell">Keypress</p>
                    <div class="stats" id="stats3"></div>
                </div>
            </div> 

        </div>
    `, 
    styles: [`
        .sample {
            display: table; 
            height: 1900px; 
            background-color: wheat;
            border: 5px solid #fff;
        } 
        .cell {
            display: table-cell;
            color: '#fff';                 
        }
    `]
})

export class AppComponent { 

    keydown_handler($event) {
        var stats_text = ''; 

        for (let prop in $event) {
            stats_text += '<p>' + prop; 
            stats_text += ': '; 
            stats_text += $event[prop] + '</p>'; 
    
        } 

        console.log($event); 
        document.querySelector('#stats1').innerHTML = stats_text; 
    }

    keyup_handler($event) {
        var stats_text = '';

        for (let prop in $event) {
            stats_text += '<p>' + prop;
            stats_text += ': ';
            stats_text += $event[prop] + '</p>'; 
        }

        console.log($event); 
        document.querySelector('#stats2').innerHTML = stats_text; 
    }

    keypress_handler($event) {
        var stats_text = '';

        for (let prop in $event) {
            stats_text += '<p>' + prop;
            stats_text += ': ';
            stats_text += $event[prop] + '</p>'; 
        }

        console.log($event); 
        document.querySelector('#stats3').innerHTML = stats_text; 
    }
}