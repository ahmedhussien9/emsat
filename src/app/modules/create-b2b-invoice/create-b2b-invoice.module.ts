import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateB2bInvoiceRoutingModule } from './create-b2b-invoice-routing.module';
import { CreateB2bInvoiceComponent } from './create-b2b-invoice.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateB2bInvoiceComponent
  ],
  imports: [
    CommonModule,
    CreateB2bInvoiceRoutingModule,
    SharedModule
  ]
})
export class CreateB2bInvoiceModule { }
