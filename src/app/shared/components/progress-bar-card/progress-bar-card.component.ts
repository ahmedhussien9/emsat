import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-card',
  templateUrl: './progress-bar-card.component.html',
  styleUrls: ['./progress-bar-card.component.scss']
})
export class ProgressBarCardComponent implements OnInit {
  lang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");
  @Input() progressData: any;
  selectedProgress: any;
  selectedProgressColor: string;
  color = []
  constructor() { }

  ngOnInit(): void {
  }

  onSelectProgressBar(progress) {
    console.log(progress)
    this.selectedProgress = progress;
  }

}
