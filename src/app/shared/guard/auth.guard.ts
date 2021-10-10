import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private toaster: ToastrService, private router: Router) {}

  handleGuard() {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const allowedRoles = next.data.allowedRoles;
    // const isAuthorized = this.httpAuthService.isAuthorized(allowedRoles);
    const isAuthorized = true;

    if (!isAuthorized || !this.handleGuard()) {
      localStorage.removeItem('token');
      this.router.navigate(['/auth/login']).then(() => {
        this.toaster.error('Sorry you have no access!!!!!');
        window.location.reload();
        return false;
      });
    }

    return isAuthorized;
  }
}
