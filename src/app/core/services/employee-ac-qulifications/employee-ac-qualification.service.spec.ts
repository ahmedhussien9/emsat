import { TestBed } from '@angular/core/testing';

import { EmployeeAcQualificationService } from './employee-ac-qualification.service';

describe('EmployeeAcQualificationService', () => {
  let service: EmployeeAcQualificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAcQualificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
