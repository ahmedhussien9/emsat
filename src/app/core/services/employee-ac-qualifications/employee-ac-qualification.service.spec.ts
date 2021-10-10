import { TestBed } from '@angular/core/testing';

import { HttpEmployeeAcQualificationService } from './employee-ac-qualification.service';

describe('EmployeeAcQualificationService', () => {
  let service: HttpEmployeeAcQualificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpEmployeeAcQualificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
