import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './pages/first/first.component';
import { First2Component } from './pages/first2/first2.component';
import { FirstRoutingModule } from './first-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FirstComponent, First2Component],
  imports: [
    CommonModule,
    SharedModule,
    FirstRoutingModule
  ],
//  exports: [FirstComponent]
})
export class FirstModule { }
