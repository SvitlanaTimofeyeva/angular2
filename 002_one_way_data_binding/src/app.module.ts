import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; 

// каждое корневое приложение angular2 использует корневой модуль (root module) 

// декоратор @NgModule определяет метаданные, которые будет использовать модуль
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }

