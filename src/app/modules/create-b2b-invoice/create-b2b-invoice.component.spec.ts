import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateB2bInvoiceComponent } from './create-b2b-invoice.component';

describe('CreateB2bInvoiceComponent', () => {
  let component: CreateB2bInvoiceComponent;
  let fixture: ComponentFixture<CreateB2bInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateB2bInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateB2bInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
