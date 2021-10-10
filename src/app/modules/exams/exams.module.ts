import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsComponent } from './exams.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ExamsComponent
  ],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    SharedModule
  ]
})
export class ExamsModule { }
