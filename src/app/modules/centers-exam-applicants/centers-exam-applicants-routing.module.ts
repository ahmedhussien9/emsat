import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentersExamApplicantsComponent } from './centers-exam-applicants.component';

const routes: Routes = [
  {
    path: "",
    component: CentersExamApplicantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentersExamApplicantsRoutingModule { }
