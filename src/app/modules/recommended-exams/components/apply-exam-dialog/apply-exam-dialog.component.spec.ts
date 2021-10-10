import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyExamDialogComponent } from './apply-exam-dialog.component';

describe('ApplyExamDialogComponent', () => {
  let component: ApplyExamDialogComponent;
  let fixture: ComponentFixture<ApplyExamDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyExamDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyExamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
