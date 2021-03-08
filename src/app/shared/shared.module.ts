import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './modules/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageModule } from './modules/language/language.module';
import { TaiwanDatePipe } from './pipe/taiwan-date.pipe';



@NgModule({
  declarations: [TaiwanDatePipe],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LanguageModule,
    TaiwanDatePipe,
  ],
  providers: []
})

export class SharedModule {

}
