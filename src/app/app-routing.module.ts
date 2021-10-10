import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './core/adminlayout/adminlayout.component';
import { IReportsResolverService } from './core/resolvers/ms-management-reports.resolver';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dash',
    component: AdminlayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "testers",
        loadChildren: () => import("./modules/students/students.module").then((m) => m.StudentsModule),
        data: {
          allowedRoles: ['STUDENT_LIST'],
        },
        canActivate: [AuthGuard],
      },
      {
        path: "centers",
        loadChildren: () => import("./modules/centers/centers.module").then((m) => m.CentersModule),
        data: {
          allowedRoles: ['CENTERS_LIST'],
        },
        canActivate: [AuthGuard],
      },

      {
        path: "create-exam",
        loadChildren: () => import("./modules/create-exam/create-exam.module").then((m) => m.CreateExamModule),
        data: {
          allowedRoles: ['CREATE_EXAM'],
        },
        canActivate: [AuthGuard],
      },
      {
        path: "criteria",
        loadChildren: () => import("./modules/criteria/criteria.module").then((m) => m.CriteriaModule),
        data: {
          allowedRoles: ['CRITERIA'],
        },
        canActivate: [AuthGuard],

      },
      {
        path: "exams",
        loadChildren: () => import("./modules/exams/exams.module").then((m) => m.ExamsModule),
        data: {
          allowedRoles: ['EXAMS'],
        },
        canActivate: [AuthGuard],
      },
      {
        path: "recommended-exams",
        loadChildren: () => import("./modules/recommended-exams/recommended-exams.module").then((m) => m.RecommendedExamsModule),
        data: {
          allowedRoles: ['RECOMMENDED_EXAMS'],
        },
        canActivate: [AuthGuard],
      },
      {
        path: "centers-exam-applicants",
        loadChildren: () => import("./modules/centers-exam-applicants/centers-exam-applicants.module").then((m) => m.CentersExamApplicantsModule),
        data: {
          allowedRoles: ['EXAM_APPLICANTS'],
        },
        canActivate: [AuthGuard],
      },
      {
        path: "student-exam-history",
        loadChildren: () => import("./modules/student-exam-history/student-exam-history.module").then((m) => m.StudentExamHistoryModule),
        data: {
          allowedRoles: ['EXAM_HISTORY'],
        },
        canActivate: [AuthGuard],
      },
      {
        path: "home",
        loadChildren: () => import("./modules/reports/reports-routing.module").then(
          (m) => m.ReportsRoutingModule
        ),
        canActivate: [AuthGuard],
      },
      {
        path: "home-reports",
        loadChildren: () => import("./modules/reports-admin/reports-admin.module").then(
          (m) => m.ReportsAdminModule
        ),
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix',
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import("./modules/home/home.module").then((m) => m.HomeModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

