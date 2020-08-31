import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  defaultLang;
  langText;
  changeLang;

  constructor(private cookieService: CookieService, private apiService: ApiService) { }


  setDefaultLang(lang?: string): void {

    lang = lang ? lang : this.cookieService.get('lang');

    if (!lang) {
      lang = 'zh-TW';
    }



    switch (lang) {
      case 'en':
      case 'en-US':
        this.defaultLang = 'en-US';
        break;

      default:
        this.defaultLang = 'zh-TW';
        break;
    }

    this.cookieService.set('lang', this.defaultLang);
    this.getLanguageText(this.defaultLang);

  }



  getLanguageText(lang): void {

    // const langTextJson = JSON.parse(localStorage.langText);
    // const langTextUpdateTime = langTextJson.langTextUpdateTime;


    // const params = { langTextUpdateTime, lang };
    // this.apiService.post(environment.apiUrl + 'Common/LanguageTextGet', params).subscribe((result) => {

    //   if (result) {
    //     localStorage.langText = JSON.stringify(result);
    //     this.langText = result;
    //   }

    // });

    this.apiService.get('/assets/i18n/' + lang + '.json').subscribe((result) => {

      if (result) {
        localStorage.langText = JSON.stringify(result);
        this.langText = result;
        this.changeLang = lang;

        // console.log(this.changeLang);
      }

    });



  }



}
