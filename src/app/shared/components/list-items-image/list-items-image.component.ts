import { Component, Input, OnInit } from '@angular/core';
import { fadeInArray } from '../../animations/fade-in-array.animation';
import { EmployeeByEducationCategory } from '../../models/Ireports.model';

export interface Data {
  title: {
    en: string;
    ar: string;
  };
  value: string;
}
@Component({
  selector: 'app-list-items-image',
  templateUrl: './list-items-image.component.html',
  styleUrls: ['./list-items-image.component.scss'],
  animations: [
    fadeInArray
  ]
})
export class ListItemsImageComponent implements OnInit {
  @Input() image: string;
  @Input() isBorder = false;
  @Input() title: string;
  @Input() data: EmployeeByEducationCategory[];
  @Input() isBoxShadow: boolean;
  @Input() masjedStatsticsTypes: boolean;
  constructor() { }

  ngOnInit(): void { }

  ConvertString(value) {
    return parseFloat(value)
  }
}
