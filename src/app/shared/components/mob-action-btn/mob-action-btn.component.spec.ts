import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobActionBtnComponent } from './mob-action-btn.component';

describe('MobActionBtnComponent', () => {
  let component: MobActionBtnComponent;
  let fixture: ComponentFixture<MobActionBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobActionBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobActionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
