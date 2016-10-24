import { Component } from '@angular/core' 

@Component({
    selector: 'my-app', 
    // стили компонента могут быть добавлены непосредственно в шаблон (через использование тега style)
    template: `
        <style> 
        .one {
			background-color: blue;
			color: #ffc4c4;
			width: 200px;
			height: 200px;
			border-radius: 20px;
			text-align: center;
			font-size: 25px; 
            padding-top: 60px;
        } 
        .two {
			background-color: #ffc4c4;
			color: blue;
			width: 200px;
			height: 200px;
			border-radius: 20px;
			text-align: center;
			font-size: 25px; 
            padding-top: 60px;
        } 
        </style>
        <div class="one"><h3>Style Demo 1</h3></div> 
        <div class="two"><h3>Style Demo 2</h3></div>
    `
}) 

export class AppComponent { }