import { ApiService } from 'src/app/core/services/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './modules/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    CookieService
  ]
})
export class SharedModule { }
