import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoicesComponent } from './invoices.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
@NgModule({
  declarations: [InvoicesComponent],
  imports: [CommonModule, InvoicesRoutingModule, SharedModule, NgxDaterangepickerMd.forRoot()
  ],
})
export class InvoicesModule { }
