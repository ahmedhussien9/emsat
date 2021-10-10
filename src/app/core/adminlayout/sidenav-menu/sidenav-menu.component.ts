import { Component, OnInit } from '@angular/core';
import {
  animateText,
  onSideNavChange,
} from 'src/app/shared/animations/sidenav.animations';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss'],
  animations: [onSideNavChange, animateText],
})
export class SidenavMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
