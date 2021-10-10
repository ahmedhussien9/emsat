import { Direction } from '@angular/cdk/bidi';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { onMainContentChange } from 'src/app/shared/animations/sidenav.animations';
import { ICONS } from 'src/app/shared/constants';
import { LanguageService } from 'src/app/shared/services/language.service';
import {
  NavItem,
  SidebarService,
} from 'src/app/shared/services/sidebar.service';
import { FilterSidenavAction } from '../actions/layout/filterSidenav.actions';
import {
  CloseFilterSidenavAction,
  CloseSidenavAction,
  OpenSidenavAction,
} from '../actions/layout/layout.actions';
import { HttpAuthService } from '../auth/services/http-auth.service';
import { LayoutState, SideNavModel } from '../states/layout.state';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.scss'],
  animations: [onMainContentChange],
})
export class AdminlayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidebarStatus: string = 'side';
  position: string;
  lang: string;
  links: NavItem[];
  subLinksIcon: string;
  dir: 'rtl' | 'ltr';
  name = JSON.parse(localStorage.getItem("userData")).name;
  @Select(LayoutState.getSidebarState) sideNavbar$: Observable<SideNavModel>;
  @ViewChild("menu", { static: false }) menuElRef: ElementRef;
  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly sidebarservice: SidebarService,
    private readonly languageService: LanguageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private store: Store,
    private render: Renderer2,
    private authService: HttpAuthService
  ) { }

  ngOnInit() {
    this.links = this.sidebarservice.navItems;
    this.checkMediaQuery();
    this.position =
      this.languageService.getCurrentLanguage() === 'en' ? 'start' : 'end';
    this.lang =
      this.languageService.getCurrentLanguage() === 'en' ? 'عربى' : 'English';
    this.subLinksIcon =
      this.languageService.getCurrentLanguage() === 'en'
        ? ICONS.chevronRight
        : ICONS.chevronLeft;

    this.expandCurrentChildLink();
  }

  logout() {
    this.authService.logOut();
  }

  expandChildLink(index, link): void {
    console.log(index);
    this.links[index].isExpand = !this.links[index].isExpand;
    if (link.route) {
      this.router.navigate([link.route]);
    }
  }

  settings() {
    console.log(this.menuElRef.nativeElement);
    this.render.addClass(this.menuElRef.nativeElement, 'open')
  }

  expandCurrentChildLink(): void {
    this.links
      .map((link) => link.children)
      .forEach((subLinks, index) => {
        if (subLinks) {
          subLinks.forEach((subLink) => {
            if (`/dash/${subLink.route}` === this.router.url) {
              this.links[index].isExpand = true;
              return;
            }
          });
        }
      });
  }

  close() {
    this.store.dispatch(new CloseSidenavAction());
  }

  open() {
    this.store.dispatch(new CloseFilterSidenavAction());
    this.store.dispatch(new OpenSidenavAction());
  }

  switchLang(): void {
    const language = this.languageService.getCurrentLanguage();
    if (language === 'en') {
      this.position = 'end';
      this.dir = 'rtl';
      this.languageService.changeAppLanguage('ar');
      this.languageService.languageSubject.next('ar');
      this.reload();
    } else {
      this.position = 'start';
      this.dir = 'ltr';
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

  checkMediaQuery(): void {
    this.breakpointObserver
      .observe(['(max-width: 1300px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.close();
        } else {
          this.open();
        }
      });
  }
}
