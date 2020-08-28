import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/core/services/api.service';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  defaultLang;
  langText;

  constructor(private cookieService: CookieService,
              private apiService: ApiService,
    // @Inject(DEFAULT_LANGUAGE) defaultLanguage: string
  ) {

    // console.log('LanguageService >>>>>>>>>>>>>>>>>>>>>');
    // console.log(defaultLanguage);

    // this.setDefaultLang(defaultLanguage);



    // console.log('LanguageService <<<<<<<<<<<<<<<<<<<<<');
  }


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

    // const localStorageLangText = localStorage.langText;

    // const langTextJson = JSON.parse(localStorage.langText);
    // const langTextUpdateTime = langTextJson.langTextUpdateTime;


    // const params = { langTextUpdateTime };
    // this.apiService.post(environment.apiUrl + 'Common/LanguageTextGet', params);


    // if (langText) {

    // }

    this.apiService.get('/assets/i18n/' + lang + '.json').subscribe((result) => {

      if (result) {
        localStorage.langText = JSON.stringify(result);
        // this.langText = result;
        console.log(result);
      }

    });


  }






}
