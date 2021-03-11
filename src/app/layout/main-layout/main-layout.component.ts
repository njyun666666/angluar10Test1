import { LanguageService } from '../../shared/modules/language/services/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit() {



  }



  setDefaultLang(lang?: string) {
    this.languageService.setDefaultLang(lang);
    console.log(this.languageService.defaultLang);
  }





}
