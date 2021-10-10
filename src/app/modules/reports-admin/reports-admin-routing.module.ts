import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsAdminComponent } from './reports-admin.component';

const routes: Routes = [
  {
    path: "",
    component: ReportsAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
