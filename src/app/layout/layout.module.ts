import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderOnlyLayoutComponent } from './header-only-layout/header-only-layout.component';



@NgModule({
  declarations: [MainLayoutComponent, HeaderOnlyLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    MainLayoutComponent,
    HeaderOnlyLayoutComponent
  ]
})
export class LayoutModule { }
