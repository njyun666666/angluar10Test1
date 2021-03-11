import { TestBed } from '@angular/core/testing';

import { TaskResolveService } from './task-resolve.service';

describe('TaskResolveService', () => {
  let service: TaskResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
