import { LanguageService } from './../services/language.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language',
  // pure: false
})
export class LanguagePipe implements PipeTransform {


  constructor(private languageService: LanguageService) { }




  transform(value: string, lang: string): string {
    // console.log(`pipe language => ${value} , ${lang}`);
    // const langTextJson = this.languageService.langText;
    // console.log(this.languageService.langText);
    // const langTextJson = JSON.parse(localStorage.langText);

    if (typeof (this.languageService.langText) !== 'undefined' && this.languageService.langText[value] !== 'undefined') {
      return this.languageService.langText[value];
    }

    return null;
  }

}
