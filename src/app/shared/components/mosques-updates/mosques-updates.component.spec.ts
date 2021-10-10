import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosquesUpdatesComponent } from './mosques-updates.component';

describe('MosquesUpdatesComponent', () => {
  let component: MosquesUpdatesComponent;
  let fixture: ComponentFixture<MosquesUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosquesUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosquesUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
