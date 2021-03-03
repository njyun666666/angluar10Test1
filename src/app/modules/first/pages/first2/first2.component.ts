import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first2',
  templateUrl: './first2.component.html',
  styleUrls: ['./first2.component.scss']
})
export class First2Component implements OnInit {

  @Input() firstText1: string;
  @Input() firstText2: string;
  @Output() first2OutText = new EventEmitter<string>();
  @Output() first2Emitter = new EventEmitter<object>();



  constructor() { }

  ngOnInit() {
    console.log('firstText1: ' + this.firstText1);
    console.log('firstText2: ' + this.firstText2);

    this.firstText1 = 'zzzzzzzzzzz';

    this.first2OutText.emit('first2OutText first2OutText first2OutText');

  }


  emitter2() {
    var obj={
      a:1,
      b:2
    }
    this.first2Emitter.emit(obj);
  }


}
