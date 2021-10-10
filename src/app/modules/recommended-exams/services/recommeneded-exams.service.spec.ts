import { TestBed } from '@angular/core/testing';

import { HttpRecommenededExamsService } from './recommeneded-exams.service';

describe('RecommenededExamsService', () => {
  let service: HttpRecommenededExamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRecommenededExamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
