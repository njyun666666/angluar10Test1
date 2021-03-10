import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodonavComponent } from './todonav.component';

describe('TodonavComponent', () => {
  let component: TodonavComponent;
  let fixture: ComponentFixture<TodonavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodonavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodonavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
