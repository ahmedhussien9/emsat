import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosquesCapacityProgressComponent } from './mosques-capacity-progress.component';

describe('MosquesCapacityProgressComponent', () => {
  let component: MosquesCapacityProgressComponent;
  let fixture: ComponentFixture<MosquesCapacityProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosquesCapacityProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosquesCapacityProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
