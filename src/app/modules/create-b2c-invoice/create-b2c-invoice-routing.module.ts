import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateB2cInvoiceComponent } from './create-b2c-invoice.component';

const routes: Routes = [
  {
    path: "",
    component: CreateB2cInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateB2cInvoiceRoutingModule { }
