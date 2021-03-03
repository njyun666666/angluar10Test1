import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  firstText1 = new Date().toISOString();
  firstText2 = '123';


  One_List = ['a', 'b', 'c'];
  Two_List = ['d', 'e', 'f'];

  constructor() { }

  ngOnInit() {
  }



  first2OutText(event) {
    console.log(event);
  }


  fromfirst2Emitter(event){
    console.log(event);
  }

}
