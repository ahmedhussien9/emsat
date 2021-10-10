import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { AngularOtpLibModule } from 'angular-otp-box';
import { RegisterCenterComponent } from './register-center/register-center.component';
import { MatSelectModule } from '@angular/material/select';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, VerificationCodeComponent, RegisterCenterComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, AngularOtpLibModule, SelectDropDownModule, 
    AgmCoreModule.forRoot({
      apiKey: "",
      libraries: ['places', 'drawing', 'geometry']
    }),

  ],
})
export class AuthModule { }
