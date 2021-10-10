import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamHistoryComponent } from './student-exam-history.component';

describe('StudentExamHistoryComponent', () => {
  let component: StudentExamHistoryComponent;
  let fixture: ComponentFixture<StudentExamHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExamHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExamHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
