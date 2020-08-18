import { Component, OnInit } from '@angular/core';
import {Chart} from "chart.js";
var ChartAnnotation = require('chartjs-plugin-annotation');


@Component({
  selector: 'app-distance-matrix',
  templateUrl: './distance-matrix.component.html',
  styleUrls: ['./distance-matrix.component.css']
})
export class DistanceMatrixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {
    let canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('distance-matrix');
    let ctx = canvas.getContext('2d');


    let chartType = "scatter";

    let colorOfPoints = 'rgb(100,149,237)';
    let chartData = {
      labels: ['BMP0', 'BMP1', 'BMP2', 'BMP3', 'BMP4', 'BMP15'],
      datasets: [
        {
          label: 'Business-Model-Pattern',
          pointRadius: 10,
          pointHoverRadius: 15,
          pointHitRadius: 10,
          pointBackgroundColor: colorOfPoints,
          pointBorderColor: colorOfPoints,
          pointStyle: 'circle',
          backgroundColor: colorOfPoints,
          data: [
            {
              x: 10,
              y: 0
            },
            {
              x: 0,
              y: 10
            },
            {
              x: 10,
              y: 5
            },
            {
              x: 5,
              y: 5
            },
            {
              x: 3,
              y: 4
            },
            {
              x: 4,
              y: 3
            },
          ]
        }
      ]
    }


    let chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: 
          [
            {
              gridLines: {
                  display: true,
              },
              scaleLabel: {
                display: true,
                labelString: 'Euclidean distance: Business-Model-Canvas'
              }
            }
          ],
        yAxes: 
          [
            {
              gridLines: {
                display: true,
              },
              scaleLabel: {
                display: true,
                labelString: 'Euclidean distance: Strategy'
              }
            }
          ]
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
            fontColor: 'rgb(0,0,0)'
        }
      },
      layout: {
        padding: {
          top: 20,
          right: 20,
          bottom: 0
        },
      },
      tooltips: {
        callbacks: {
           label: function(tooltipItem, data) {
              var label = data.labels[tooltipItem.index];
              return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
           }
        }
    },
    annotation: {
        annotations: [
              {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x-axis-1',
                value: 3.5,
                borderColor: "rgba(60,60,200,0.25)",
                borderWidth: 2,
            },
            {
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y-axis-1',
              value: 3.5,
              borderColor: "rgba(60,60,200,0.25)",
              borderWidth: 2,
          },
          {
            type: "box",
            drawTime: "beforeDatasetsDraw",
            id: 'a-box-1',
            xScaleID: 'x-axis-1',
            yScaleID: 'y-axis-1',
            xMin: 0,
            xMax: 2,
            yMax: 2,
            yMin:  0,
            borderColor: "rgba(60,60,200,0.0)",
            borderWidth: 0,
            backgroundColor: "rgba(60,60,200,0.10)",
          },
          {
            type: "box",
            drawTime: "beforeDatasetsDraw",
            id: 'a-box-2',
            xScaleID: 'x-axis-1',
            yScaleID: 'y-axis-1',
            xMin: 0,
            xMax: 5,
            yMax: 5,
            yMin:  0,
            borderColor: "rgba(60,60,200,0.0)",
            borderWidth: 0,
            backgroundColor: "rgba(60,60,200,0.10)",
          },
          {
            type: "box",
            drawTime: "beforeDatasetsDraw",
            id: 'a-box-3',
            xScaleID: 'x-axis-1',
            yScaleID: 'y-axis-1',
            xMin: 0,
            xMax: 10,
            yMax: 10,
            yMin:  0,
            borderColor: "rgba(60,60,200,0.0)",
            borderWidth: 0,
            backgroundColor: "rgba(60,60,200,0.10)",
          }
        ]
    }
  }

    var chart = new Chart(ctx, { type: chartType, data: chartData, options: chartOptions });
  }

}
