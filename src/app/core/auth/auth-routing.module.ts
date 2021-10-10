import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterCenterComponent } from './register-center/register-center.component';
import { RegisterComponent } from './register/register.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "register-tester",
    component: RegisterComponent
  },
  {
    path: "register-center",
    component: RegisterCenterComponent
  },
  {
    path: "mobile-verification",
    component: VerificationCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
