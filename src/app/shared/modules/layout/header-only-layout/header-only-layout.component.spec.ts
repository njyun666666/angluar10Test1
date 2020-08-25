import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOnlyLayoutComponent } from './header-only-layout.component';

describe('HeaderOnlyLayoutComponent', () => {
  let component: HeaderOnlyLayoutComponent;
  let fixture: ComponentFixture<HeaderOnlyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOnlyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOnlyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
