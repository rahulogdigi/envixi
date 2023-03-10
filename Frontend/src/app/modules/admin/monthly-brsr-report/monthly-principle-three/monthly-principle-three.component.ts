import { Component, OnInit, OnDestroy, ViewChild, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { PrinciplesService } from "../../../../providers/principles.service";
import { PrincipleIiiOneToThreeComponent } from "../../principle-iii/principle-iii-one-to-three/principle-iii-one-to-three.component";
import { PrincipleIiiFourToSixComponent } from "../../principle-iii/principle-iii-four-to-six/principle-iii-four-to-six.component";
import { PrincipleIiiSevenToNineComponent } from "../../principle-iii/principle-iii-seven-to-nine/principle-iii-seven-to-nine.component";
import { PrincipleIiiTenToTwelveComponent } from "../../principle-iii/principle-iii-ten-to-twelve/principle-iii-ten-to-twelve.component";
import { PrincipleIiiThirteenToFifteenComponent } from "../../principle-iii/principle-iii-thirteen-to-fifteen/principle-iii-thirteen-to-fifteen.component";
import { PrincipleIiiLeaderhipIndicatorComponent } from "../../principle-iii/principle-iii-leaderhip-indicator/principle-iii-leaderhip-indicator.component";
@Component({
  selector: "app-monthly-principle-three",
  templateUrl: "./monthly-principle-three.component.html",
  styleUrls: ["./monthly-principle-three.component.scss"],
})
export class MonthlyPrincipleThreeComponent implements OnInit {
  @Input() startDate: any = "";
  @Input() endDate: any = "";
  @Input() branch_id: any = "";
  @ViewChild(PrincipleIiiOneToThreeComponent)
  principleIiiOneToThreeComponent: PrincipleIiiOneToThreeComponent;
  @ViewChild(PrincipleIiiFourToSixComponent)
  principleIiiFourToSixComponent: PrincipleIiiFourToSixComponent;
  @ViewChild(PrincipleIiiSevenToNineComponent)
  principleIiiSevenToNineComponent: PrincipleIiiSevenToNineComponent;
  @ViewChild(PrincipleIiiTenToTwelveComponent)
  principleIiiTenToTwelveComponent: PrincipleIiiTenToTwelveComponent;
  @ViewChild(PrincipleIiiThirteenToFifteenComponent)
  principleIiiThirteenToFifteenComponent: PrincipleIiiThirteenToFifteenComponent;
  @ViewChild(PrincipleIiiLeaderhipIndicatorComponent)
  principleIiiLeaderhipIndicatorComponent: PrincipleIiiLeaderhipIndicatorComponent;

  alert: any = {};
  showAlert: boolean = false;
  data: any = {
    one_to_three: {},
    four_to_six: {},
    seven_to_nine: {},
    ten_to_twelve: {},
    thirteen_to_fifteen: {},
    leadership_indicator: {},
  };
  response: any = {};

  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  intervalId: any;
  aggregatedObject: any = {
    details_of_safety_related_incidents: {
      safety_incident_number: {
        ltifr: {
          employees: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
          workers: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
        },
        high_consequence_work_related_injury: {
          employees: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
          workers: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
        },
        no_of_fatalities: {
          employees: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
          workers: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
        },
        total_recordable_work_related_injuries: {
          employees: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
          workers: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
        },
      },
    },
    details_of_training_given_to_employees_and_workers: {
      current_financial_year: {
        year: "",
        employees: {
          total: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
          male: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
          female: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
        },
        workers: {
          total: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
          male: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
          female: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
        },
      },
    },
    number_of_complaints: {
      current_financial_year: {
        year: "",
        working_conditions: {
          filed_during_the_year: 0,
          pending_resolution_at_the_year_end: 0,
          remarks: "",
        },
        healthy_and_safety: {
          filed_during_the_year: 0,
          pending_resolution_at_the_year_end: 0,
          remarks: "",
        },
      },
    },
  };
  aggregatedObjectPrev: any = {
    details_of_safety_related_incidents: {
      safety_incident_number: {
        ltifr: {
          employees: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
          workers: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
        },
        high_consequence_work_related_injury: {
          employees: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
          workers: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
        },
        no_of_fatalities: {
          employees: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
          workers: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
        },
        total_recordable_work_related_injuries: {
          employees: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
          workers: {
            current_financial_year: {
              year: "",
              numbers: 0,
            },
          },
        },
      },
    },
    details_of_training_given_to_employees_and_workers: {
      current_financial_year: {
        year: "",
        employees: {
          total: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
          male: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
          female: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
        },
        workers: {
          total: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
          male: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
          female: {
            total_a: 0,
            on_health_and_safety_measures: {
              no_b: 0,
              percentage_b_divided_by_a: 0,
            },
            on_skill_upgrade: {
              no_c: 0,
              percentage_c_divided_by_a: 0,
            },
          },
        },
      },
    },
    number_of_complaints: {
      current_financial_year: {
        year: "",
        working_conditions: {
          filed_during_the_year: 0,
          pending_resolution_at_the_year_end: 0,
          remarks: "",
        },
        healthy_and_safety: {
          filed_during_the_year: 0,
          pending_resolution_at_the_year_end: 0,
          remarks: "",
        },
      },
    },
  };
  constructor(
    public _utilities: CommonFunctionsService,
    private _principlesService: PrinciplesService
  ) {
    this.intervalId = setInterval(() => {
      if (this.prevCompanyId != this._utilities.selectedCompany?.company_id) {
        this.prevCompanyId = this._utilities.selectedCompany?.company_id;
        this.firstLoadFunction();
      }
    }, 1000);
  }

  ngOnInit(): void {
    this.firstLoadFunction();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  firstLoadFunction() {
    this._utilities.callRedirectLoader();
    this.getMonthData();
    this.getMonthDataPrevYear();
  }

  getMonthData() {
    this._principlesService
      .getMonthlySurveyData({
        company_id: this._utilities.selectedCompany?.company_id,
        form: 3,
        from_date: this.startDate,
        to_date: this.endDate,
        limit: 10,
        offset: 0,
        location_id: this.branch_id,
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          if (response?.status == 200) {
            response?.data.filter((e, i) => {
              for (const key in e?.essential_indicators) {
                if (e?.essential_indicators?.hasOwnProperty(key)) {
                  for (const secondKey in e?.essential_indicators[key]) {
                    if (
                      e?.essential_indicators[key].hasOwnProperty(secondKey)
                    ) {
                      for (const thirdKey in e?.essential_indicators[key][
                        secondKey
                      ]) {
                        if (
                          e?.essential_indicators[key][
                            secondKey
                          ].hasOwnProperty(thirdKey)
                        ) {
                          if (
                            typeof e?.essential_indicators[key][secondKey][
                              thirdKey
                            ] == "number"
                          ) {
                            this.aggregatedObject[key][secondKey][thirdKey] +=
                              e?.essential_indicators[key][secondKey][thirdKey];
                          } else if (
                            typeof e?.essential_indicators[key][secondKey][
                              thirdKey
                            ] == "string"
                          ) {
                            this.aggregatedObject[key][secondKey][thirdKey] +=
                              e?.essential_indicators[key][secondKey][thirdKey];
                            if (response?.data.length > i + 1) {
                              this.aggregatedObject[key][secondKey][thirdKey] +=
                                ", ";
                            }
                          } else {
                            for (const fourthKey in e?.essential_indicators[
                              key
                            ][secondKey][thirdKey]) {
                              if (
                                e?.essential_indicators[key][secondKey][
                                  thirdKey
                                ].hasOwnProperty(fourthKey)
                              ) {
                                if (
                                  typeof e?.essential_indicators[key][
                                    secondKey
                                  ][thirdKey][fourthKey] == "number"
                                ) {
                                  this.aggregatedObject[key][secondKey][
                                    thirdKey
                                  ][fourthKey] +=
                                    e?.essential_indicators[key][secondKey][
                                      thirdKey
                                    ][fourthKey];
                                } else if (
                                  typeof e?.essential_indicators[key][
                                    secondKey
                                  ][thirdKey][fourthKey] == "string"
                                ) {
                                  this.aggregatedObject[key][secondKey][
                                    thirdKey
                                  ][fourthKey] +=
                                    e?.essential_indicators[key][secondKey][
                                      thirdKey
                                    ][fourthKey];
                                  if (response?.data.length > i + 1) {
                                    this.aggregatedObject[key][secondKey][
                                      thirdKey
                                    ][fourthKey] += ", ";
                                  }
                                } else {
                                  for (const fifthKey in e
                                    ?.essential_indicators[key][secondKey][
                                    thirdKey
                                  ][fourthKey]) {
                                    if (
                                      e?.essential_indicators[key][secondKey][
                                        thirdKey
                                      ][fourthKey].hasOwnProperty(fifthKey)
                                    ) {
                                      if (
                                        typeof e?.essential_indicators[key][
                                          secondKey
                                        ][thirdKey][fourthKey][fifthKey] ==
                                        "number"
                                      ) {
                                        this.aggregatedObject[key][secondKey][
                                          thirdKey
                                        ][fourthKey][fifthKey] +=
                                          e?.essential_indicators[key][
                                            secondKey
                                          ][thirdKey][fourthKey][fifthKey];
                                      } else if (
                                        typeof e?.essential_indicators[key][
                                          secondKey
                                        ][thirdKey][fourthKey][fifthKey] ==
                                        "string"
                                      ) {
                                        this.aggregatedObject[key][secondKey][
                                          thirdKey
                                        ][fourthKey][fifthKey] +=
                                          e?.essential_indicators[key][
                                            secondKey
                                          ][thirdKey][fourthKey][fifthKey];
                                        if (response?.data.length > i + 1) {
                                          this.aggregatedObject[key][secondKey][
                                            thirdKey
                                          ][fourthKey][fifthKey] += ", ";
                                        }
                                      } else {
                                        for (const sixthKey in e
                                          ?.essential_indicators[key][
                                          secondKey
                                        ][thirdKey][fourthKey][fifthKey]) {
                                          if (
                                            typeof e?.essential_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey][
                                              sixthKey
                                            ] == "number"
                                          ) {
                                            this.aggregatedObject[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey][
                                              sixthKey
                                            ] +=
                                              e?.essential_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey][
                                                sixthKey
                                              ];
                                          } else if (
                                            typeof e?.essential_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey][
                                              sixthKey
                                            ] == "string"
                                          ) {
                                            this.aggregatedObject[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey][
                                              sixthKey
                                            ] +=
                                              e?.essential_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey][
                                                sixthKey
                                              ];
                                            if (response?.data.length > i + 1) {
                                              this.aggregatedObject[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey][
                                                sixthKey
                                              ] += ", ";
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
            this.mapAggregatedValue();
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  mapAggregatedValue() {
    console.log("this.aggregatedObject--", this.aggregatedObject);
    this.principleIiiThirteenToFifteenComponent.setMonthlyData(
      this.aggregatedObject,
      true
    );
    this.principleIiiTenToTwelveComponent.setMonthlyData(
      this.aggregatedObject,
      true
    );
    this.principleIiiSevenToNineComponent.setMonthlyData(
      this.aggregatedObject,
      true
    );
  }

  getMonthDataPrevYear() {
    let prevStartYearAr = this.startDate.split("-");
    let prevEndYearAr = this.endDate.split("-");
    console.log(prevStartYearAr);
    this._principlesService
      .getMonthlySurveyData({
        company_id: this._utilities.selectedCompany?.company_id,
        form: 3,
        from_date: parseInt(prevStartYearAr[0]) - 1 + "-" + prevStartYearAr[1],
        to_date: parseInt(prevEndYearAr[0]) - 1 + "-" + prevEndYearAr[1],
        limit: 10,
        offset: 0,
        location_id: this.branch_id,
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          if (response?.status == 200) {
            response?.data.filter((e, i) => {
              for (const key in e?.essential_indicators) {
                if (e?.essential_indicators?.hasOwnProperty(key)) {
                  for (const secondKey in e?.essential_indicators[key]) {
                    if (
                      e?.essential_indicators[key].hasOwnProperty(secondKey)
                    ) {
                      for (const thirdKey in e?.essential_indicators[key][
                        secondKey
                      ]) {
                        if (
                          e?.essential_indicators[key][
                            secondKey
                          ].hasOwnProperty(thirdKey)
                        ) {
                          if (
                            typeof e?.essential_indicators[key][secondKey][
                              thirdKey
                            ] == "number"
                          ) {
                            this.aggregatedObjectPrev[key][secondKey][
                              thirdKey
                            ] +=
                              e?.essential_indicators[key][secondKey][thirdKey];
                          } else if (
                            typeof e?.essential_indicators[key][secondKey][
                              thirdKey
                            ] == "string"
                          ) {
                            this.aggregatedObjectPrev[key][secondKey][
                              thirdKey
                            ] +=
                              e?.essential_indicators[key][secondKey][thirdKey];
                            if (response?.data.length > i + 1) {
                              this.aggregatedObjectPrev[key][secondKey][
                                thirdKey
                              ] += ", ";
                            }
                          } else {
                            for (const fourthKey in e?.essential_indicators[
                              key
                            ][secondKey][thirdKey]) {
                              if (
                                e?.essential_indicators[key][secondKey][
                                  thirdKey
                                ].hasOwnProperty(fourthKey)
                              ) {
                                if (
                                  typeof e?.essential_indicators[key][
                                    secondKey
                                  ][thirdKey][fourthKey] == "number"
                                ) {
                                  this.aggregatedObjectPrev[key][secondKey][
                                    thirdKey
                                  ][fourthKey] +=
                                    e?.essential_indicators[key][secondKey][
                                      thirdKey
                                    ][fourthKey];
                                } else if (
                                  typeof e?.essential_indicators[key][
                                    secondKey
                                  ][thirdKey][fourthKey] == "string"
                                ) {
                                  this.aggregatedObjectPrev[key][secondKey][
                                    thirdKey
                                  ][fourthKey] +=
                                    e?.essential_indicators[key][secondKey][
                                      thirdKey
                                    ][fourthKey];
                                  if (response?.data.length > i + 1) {
                                    this.aggregatedObjectPrev[key][secondKey][
                                      thirdKey
                                    ][fourthKey] += ", ";
                                  }
                                } else {
                                  for (const fifthKey in e
                                    ?.essential_indicators[key][secondKey][
                                    thirdKey
                                  ][fourthKey]) {
                                    if (
                                      e?.essential_indicators[key][secondKey][
                                        thirdKey
                                      ][fourthKey].hasOwnProperty(fifthKey)
                                    ) {
                                      if (
                                        typeof e?.essential_indicators[key][
                                          secondKey
                                        ][thirdKey][fourthKey][fifthKey] ==
                                        "number"
                                      ) {
                                        this.aggregatedObjectPrev[key][
                                          secondKey
                                        ][thirdKey][fourthKey][fifthKey] +=
                                          e?.essential_indicators[key][
                                            secondKey
                                          ][thirdKey][fourthKey][fifthKey];
                                      } else if (
                                        typeof e?.essential_indicators[key][
                                          secondKey
                                        ][thirdKey][fourthKey][fifthKey] ==
                                        "string"
                                      ) {
                                        this.aggregatedObjectPrev[key][
                                          secondKey
                                        ][thirdKey][fourthKey][fifthKey] +=
                                          e?.essential_indicators[key][
                                            secondKey
                                          ][thirdKey][fourthKey][fifthKey];
                                        if (response?.data.length > i + 1) {
                                          this.aggregatedObjectPrev[key][
                                            secondKey
                                          ][thirdKey][fourthKey][fifthKey] +=
                                            ", ";
                                        }
                                      } else {
                                        for (const sixthKey in e
                                          ?.essential_indicators[key][
                                          secondKey
                                        ][thirdKey][fourthKey][fifthKey]) {
                                          if (
                                            typeof e?.essential_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey][
                                              sixthKey
                                            ] == "number"
                                          ) {
                                            this.aggregatedObjectPrev[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey][
                                              sixthKey
                                            ] +=
                                              e?.essential_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey][
                                                sixthKey
                                              ];
                                          } else if (
                                            typeof e?.essential_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey][
                                              sixthKey
                                            ] == "string"
                                          ) {
                                            this.aggregatedObjectPrev[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey][
                                              sixthKey
                                            ] +=
                                              e?.essential_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey][
                                                sixthKey
                                              ];
                                            if (response?.data.length > i + 1) {
                                              this.aggregatedObjectPrev[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey][
                                                sixthKey
                                              ] += ", ";
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
            this.mapAggregatedValuePrev();
          }
        },
        (err) => {
          //this.resetData();
          this.mapAggregatedValuePrev();
          console.log(err);
        }
      );
  }

  mapAggregatedValuePrev() {
    console.log(this.aggregatedObjectPrev);
    this.principleIiiThirteenToFifteenComponent.setMonthlyData(
      this.aggregatedObjectPrev,
      false
    );
    this.principleIiiTenToTwelveComponent.setMonthlyData(
      this.aggregatedObjectPrev,
      false
    );
    this.principleIiiSevenToNineComponent.setMonthlyData(
      this.aggregatedObjectPrev,
      false
    );
  }

  callBackFunction(e) {
    this.data[e.from] = e?.data;
    console.log("this.data", this.data);
  }
  submitForm() {
    const promise = new Promise((resolve, reject) => {
      this.principleIiiOneToThreeComponent.initialize();
      this.principleIiiFourToSixComponent.initialize();
      this.principleIiiSevenToNineComponent.initialize();
      this.principleIiiTenToTwelveComponent.initialize();
      this.principleIiiThirteenToFifteenComponent.initialize();
      this.principleIiiLeaderhipIndicatorComponent.initialize();
      let obj = {
        company_id: this._utilities.selectedCompany?.company_id,
        financial_start_date: this._utilities?.financialStartDate,
        financial_end_date: this._utilities?.financialEndDate,
        essential_indicators: {
          ...this.data.one_to_three,
          ...this.data.four_to_six,
          ...this.data.seven_to_nine,
          ...this.data.ten_to_twelve,
          ...this.data.thirteen_to_fifteen,
        },
        leadership_indicators: {
          ...this.data.leadership_indicator,
        },
      };
      let finalObj = this._utilities.removeBlankElements(obj);

      this._principlesService.addPrinciple3(finalObj, true).subscribe(
        (response) => {
          return resolve({ data: finalObj, formName: "Principle 3" });
        },
        (err) => {
          console.log(err);

          return reject(0);
        }
      );
    });
    return promise;
  }
  closeAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}
