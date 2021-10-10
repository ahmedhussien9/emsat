import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIconListComponent } from './card-icon-list.component';

describe('CardIconListComponent', () => {
  let component: CardIconListComponent;
  let fixture: ComponentFixture<CardIconListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIconListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
