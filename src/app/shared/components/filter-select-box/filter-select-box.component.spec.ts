import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSelectBoxComponent } from './filter-select-box.component';

describe('FilterSelectBoxComponent', () => {
  let component: FilterSelectBoxComponent;
  let fixture: ComponentFixture<FilterSelectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSelectBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
