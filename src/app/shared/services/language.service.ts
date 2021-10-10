import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  lastLocale: string;
  languageSubject = new Subject();
  constructor(private translateService: TranslateService) { }

  changeAppLanguage(local: string): void {
    this.lastLocale = local;
    this.translateService.use(local);
    localStorage.setItem('LOCALIZE_DEFAULT_LANGUAGE', local);
    this.changeAppDirection(local);
  }

  changeAppDirection(local: string): void {
    return local !== 'ar'
      ? document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')
      : document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
  }

  changeHtmlLang(local: string): void {
    return local !== 'ar'
      ? document.getElementsByTagName('html')[0].setAttribute('lang', 'en')
      : document.getElementsByTagName('html')[0].setAttribute('lang', 'ar');
  }

  getCurrentLanguage(): string {
    return localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
  }
}
