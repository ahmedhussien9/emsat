import { TestBed } from '@angular/core/testing';

import { HttpStudentExamHistoryService } from './http-student-exam-history.service';

describe('HttpStudentExamHistoryService', () => {
  let service: HttpStudentExamHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpStudentExamHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
