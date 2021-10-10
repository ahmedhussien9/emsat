import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {
  private baseUrl = environment.baseUrl;
  private token: string;
  public tokenSubjectSource = new BehaviorSubject<string>('');
  public tokenSubjectData = this.tokenSubjectSource.asObservable();
  public isLogoutSubject = new BehaviorSubject<boolean>(false);
  public isLogoutState = this.isLogoutSubject.asObservable();

  public isUserOperationSource = new BehaviorSubject<boolean>(false);
  public isUserOperationState = this.isUserOperationSource.asObservable();
  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private router: Router
  ) { }


  registerApi(body) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    return this.httpClient.post(`${this.baseUrl}register`, body, {
      observe: "response",
      headers: headers
    });
  }

  loginApi(body) {
    return this.httpClient.post(`${this.baseUrl}login`, body, {
      observe: "response"
    });
  }


  public saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubjectSource.next(token);
    this.token = token;
  }

  public saveUserName(name: string): void {
    localStorage.setItem('userName', name);
  }

  public getToken(): string {
    if (!this.token) {
      let token = localStorage.getItem('token') || null;
      this.token = token;
    }
    return this.token;
  }

  isLoggedIn() {
    this.tokenSubjectData.subscribe((data) => {
      return data;
    });
  }
  public saveUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
  }

  public getUserRole() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData['roles'][0];
  }

  public logOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }


  isAuthorized(allowedRoles: string[]): boolean {
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }
    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelperService.decodeToken(token);
    if (!decodeToken && token) {
      this.router.navigate(['/auth']);
      return false;
    }
    const roles = decodeToken['privileges'];
    const isFoundedRole = allowedRoles.some((al) => roles.includes(al));
    return isFoundedRole;
  }
}
