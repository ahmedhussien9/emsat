import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalListCardComponent } from './vertical-list-card.component';

describe('VerticalListCardComponent', () => {
  let component: VerticalListCardComponent;
  let fixture: ComponentFixture<VerticalListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
