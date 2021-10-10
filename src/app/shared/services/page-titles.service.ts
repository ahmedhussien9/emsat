import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private language: string = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
  readonly pages = [
    {
      id: 1,
      title: 'Dashboard',
      value: {
        en: 'Dashboard',
        ar: 'Dashboard',
      },
    },
  ];
  constuctor() {}

  renderPageTitle(pageTitle) {
    const page = this.pages.find((page) => page.title === pageTitle);
    const AWQAF = this.language === 'en' ? 'AWQAF' : 'AWQAF';
    const title = page.value[this.language];
    return `${title} | ${AWQAF}`;
  }
}
