import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentersExamApplicantsRoutingModule } from './centers-exam-applicants-routing.module';
import { CentersExamApplicantsComponent } from './centers-exam-applicants.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CentersExamApplicantsComponent
  ],
  imports: [
    CommonModule,
    CentersExamApplicantsRoutingModule, 
    SharedModule
  ]
})
export class CentersExamApplicantsModule { }
