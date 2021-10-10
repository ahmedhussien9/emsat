import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateB2cInvoiceRoutingModule } from './create-b2c-invoice-routing.module';
import { CreateB2cInvoiceComponent } from './create-b2c-invoice.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateB2cInvoiceComponent
  ],
  imports: [
    CommonModule,
    CreateB2cInvoiceRoutingModule,
    SharedModule
  ]
})
export class CreateB2cInvoiceModule { }
