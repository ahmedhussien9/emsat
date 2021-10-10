import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ICONS } from '../constants';

export interface NavItem {
  icon?: string;
  route?: string;
  nameDictionary: {
    ar: string;
    en: string;
  };
  children?: NavItem[];
  isExpand?: boolean;
  roles: string[]
}

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isFilterOpen = new Subject();

  navItems: NavItem[] = [
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'المختبرين',
        en: 'Home',
      },
      route: "dash/home-reports",
      roles: ['CREATE_EXAM'],
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'المختبرين',
        en: 'Home',
      },
      route: "dash/home",
      roles: ['EXAM_HISTORY', 'EXAM_APPLICANTS'],
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'المختبرين',
        en: 'Students List',
      },
      route: "dash/testers",
      roles: ['STUDENT_LIST'],
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'المختبرين',
        en: 'Centers List',
      },
      route: "dash/centers",
      roles: ['CENTERS_LIST'],
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'إنشاء أمتحان',
        en: 'Create Exam',
      },
      route: "dash/create-exam",
      roles: ['CREATE_EXAM'],
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'المعايير',
        en: 'criteria',
      },
      route: "dash/criteria",
      roles: ['CRITERIA'],
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'الاختبارات',
        en: 'Exams',
      },
      route: "dash/exams",
      roles: ['EXAMS'],
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'الاختبارات',
        en: 'Recommended exams',
      },
      route: "dash/recommended-exams",
      roles: ['RECOMMENDED_EXAMS'],
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'الاختبارات',
        en: 'Student Exam History',
      },
      route: "dash/student-exam-history",
      roles: ['EXAM_HISTORY'],
    },
    {
      icon: ICONS.contract,
      nameDictionary: {
        ar: 'الاختبارات',
        en: 'Center exams applicants',
      },
      route: "dash/centers-exam-applicants",
      roles: ['EXAM_APPLICANTS'],
    },
  ];

  constructor() { }
}
