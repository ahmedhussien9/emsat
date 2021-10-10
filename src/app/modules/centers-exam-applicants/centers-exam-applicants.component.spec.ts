import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersExamApplicantsComponent } from './centers-exam-applicants.component';

describe('CentersExamApplicantsComponent', () => {
  let component: CentersExamApplicantsComponent;
  let fixture: ComponentFixture<CentersExamApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentersExamApplicantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersExamApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
