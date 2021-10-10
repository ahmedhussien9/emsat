import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { LanguageService } from 'src/app/shared/services/language.service';
import { HttpAuthService } from '../services/http-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showPassword = false;
  formGroup: FormGroup;
  lang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");
  bgPhoto = `./assets/images/banner.png`;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpAuthService: HttpAuthService,
    private toastr: ToastrService
  ) {
    this.formGroup = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  showPasswordHandler() {
    this.showPassword = !this.showPassword;
  }

  submit() {
    this.loading = true;
    if (this.formGroup.invalid) {
      this.loading = false;
      this.toastr.error("Please enter the required information");
      return;
    }

    this.httpAuthService.loginApi(this.formGroup.value).pipe(
      finalize(() => this.loading = false)
    ).subscribe(data => {

      this.httpAuthService.saveToken(data.body['token']);
      this.httpAuthService.saveUserData(data.body);

      if (data.body['roles'][0] === "admin") {
        this.router.navigate(['/dash/home-reports']);
        return;
      }
      this.router.navigate(['/dash']);
    }, err => {
      this.toastr.error(err.error.message);
    })
  };

}
