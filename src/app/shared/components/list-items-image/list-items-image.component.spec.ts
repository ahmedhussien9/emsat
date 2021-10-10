import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsImageComponent } from './list-items-image.component';

describe('ListItemsImageComponent', () => {
  let component: ListItemsImageComponent;
  let fixture: ComponentFixture<ListItemsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemsImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
