import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubCriteriaComponent } from './add-sub-criteria.component';

describe('AddSubCriteriaComponent', () => {
  let component: AddSubCriteriaComponent;
  let fixture: ComponentFixture<AddSubCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
