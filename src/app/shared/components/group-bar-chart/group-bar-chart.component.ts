import { Component } from '@angular/core';

import { COLORS } from 'src/app/shared/constants';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-group-bar-chart',
  templateUrl: './group-bar-chart.component.html',
  styleUrls: ['./group-bar-chart.component.scss'],
})
export class GroupBarChartComponent {
  // ADD CHART OPTIONS.
  options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          distribution: 'series',
          stacked: false,
          ticks: {
            display: false,
          },
          gridLines: {
            display: true,
            color: '#fff',
          },
          scaleLabel: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          stacked: false,
          ticks: {
            display: false,
            beginAtZero: true,
            // fontColor: "#000", // y axes numbers color (can be hexadecimal too)
          },
          gridLines: {
            display: true,
            // borderDash: [8, 4],
            color: '#DDDCE1', // grid line color (can be removed or changed)
          },
        },
      ],
    },
  };
  labels = ['', '', ''];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'قطاعات',
      data: [21, 34, 15],
      barPercentage: 0.2,
      categoryPercentage: 0.5,
    },
    {
      label: 'إدارات',
      data: [21, 45, 40],
      barPercentage: 0.2,
      categoryPercentage: 0.5,
    },
    {
      label: 'أقسام',
      data: [10, 23, 14],
      barPercentage: 0.2,
      categoryPercentage: 0.5,
    },
  ];

  // CHART COLOR.
  colors = [
    {
      backgroundColor: COLORS.purple,
    },
    {
      backgroundColor: COLORS.orange,
    },
    {
      backgroundColor: COLORS.lighGray,
    },
  ];

  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }
}
