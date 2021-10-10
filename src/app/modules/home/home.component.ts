import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Location } from "@angular/common";
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger("scrollAnimation", [
      state(
        "show",
        style({
          opacity: 1,
          transform: "translateX(0)"
        })
      ),
      state(
        "hide",
        style({
          opacity: 0,
          transform: "translateX(-100%)"
        })
      ),
      transition("show => hide", animate("700ms ease-out")),
      transition("hide => show", animate("700ms ease-in"))
    ])
  ]
})

export class HomeComponent implements OnInit {

  title = "clipper-portal";
  state = "hide";

  sectionsStatus = {
    first: false,
    second: false,
    third: false,
    four: false
  };

  clientAppPosition: any;
  @ViewChild("clientApp") clientApp: ElementRef;
  stateLeftAndRight = "hide";

  ngOnInit() {
    window.scroll(0, 0);
  }
  constructor(private location: Location, public el: ElementRef) { }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  ngAfterViewInit() {
    this.clientAppPosition = this.clientApp.nativeElement.offsetTop;
  }
  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= componentPosition) {
      this.state = "show";
      this.stateLeftAndRight = "show";
    } else {
      this.state = "hide";
      this.stateLeftAndRight = "hide";
    }
  }
}
