import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicePreviewRoutingModule } from './invoice-preview-routing.module';
import { InvoicePreviewComponent } from './invoice-preview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SafePipeModule } from 'safe-pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    InvoicePreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SafePipeModule,
    PdfViewerModule,
    InvoicePreviewRoutingModule
  ]
})
export class InvoicePreviewModule { }
