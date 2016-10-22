import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component'; 

// каждое корневое приложение angular2 использует корневой модуль (root module) 

// декоратор @NgModule определяет метаданные, которые будет использовать модуль 
@NgModule({
    // встроенные модули angular2
    imports: [
        BrowserModule, 
        FormsModule 
    ],
    declarations: [AppComponent], 

    // компоненты
    bootstrap: [AppComponent]
})

export class AppModule { }

