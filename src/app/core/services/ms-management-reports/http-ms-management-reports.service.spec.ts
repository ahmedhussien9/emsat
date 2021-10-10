import { TestBed } from '@angular/core/testing';

import { HttpMsManagementReportsService } from './http-ms-management-reports.service';

describe('HttpMsManagementReportsService', () => {
  let service: HttpMsManagementReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMsManagementReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
