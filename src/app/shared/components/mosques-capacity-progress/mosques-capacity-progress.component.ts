import { Component, Input, OnInit } from '@angular/core';
import { COLORS } from 'src/app/shared/constants';
import { fadeInArray } from '../../animations/fade-in-array.animation';

@Component({
  selector: 'app-mosques-capacity-progress',
  templateUrl: './mosques-capacity-progress.component.html',
  styleUrls: ['./mosques-capacity-progress.component.scss'],
  animations: [
    fadeInArray
  ]
})
export class MosquesCapacityProgressComponent implements OnInit {
  @Input() progressData: any;
  @Input() image: string;
  @Input() customStyle: any;
  lang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
  selectedProgress: any;
  selectedProgressColor: string;
  colors = [
    COLORS.purple,
    COLORS.lightRed,
    COLORS.orange,
    COLORS.yellow,
    COLORS.greenColor,
    COLORS.darkGray,
  ];
  selectedIndex: number = 0;
  color = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.progressData);
  }

  onSelectProgressBar(progress, i) {
    this.selectedIndex = i;
    this.selectedProgress = progress;
  }
}
