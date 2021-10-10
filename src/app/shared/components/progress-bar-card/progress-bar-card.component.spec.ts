import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarCardComponent } from './progress-bar-card.component';

describe('ProgressBarCardComponent', () => {
  let component: ProgressBarCardComponent;
  let fixture: ComponentFixture<ProgressBarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
