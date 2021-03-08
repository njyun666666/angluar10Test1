import { AfterContentChecked, AfterContentInit, Component, ContentChild, ContentChildren, DoCheck, OnInit } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked {

  @ContentChild(PageTitleComponent) title: HTMLElement;
  // @ContentChildren(PageTitleComponent) titleList: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit', this.title);

  }
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }


}
