import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './component/page-container/page-container.component';
import { PageTitleComponent } from './component/page-title/page-title.component';



@NgModule({
  declarations: [PageContainerComponent, PageTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PageContainerComponent,
    PageTitleComponent
  ]
})
export class UiModule { }
