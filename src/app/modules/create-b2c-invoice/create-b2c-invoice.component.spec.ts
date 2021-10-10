import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateB2cInvoiceComponent } from './create-b2c-invoice.component';

describe('CreateB2cInvoiceComponent', () => {
  let component: CreateB2cInvoiceComponent;
  let fixture: ComponentFixture<CreateB2cInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateB2cInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateB2cInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
