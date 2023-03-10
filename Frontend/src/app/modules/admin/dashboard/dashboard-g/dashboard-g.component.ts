import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexPlotOptions,
  ApexYAxis,
  ApexFill,
  ApexTooltip,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from "ng-apexcharts";

export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
export type ChartOptions3 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
export type ChartOptions4 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-dashboard-g",
  templateUrl: "./dashboard-g.component.html",
  styleUrls: ["./dashboard-g.component.scss"],
})
export class DashboardGComponent implements OnInit {
  @ViewChild("chart1") chart1: ChartComponent;
  @ViewChild("chart2") chart2: ChartComponent;
  @ViewChild("chart3") chart3: ChartComponent;
  @ViewChild("chart4") chart4: ChartComponent;
  public chartOptions1: Partial<ChartOptions1>;
  public chartOptions2: Partial<ChartOptions2>;
  public chartOptions3: Partial<ChartOptions3>;
  public chartOptions4: Partial<ChartOptions4>;
  constructor(public _utilities: CommonFunctionsService) {
    this.chartOptions1 = {
      series: [
        {
          name: "CSR Projects",
          data: [5, 3, 4, 6],
        },
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "2019",
          "2020",
          "2021",
          "2022",
        ],
      },
    };
    this.chartOptions2 = {
      series: [
        {
          name: "Certified Vendors",
          data: [7, 9, 4, 12],
        },
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "2019",
          "2020",
          "2021",
          "2022",
        ],
      },
    };
    this.chartOptions3 = {
      series: [65, 30, 5],
      chart: {
        width: 500,
        type: "pie",
      },
      labels: ["Male", "Female", "Other"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
    this.chartOptions4 = {
      series: [
        {
          name: "Committee Meetings",
          data: [6, 7, 14, 11],
        },
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "2019",
          "2020",
          "2021",
          "2022",
        ],
      },
    };
  }

  ngOnInit(): void {
    this._utilities.callRedirectLoader();
  }
}
