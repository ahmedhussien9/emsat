import { TestBed } from '@angular/core/testing';

import { HttpTesterService } from './http-tester.service';

describe('HttpTesterService', () => {
  let service: HttpTesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
