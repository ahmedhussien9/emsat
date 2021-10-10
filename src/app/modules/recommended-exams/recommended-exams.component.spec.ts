import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedExamsComponent } from './recommended-exams.component';

describe('RecommendedExamsComponent', () => {
  let component: RecommendedExamsComponent;
  let fixture: ComponentFixture<RecommendedExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
