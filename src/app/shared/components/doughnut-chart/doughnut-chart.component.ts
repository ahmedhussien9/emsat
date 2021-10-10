import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit {
  @Input() img;
  @Input() hasDetails: boolean;
  doughnutChartLabels: Label[] = [
    '3,66M (12,69%)',
    '3,66M (12,69%)',
    '8,35M (28,99%)',
    '8,26M (28,66%)',
    '3,66M (12,69%)',
  ];
  doughnutChartData: MultiDataSet = [[20, 15, 20, 15, 30]];
  doughnutChartType: ChartType = 'doughnut';
  legend: boolean = false;
  colors = [
    {
      backgroundColor: ['#EE7E63', '#FFB85B', '#A0AAAF', '#7C386C', '#BE526E'],
    },
  ];
  options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
  };

  labels = [
    { title: 'موقعة', color: this.colors[0].backgroundColor[0] },
    { title: 'قيد التحضير', color: this.colors[0].backgroundColor[1] },
    { title: 'ملغاة', color: this.colors[0].backgroundColor[2] },
    { title: 'جديد', color: this.colors[0].backgroundColor[3] },
    { title: 'منجز', color: this.colors[0].backgroundColor[4] },
  ];

  chartDetailsTitle = 'حالة الوثائق';
  constructor() {}

  ngOnInit(): void {}
}
