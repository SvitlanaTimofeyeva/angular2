// импорт модулей, необходимых для создания пользовательских фильтров 
import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({ name: 'searchPipe' })

export class SearchPipe implements PipeTransform {
    transform(items: any, search_value: string): any {
        if (Object.prototype.toString.call(items) === '[object Array]') {
            var filtered = items.filter(function (item) {
                if (item.name == search_value) return item; 
            });

            console.log('__________ items ___________');
            console.log(items); 

            console.log('__________ filtered ___________'); 
            console.log(filtered); 

            return filtered; 
        }
    }

}