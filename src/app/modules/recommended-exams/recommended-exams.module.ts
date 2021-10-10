import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendedExamsRoutingModule } from './recommended-exams-routing.module';
import { RecommendedExamsComponent } from './recommended-exams.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplyExamDialogComponent } from './components/apply-exam-dialog/apply-exam-dialog.component';


@NgModule({
  declarations: [
    RecommendedExamsComponent,
    ApplyExamDialogComponent
  ],
  imports: [
    CommonModule,
    RecommendedExamsRoutingModule,
    SharedModule
  ]
})
export class RecommendedExamsModule { }
