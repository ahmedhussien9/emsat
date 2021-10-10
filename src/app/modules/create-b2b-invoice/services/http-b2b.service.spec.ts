import { TestBed } from '@angular/core/testing';

import { HttpB2bService } from './http-b2b.service';

describe('HttpB2bService', () => {
  let service: HttpB2bService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpB2bService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
