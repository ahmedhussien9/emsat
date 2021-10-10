import { Component, Input, OnInit } from '@angular/core';
import { COLORS } from '../../constants';

@Component({
  selector: 'app-card-icon-list',
  templateUrl: './card-icon-list.component.html',
  styleUrls: ['./card-icon-list.component.scss'],
})
export class CardIconListComponent implements OnInit {
  COLORS = COLORS;
  @Input() items: any;
  reports = [
    {
      id: 1,
      icon: 'fas fa-mosque',
      name: 'BUILD',
      number: 45000,
      color: COLORS.purple,
    },
    {
      id: 2,
      icon: 'fas fa-paint-roller',
      name: 'UNDER_CONSTRUCTION',
      number: 1095,
      color: COLORS.lightRed,
    },
    {
      id: 3,
      icon: 'fas fa-paint-roller',
      name: 'READ_SHOPPING',
      number: 1095,
      color: COLORS.orange,
    },
    {
      id: 4,
      icon: 'fas fa-book-reader',
      name: 'LAND',
      number: 622,
      color: COLORS.yellow,
    },
    {
      id: 5,
      icon: 'fas fa-book-reader',
      name: 'UNDER_LICENSE',
      number: 622,
      color: COLORS.mdGray,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
