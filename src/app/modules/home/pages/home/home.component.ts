import { LanguageService } from './../../../../shared/modules/language/services/language.service';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isSubmit = false;

  form = this.formBuilder.group({
    account: [null, [Validators.required]],
    password: [null, Validators.required]
  });







  constructor(private homeService: HomeService,
              private cookieService: CookieService,
              private formBuilder: FormBuilder,
              public languageService: LanguageService
              ) { }

  ngOnInit() {



    this.cookieService.set('token', 'HelloWorld', 30); // 30 day
    // this.cookieService.delete('token');
    // this.cookieService.deleteAll();
    // this.cookieService.get('token');


    this.form.setValue({ account: 'admin', password: 'adminPassword' });

    // get formBuilder value
    // this.form.value

  }


  getTest() {
    this.homeService.getTest(this.form.value).subscribe(result => {
      const code = result.code;
      const message = result.message;
      const viewModelList = result.viewModelList;



    });



  }



  postTest() {
    this.homeService.postTest().subscribe(result => {

      console.log(result);

      // const code = result.code;
      // const message = result.message;
      // const viewModelList = result.viewModelList;



    });



  }



  onSubmit() {


    // let account = this.form.get('account').value;

    // console.log(this.form.get('account').value);
    console.log(this.form);
    console.log(this.form.value);




  }



  getLangServiceLang(){
    console.log(this.languageService.defaultLang);
  }






}
