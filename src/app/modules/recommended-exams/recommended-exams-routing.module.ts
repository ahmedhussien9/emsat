import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendedExamsComponent } from './recommended-exams.component';

const routes: Routes = [
  {
    path: "",
    component: RecommendedExamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendedExamsRoutingModule { }
