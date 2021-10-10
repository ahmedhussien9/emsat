import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./../login/login.component.scss','./verification-code.component.scss'],
})
export class VerificationCodeComponent implements OnInit {
  showPassword = false;
  formGroup: FormGroup;
  lang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");
  bgPhoto = `./assets/images/LoginImage${this.lang === "en" ? "" : "-ar"}.png`;

  public settings = {
    length: 4,
    numbersOnly: true,
    timer: 120,
    timerType: 1
  }
  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formGroup = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  goBack() { }

  showPasswordHandler() {
    this.showPassword = !this.showPassword;
  }

  submit() { };


  switchLang(): void {
    const language = this.languageService.getCurrentLanguage();
    if (language === 'en') {
      this.languageService.changeAppLanguage('ar');
      this.languageService.languageSubject.next('ar');
      this.reload();
    } else {
      this.languageService.changeAppLanguage('en');
      this.languageService.languageSubject.next('en');
      this.reload();
    }
  }

  reload(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url], {
      relativeTo: this.route,
    });
  }

  public onInputChange(e) {
    console.log(e);
    if (e.length == this.settings.length) {
      // e will emit values entered as otp and,
      console.log('otp is', e);
    } else if (e == -1) {
      // if e == -1, timer has stopped
      console.log(e, 'resend button enables');
    } else if (e == -2) {
      // e == -2, button click handle
      console.log('resend otp');
    }
  }
}
