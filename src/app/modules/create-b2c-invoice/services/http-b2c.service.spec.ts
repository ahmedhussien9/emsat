import { TestBed } from '@angular/core/testing';

import { HttpB2cService } from './http-b2c.service';

describe('HttpB2cService', () => {
  let service: HttpB2cService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpB2cService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
