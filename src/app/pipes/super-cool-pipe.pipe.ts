import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'superCoolPipe'
})
export class SuperCoolPipePipe implements PipeTransform {

  transform(value: string): string {
    return "super cool " + value;
  }

}
