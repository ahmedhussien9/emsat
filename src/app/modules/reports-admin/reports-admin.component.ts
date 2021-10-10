import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'app-reports-admin',
  templateUrl: './reports-admin.component.html',
  styleUrls: ['./reports-admin.component.scss']
})
export class ReportsAdminComponent implements OnInit {
  @ViewChild('donut', { static: false }) donut: ElementRef;
  @ViewChild('mychart', { static: false }) mychart: ElementRef;
  @ViewChild('barChart', { static: false }) barChart: ElementRef;
  ngOnInit() {

  }
  constructor() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.renderDounts();
    this.renderLineChart();
    this.renderBarChart();
  }


  renderDounts() {
    let donutCtx = this.donut.nativeElement.getContext('2d');
    var data = {
      labels: [
        "Approved",
        "Not Approved",
        "pending approval"
      ],
      datasets: [
        {
          "data": [101342, 55342, 56600],   // Example data
          "backgroundColor": [
            "#fc5296",
            "#7f53ac"
          ]
        }]
    };
    var chart = new Chart(
      donutCtx,
      {
        "type": 'doughnut',

        "data": data,
        "options": {
          "cutoutPercentage": 50,
          legend: {
            labels: {
              fontFamily: '"Poppins", sans-serif',
            },
          },
          "animation": {
            "animateScale": true,
            "animateRotate": false
          }
        }
      }
    );
  }
  renderLineChart() {
    let lineCtx = this.mychart.nativeElement.getContext('2d');
    let myChart = new Chart(lineCtx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Total Candidates',
          backgroundColor: "rgba(255, 99, 132,0.4)",
          borderColor: "rgb(255, 99, 132)",
          fill: true,
          data: [
            { x: 1, y: 2 },
            { x: 2500, y: 2.5 },
            { x: 3000, y: 5 },
            { x: 3400, y: 4.75 },
            { x: 3600, y: 4.75 },
            { x: 5200, y: 6 },
            { x: 6000, y: 9 },
          ],
        }]
      },
      options: {
        responsive: true,
        legend: {
          labels: {
            fontFamily: '"Poppins", sans-serif',
          },
        },
        title: {
          display: true,
          text: 'Total Candidates'
        },
        scales: {
          xAxes: [{
            type: 'time',
            position: 'bottom',
            ticks: {
            },
            time: {
              parser: 'MMM-YY',
              unit: 'month',
              displayFormats: {
                month: 'MMM-YY'
              }
            },
            gridLines: {
              display: false
            },
            scaleLabel: {
              labelString: '',
              display: true,
            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
            },
            gridLines: {
              display: false
            },
            scaleLabel: {
              labelString: 'Höhe',
              display: true
            }
          }]
        }
      }
    });
  }

  renderBarChart() {
    let barCtx = this.barChart.nativeElement.getContext('2d');
    var data = {
      labels: ["Mit", "Mcit Center", "test", "British Traning Center", "Prime Educational Center"],

      datasets: [{
        label: "Exams Per Center ",
        backgroundColor: "#7f53ac",
        borderColor: "#7f53ac",
        borderWidth: 1,
        hoverBackgroundColor: "#7f53ac",
        hoverBorderColor: "#647dee",
        data: [65, 59, 90, 60, 80],
      }]
    };

    const options = {
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontFamily: '"Poppins", sans-serif',
        },
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          },
          gridLines: {
            display: false
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: false
          },
          gridLines: {
            display: false
          }
        }],
      }
    };


    let myChart = new Chart(barCtx, {
      type: 'bar',
      data: data,
      ...options,
    })
  }
}
