//Custom Pipe for object attributes iteration
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
        //skip all id attributes
        if(key == "id")
        {
            continue;
        }
      keys.push(key);
    }
    return keys;
  }
}