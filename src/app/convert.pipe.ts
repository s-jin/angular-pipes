import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits:string): any {
    if(!value){
      return null;
    }
    switch(targetUnits){
      case 'km':
        return value*1.69034;
      case 'm':
        return value*1.69034*1000;
      case 'cm':
        return value*1.69034*1000*1000;
      default:
        throw new Error('Target unit not supported');
    }
  }

}
