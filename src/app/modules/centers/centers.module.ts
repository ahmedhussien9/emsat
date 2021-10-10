import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentersRoutingModule } from './centers-routing.module';
import { CentersComponent } from './centers.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CentersComponent
  ],
  imports: [
    CommonModule,
    CentersRoutingModule,
    SharedModule
  ]
})
export class CentersModule { }
