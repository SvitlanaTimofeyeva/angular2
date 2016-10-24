import { Component } from '@angular/core' 

@Component({
    selector: 'child', 
    // � angular2 ���� ����������� css ����������� :host, ������� ��������� ������ ����� ��������, � ������� ������������ ��������� 
    styles: [`
        :host {
            background-color: violet; 
            display: block; 
            border-radius: 20px; 
            width:200px; 
            height: 100px; 
            padding: 15px;
            text-align: center;
        } 
       /* ������ ����� ����� ��������� ������ ���� �������, � ������� ������������ ������ ��������� ����� css ����� active */
        :host(.active) h3 {
          font-style: italic;
        }
    `], 
    template: `
        <div><h3>Style Demo</h3></div> 
    `
}) 

export class ChildComponent { }