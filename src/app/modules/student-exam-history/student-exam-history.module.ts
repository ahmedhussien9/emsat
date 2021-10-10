import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentExamHistoryRoutingModule } from './student-exam-history-routing.module';
import { StudentExamHistoryComponent } from './student-exam-history.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StudentExamHistoryComponent
  ],
  imports: [
    CommonModule,
    StudentExamHistoryRoutingModule,
    SharedModule
  ]
})
export class StudentExamHistoryModule { }
