import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateB2bInvoiceComponent } from './create-b2b-invoice.component';

const routes: Routes = [
  {
    path: "",
    component: CreateB2bInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateB2bInvoiceRoutingModule { }
