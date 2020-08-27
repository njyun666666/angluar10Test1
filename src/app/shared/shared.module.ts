import { ApiService } from 'src/app/core/services/api.service';
import { AuthGuard } from 'src/app/core/services/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './modules/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    CookieService,
    AuthGuard
  ]
})
export class SharedModule { }
