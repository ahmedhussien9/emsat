import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubCriteriaComponent } from './edit-sub-criteria.component';

describe('EditSubCriteriaComponent', () => {
  let component: EditSubCriteriaComponent;
  let fixture: ComponentFixture<EditSubCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
