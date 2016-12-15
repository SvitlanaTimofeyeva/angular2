import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// модуль FormsModule необходим для работы директивы ngModel
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }

