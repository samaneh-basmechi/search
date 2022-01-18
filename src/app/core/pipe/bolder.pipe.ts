import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bolder'
})
export class BolderPipe implements PipeTransform {

  transform(text: string, target: string): string {
    return text.replace(target, '<b>' + target + '</b>');;
  }

}
