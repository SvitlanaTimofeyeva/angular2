// импорт модулей, необходимых для создания пользовательских фильтров 
import { Pipe, PipeTransform } from '@angular/core'; 

// создание фильтра
@Pipe({ name: 'powFilter' })

export class PowFilter implements PipeTransform {
    transform(value: number, exponent: string): number {
        let exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
}