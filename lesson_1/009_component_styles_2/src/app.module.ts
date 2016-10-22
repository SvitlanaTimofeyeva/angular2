import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponent } from './app.parent.component'; 
import { ChildComponent } from './app.child.component'; 

// каждое корневое приложение angular2 использует корневой модуль (root module) 

// декоратор @NgModule определяет метаданные, которые будет использовать модуль 
@NgModule({
    imports: [BrowserModule],
    declarations: [ParentComponent, ChildComponent],
    bootstrap: [ParentComponent, ChildComponent]
})

export class AppModule { }

