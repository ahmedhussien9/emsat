import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentExamHistoryComponent } from './student-exam-history.component';

const routes: Routes = [
  {
    path: "",
    component: StudentExamHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentExamHistoryRoutingModule { }
