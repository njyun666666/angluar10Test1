import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private cookieService: CookieService) { }

  ngOnInit() {



    this.cookieService.set( 'token', 'Hello World' );



  }


  getTest() {
    this.homeService.getTest().subscribe(result => {
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




}
