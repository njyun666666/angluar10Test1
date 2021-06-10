import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  message$ = new Subject();

  message = ['a', 'b'];


  constructor() { }

  ngOnInit(): void {


    console.log('message', this.message);

    this.message = [...this.message, 'cccc'];


    this.message$.subscribe((data) => {
      console.log('subscribe', data);
    });

    this.message$.next(this.message);


    console.log();


    // 初始值
    const subject = new BehaviorSubject<string>('1');
    subject.subscribe(data => {
      console.log(`Sub1 => ${data}`);
    });



    // var click  = from(document,'click')

    // const subject = new Subject<string>();
    // // 分別印出 1, 2
    // subject.subscribe(data => {
    //   console.log(`Sub1 => ${data}`);
    // });

    // subject.next('1');
    // // 只會印出 2
    // subject.subscribe(data => {
    //   console.log(`Sub2 => ${data}`);
    // });

    // subject.next('2');

  }


}
