import { Component } from '@angular/core' 

@Component({

    selector: 'my-app',  

    // �������� ������� ���������� �� ���������� ����� (� �������������� webpack)
    // �������� ��������, ��� ���� � html ������� ������ ���� ������ ������������ �������� html ����� ������ ����������
    // (� ������ ������� - ������������ ����� index.html)
    templateUrl: './src/app.component.html'
}) 

export class AppComponent { }