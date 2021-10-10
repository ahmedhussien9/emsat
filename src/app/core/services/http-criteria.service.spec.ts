import { TestBed } from '@angular/core/testing';

import { HttpCriteriaService } from './http-criteria.service';

describe('HttpCriteriaService', () => {
  let service: HttpCriteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCriteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
