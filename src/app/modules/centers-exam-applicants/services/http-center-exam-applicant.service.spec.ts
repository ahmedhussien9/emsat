import { TestBed } from '@angular/core/testing';

import { HttpCenterExamApplicantService } from './http-center-exam-applicant.service';

describe('HttpCenterExamApplicantService', () => {
  let service: HttpCenterExamApplicantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCenterExamApplicantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
