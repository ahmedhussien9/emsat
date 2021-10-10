import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from 'src/app/shared/services/errorHandling.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { HttpAuthService } from '../auth/services/http-auth.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(
    private errorHandlingService: ErrorDialogService,
    private toaster: ToastrService,
    private authService: HttpAuthService
  ) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let ignore =
      typeof request.body === 'undefined' ||
      request.body === null ||
      request.body.toString() === '[object FormData]' || // <-- This solves your problem
      request.headers.has('Content-Type');
    if (!window.navigator.onLine) {
      this.toaster.error('Please Check Your Internet Connection !!');
      return;
    }
    if (ignore && this.authService.getToken()) {
      request = request.clone({
        setHeaders: {
          'Accept-Language': localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE'),
          'Authorization': `${this.authService.getToken()}`,
        },
      });
    }
    if (!ignore && this.authService.getToken()) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept-Language': localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE'),
          'Authorization': `${this.authService.getToken()}`,
        },
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log(event)
          if (
            event &&
            event.body &&
            event.body.response &&
            event.body.response.errorCode === 2150
          ) {
            this.authService.logOut();
            return;
          }
          if (event.body.message == 'Error: Unauthorized') {
            this.authService.logOut();
            return;
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason:
            error && error.error && error.error.message
              ? error.error.message
              : 'Server unreachable',
          status: error.status,
        };
        this.errorHandlingService.openDialog(data);
        return throwError(error);
      })
    );
  }
}
