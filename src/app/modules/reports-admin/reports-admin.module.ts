import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';

import { ReportsRoutingModule } from './reports-admin-routing.module';
import { ReportsAdminComponent } from './reports-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ReportsAdminComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    ChartsModule,
    MomentModule
  ],
  exports: []
})
export class ReportsAdminModule { }
