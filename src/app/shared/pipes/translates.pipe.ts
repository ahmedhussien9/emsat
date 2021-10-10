import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translates',
  pure: true,
})
export class TranslatePipe implements PipeTransform {
  constructor() {}
  transform(translation: any): string {
    const currentLanaguage = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
    return translation.nameDictionary[currentLanaguage];
  }
}
