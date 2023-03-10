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

import { PrinciplesService } from "../../../../providers/principles.service";

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
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-dashboard-e",
  templateUrl: "./dashboard-e.component.html",
  styleUrls: ["./dashboard-e.component.scss"],
})
export class DashboardEComponent implements OnInit {
  @ViewChild("chart1") chart1: ChartComponent;
  @ViewChild("chart2") chart2: ChartComponent;
  @ViewChild("chart3") chart3: ChartComponent;
  @ViewChild("chart4") chart4: ChartComponent;
  @ViewChild("chart5") chart5: ChartComponent;
  @ViewChild("chart6") chart6: ChartComponent;
  @ViewChild("chart7") chart7: ChartComponent;

  public chartOptions1: Partial<ChartOptions1>;
  public chartOptions2: Partial<ChartOptions2>;
  public chartOptions3: Partial<ChartOptions1>;
  public chartOptions4: Partial<ChartOptions2>;
  public chartOptions5: Partial<ChartOptions1>;
  public chartOptions6: Partial<ChartOptions1>;
  public chartOptions7: Partial<ChartOptions1>;
  data1: any = {
    total_energy_consumption: 0,
    total_no_of_awareness_programs: 0,
    total_no_of_r_and_d: 0,
    total_waste_generation: 0,
  };

  promises: any = [];
  constructor(
    public _utilities: CommonFunctionsService,
    private _principlesService: PrinciplesService
  ) {}

  ngOnInit(): void {
    this._utilities.callRedirectLoader();
    this.chartOptions5 = this.getLineGraphObject(
      "CO2 Emission Total", //series 1 name
      "", //series 2 name
      [373335, 660538, 178023, 731495],
      [373335, 660538, 178023, 731495],
      ["2017-18", "2018-19", "2019-20", "2020-2021"]
    );
    this.chartOptions7 = this.getLineGraphObject(
      "CO2 Emission Increase", //series 1 name
      "", //series 2 name
      [0, 77, -73, 311],
      [0, 77, -73, 311],
      ["2017-18", "2018-19", "2019-20", "2020-2021"]
    );
    this.chartOptions6 = this.getLineGraphObject(
      "Solar Power", //series 1 name
      "Wind Power", //series 2 name
      [22715, 24760, 36480, 80520],
      [297869, 240640, 174300, 99010],
      ["2017-18", "2018-19", "2019-20", "2020-2021"]
    );
    this.promises = [];
    this.promises.push(
      this.getGraphData1(),
      this.getGraphData2("get_graph_form_data_total_scope_emissions"),
      this.getGraphData2(
        "get_graph_form_data_total_volume_of_water_consumption"
      ),
      this.getGraphData2("get_graph_form_data_total_energy_consumption"),
      this.getGraphData2(
        "get_graph_form_data_total_water_discharged_in_kilolitres"
      )
    );
    this._utilities.loaderOn();
    Promise.all(this.promises)
      .then((result) => {
        this._utilities.loaderOff();
      })
      .catch((err) => {
        this._utilities.loaderOff();
      });
  }

  getGraphData1() {
    return new Promise((resolve, reject) => {
      let fromDate = this._utilities.financialStartDate.split("-");
      let toDate = this._utilities.financialEndDate.split("-");
      let obj = {
        company_id: this._utilities.selectedCompany?.company_id,
        //location_id: "c385b73a2efc",
        from_date: fromDate[0] + "-" + fromDate[1],
        to_date: toDate[0] + "-" + toDate[1],
      };
      this._principlesService.getGraphData1(obj).subscribe(
        (response) => {
          this.data1 = response?.data;
          return resolve(1);
        },
        (err) => {
          return reject(0);
        }
      );
    });
  }

  getGraphData2(url) {
    return new Promise((resolve, reject) => {
      let obj = {
        company_id: this._utilities.selectedCompany?.company_id,
        location_id: "c385b73a2efc",
        from_date: this._utilities.financialStartDate,
        to_date: this._utilities.financialEndDate,
        url: url,
      };
      this._principlesService.getGraphData2(obj).subscribe(
        (response) => {
          let series1 = [],
            series2 = [],
            graphCat = [];
          if (url == "get_graph_form_data_total_scope_emissions") {
            response?.data.filter((e) => {
              series1.push(e?.total_scope_1_emissions);
              series2.push(e?.total_scope_2_emissions);
              graphCat.push(
                e?.date.split("-")[0] + "-" + e?.date.split("-")[1]
              );
            });
            this.chartOptions1 = this.getLineGraphObject(
              "Scope 1 Emission", //series 1 name
              "Scope 2 Emission", //series 2 name
              series1,
              series2,
              graphCat
            );
          } else if (
            url == "get_graph_form_data_total_volume_of_water_consumption"
          ) {
            response?.data.filter((e) => {
              series1.push(e?.total_volume_of_water_consumption_in_kilolitres);
              graphCat.push(
                e?.date.split("-")[0] + "-" + e?.date.split("-")[1]
              );
            });
            this.chartOptions2 = this.getBarGraphObject(
              "Volume Of Water Consumption",
              series1,
              graphCat,
              "kilolitres"
            );
          } else if (url == "get_graph_form_data_total_energy_consumption") {
            response?.data.filter((e) => {
              series1.push(e?.renewable_total_electricity_consumption);
              series2.push(e?.non_renewable_total_electricity_consumption);
              graphCat.push(
                e?.date.split("-")[0] + "-" + e?.date.split("-")[1]
              );
            });
            this.chartOptions3 = this.getLineGraphObject(
              "Energy Consumption Non-renewal", //series 1 name
              "Energy Consumption Renewal", //series 2 name
              series1,
              series2,
              graphCat
            );
          } else if (
            url == "get_graph_form_data_total_water_discharged_in_kilolitres"
          ) {
            response?.data.filter((e) => {
              series1.push(e?.total_water_discharged_in_kilolitres);
              graphCat.push(
                e?.date.split("-")[0] + "-" + e?.date.split("-")[1]
              );
            });
            this.chartOptions4 = this.getBarGraphObject(
              "Water Discharged",
              series1,
              graphCat,
              "kilolitres"
            );
          }

          return resolve(1);
        },
        (err) => {
          return reject(0);
        }
      );
    });
  }

  getLineGraphObject(seriesName1, seriesName2, series1, series2, graphCat) {
    let obj: Partial<ChartOptions1> = {
      series: [
        {
          name: seriesName1,
          data: series1,
        },
        {
          name: seriesName2,
          data: series2,
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
        categories: graphCat,
      },
    };

    return obj;
  }

  getBarGraphObject(seriesName, seriesData, graphCat, unit) {
    let obj: Partial<ChartOptions2> = {
      series: [
        {
          name: seriesName,
          data: seriesData,
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: graphCat,
      },
      yaxis: {
        title: {
          text: unit,
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " " + unit;
          },
        },
      },
    };

    return obj;
  }
}
