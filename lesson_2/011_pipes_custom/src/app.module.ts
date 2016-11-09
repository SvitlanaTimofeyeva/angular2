import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';  
import { PowFilter } from './pow-filter.pipe.ts';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, PowFilter],
    bootstrap: [AppComponent]
})

export class AppModule { }

