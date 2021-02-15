import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './pages/test1/test1.component';
import { TestRoutingModule } from './test-routing.module';



@NgModule({
  declarations: [Test1Component],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class Test1Module { }
