import { AfterContentChecked, AfterContentInit, Component, ContentChild, ContentChildren, DoCheck, OnInit } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked {

  @ContentChild(PageTitleComponent) title: HTMLElement;
  

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit', this.title);

  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked');
  }


}
