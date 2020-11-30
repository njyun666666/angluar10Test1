import { Component, OnInit } from '@angular/core';
import { LanguageService } from './shared/modules/language/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'angular10Test1';


  constructor(private languageService: LanguageService) { }

  ngOnInit() {

    console.log('app-root oninit');

    this.languageService.setDefaultLang();

  }

}
