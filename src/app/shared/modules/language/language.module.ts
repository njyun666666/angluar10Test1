// import { LanguageService, DEFAULT_LANGUAGE } from './services/language.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagePipe } from './pipes/language.pipe';




export interface TranslateModuleConfig {
  defaultLanguage?: string;
}


@NgModule({
  declarations: [LanguagePipe], // LanguagePipe
  imports: [
    CommonModule
  ],
  exports: [LanguagePipe]
})

export class LanguageModule {

  // static forRoot(config: TranslateModuleConfig = {}): ModuleWithProviders<LanguageModule> {
  //   // console.log(config.defaultLanguage);
  //   return {
  //     ngModule: LanguageModule,
  //     providers: [
  //       {provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage},
  //       LanguageService
  //     ]
  //   };
  // }



  // static forChild(config: TranslateModuleConfig = {}): ModuleWithProviders<LanguageModule> {
  //   // console.log(config.defaultLanguage);
  //   return {
  //     ngModule: LanguageModule,
  //     providers: [
  //       {provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage},
  //       LanguageService
  //     ]
  //   };
  // }




}
