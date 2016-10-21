﻿import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; // модуль для работы с формами необходим для использования директивы ngModel

import { AppComponent } from './app.component'; 

// каждое корневое приложение angular2 использует корневой модуль (root module) 

// декоратор @NgModule определяет метаданные, которые будет использовать модуль 
@NgModule({
    imports: [
        BrowserModule, 
        FormsModule 
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }

