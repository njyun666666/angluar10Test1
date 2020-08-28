import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: string): string {


    const langTextJson = JSON.parse(localStorage.langText);

    if (langTextJson[value]) {
      return langTextJson[value];
    }

    return null;
  }

}
