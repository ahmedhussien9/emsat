import { Component } from '@angular/core';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Awqaf Portal';

  constructor(private languageService: LanguageService) {
    const lang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') === 'en' ? 'en' : 'ar';
    this.languageService.changeAppLanguage('en');
  }
}
