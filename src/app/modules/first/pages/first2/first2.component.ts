import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first2',
  templateUrl: './first2.component.html',
  styleUrls: ['./first2.component.scss']
})
export class First2Component implements OnInit {

  @Input() firstText1: string;
  @Output() first2OutText = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
    console.log(this.firstText1);

    this.firstText1 = 'zzzzzzzzzzz';

    this.first2OutText.emit('first2OutText first2OutText first2OutText');

  }

}
