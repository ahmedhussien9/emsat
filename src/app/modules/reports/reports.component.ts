import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  adminRole = JSON.parse(localStorage.getItem("userData")).roles[0];
  show = false;
  @ViewChild('donut', { static: false }) donut: ElementRef;
  @ViewChild('mychart', { static: false }) mychart: ElementRef;
  @ViewChild('barChart', { static: false }) barChart: ElementRef;
  ngOnInit() {

  }
  constructor() {
    if (this.adminRole === "admin") {
      this.show = true;
      console.log("hey")
    }
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
        "Value A",
        "Value B"
      ],
      datasets: [
        {
          "data": [101342, 55342],   // Example data
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
          label: 'Höhenlinie',
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
          text: 'Höhenlinie'
        },
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            ticks: {
            },
            gridLines: {
              display: false
            },
            scaleLabel: {
              labelString: 'Länge',
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
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

      datasets: [{
        label: "Dataset #1",
        backgroundColor: "#7f53ac",
        borderColor: "#7f53ac",
        borderWidth: 1,
        hoverBackgroundColor: "#7f53ac",
        hoverBorderColor: "#647dee",
        data: [65, 59, 50, 81, 56, 55, 80],
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
