import { Component, Input, OnInit } from '@angular/core';
import { COLORS, ICONS } from '../../constants';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss'],
})
export class CardIconComponent implements OnInit {
  @Input() items: any;
  @Input() hasIcons: boolean;
  COLORS = COLORS;
  icons = [
    ICONS.mosque,
    ICONS.under_construction,
    ICONS.ready_for_shopping,
    ICONS.location,
    ICONS.under_license,
  ];
  constructor() {}

  ngOnInit(): void {}
}
