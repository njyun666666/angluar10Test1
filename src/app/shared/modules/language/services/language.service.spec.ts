import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import { InjectionToken } from '@angular/core';

export const DEFAULT_LANGUAGE = new InjectionToken<string>('DEFAULT_LANGUAGE');

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
