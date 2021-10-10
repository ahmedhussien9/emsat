import { TestBed } from '@angular/core/testing';

import { HttpCenterService } from './http-center.service';

describe('HttpCenterService', () => {
  let service: HttpCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
