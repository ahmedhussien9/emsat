import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { TranslateModule } from '@ngx-translate/core';
import { SidenavMenuComponent } from './adminlayout/sidenav-menu/sidenav-menu.component';
import { MyHttpInterceptor } from './interceptor/my-http-interceptor';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    TranslateModule,
  ],
  declarations: [AdminlayoutComponent, SidenavMenuComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
  },
  ],
  exports: [RouterModule, SharedModule, HttpClientModule],
})
export class CoreModule {}
