import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicePreviewComponent } from './invoice-preview.component';

const routes: Routes = [
  {
    path: '',
    component: InvoicePreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicePreviewRoutingModule { }
