import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { PrinciplesService } from "../../../../providers/principles.service";
import { EssentialOneToFiveComponent } from "../../principle-v/essential-one-to-five/essential-one-to-five.component";
import { EssentialSixToTenComponent } from "../../principle-v/essential-six-to-ten/essential-six-to-ten.component";
import { PrincipleVLeadershipOneToFiveComponent } from "../../principle-v/principle-v-leadership-one-to-five/principle-v-leadership-one-to-five.component";
@Component({
  selector: "app-monthly-principle-five",
  templateUrl: "./monthly-principle-five.component.html",
  styleUrls: ["./monthly-principle-five.component.scss"],
})
export class MonthlyPrincipleFiveComponent implements OnInit {
  @ViewChild(EssentialOneToFiveComponent)
  essentialOneToFiveComponent: EssentialOneToFiveComponent;
  @ViewChild(EssentialSixToTenComponent)
  essentialSixToTenComponent: EssentialSixToTenComponent;
  @ViewChild(PrincipleVLeadershipOneToFiveComponent)
  principleVLeadershipOneToFiveComponent: PrincipleVLeadershipOneToFiveComponent;

  @Input() startDate: any = "";
  @Input() endDate: any = "";
  @Input() branch_id: any = "";

  alert: any = {};
  showAlert: boolean = false;
  data: any = {
    one_to_five: {},
    six_to_ten: {},
    leadership_indicator: {},
  };
  response: any = {};

  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  intervalId: any;
  aggregatedObject: any = {
    details_on_assessment_of_value_chain_partners: {
      child_labour_percentage_of_value_chain_partners: 0,
      discrimination_at_workplace_percentage_of_value_chain_partners: 0,
      involuntary_labour_percentage_of_value_chain_partners: 0,
      others_percentage_of_value_chain_partners: 0,
      sexual_harassment_percentage_of_value_chain_partners: 0,
      wages_percentage_of_value_chain_partners: 0,
    },
    employees_and_workers_who_have_been_provided_training_on_human_rights: {
      current_financial_year: {
        employees: {
          permanent: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
          other_permanent: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
          total_employees: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
        },
        workers: {
          permanent: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
          other_permanent: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
          total_workers: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
        },
      },
    },
    number_of_complaints: {
      current_financial_year: {
        sexual_harassment: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
          remarks: "",
        },
        discrimination_at_workplace: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
          remarks: "",
        },
        child_labour: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
          remarks: "",
        },
        forced_labour: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
          remarks: "",
        },
        wages: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
          remarks: "",
        },
        others_human_rights_related_issued: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
          remarks: "",
        },
      },
    },
  };
  aggregatedObjectPrev: any = {
    details_on_assessment_of_value_chain_partners: {
      child_labour_percentage_of_value_chain_partners: 0,
      discrimination_at_workplace_percentage_of_value_chain_partners: 0,
      involuntary_labour_percentage_of_value_chain_partners: 0,
      others_percentage_of_value_chain_partners: 0,
      sexual_harassment_percentage_of_value_chain_partners: 0,
      wages_percentage_of_value_chain_partners: 0,
    },
    employees_and_workers_who_have_been_provided_training_on_human_rights: {
      current_financial_year: {
        employees: {
          permanent: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
          other_permanent: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
          total_employees: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
        },
        workers: {
          permanent: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
          other_permanent: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
          total_workers: {
            total_a: 0,
            no_of_employees_or_workers_b: 0,
            percentage_b_divided_by_a: 0,
          },
        },
      },
    },
    number_of_complaints: {
      current_financial_year: {
        sexual_harassment: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
          remarks: "",
        },
        discrimination_at_workplace: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
          remarks: "",
        },
        child_labour: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
          remarks: "",
        },
        forced_labour: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
          remarks: "",
        },
        wages: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
          remarks: "",
        },
        others_human_rights_related_issued: {
          filed_during_the_year: 0,
          pending_resolution_at_the_end_of_year: 0,
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
    this.getMonthDataPrev();
  }

  getMonthData() {
    this._principlesService
      .getMonthlySurveyData({
        company_id: this._utilities.selectedCompany?.company_id,
        form: 5,
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
                      if (
                        typeof e?.essential_indicators[key][secondKey] ==
                        "number"
                      ) {
                        this.aggregatedObject[key][secondKey] +=
                          e?.essential_indicators[key][secondKey];
                      } else if (
                        typeof e?.essential_indicators[key][secondKey] ==
                        "string"
                      ) {
                        this.aggregatedObject[key][secondKey] +=
                          e?.essential_indicators[key][secondKey];
                        if (response?.data.length > i + 1) {
                          this.aggregatedObject[key][secondKey] += ", ";
                        }
                      } else {
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
                                e?.essential_indicators[key][secondKey][
                                  thirdKey
                                ];
                            } else if (
                              typeof e?.essential_indicators[key][secondKey][
                                thirdKey
                              ] == "string"
                            ) {
                              this.aggregatedObject[key][secondKey][thirdKey] +=
                                e?.essential_indicators[key][secondKey][
                                  thirdKey
                                ];
                              if (response?.data.length > i + 1) {
                                this.aggregatedObject[key][secondKey][
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
                                            this.aggregatedObject[key][
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
                                              typeof e?.essential_indicators[
                                                key
                                              ][secondKey][thirdKey][fourthKey][
                                                fifthKey
                                              ][sixthKey] == "number"
                                            ) {
                                              this.aggregatedObject[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey][
                                                sixthKey
                                              ] +=
                                                e?.essential_indicators[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey];
                                            } else if (
                                              typeof e?.essential_indicators[
                                                key
                                              ][secondKey][thirdKey][fourthKey][
                                                fifthKey
                                              ][sixthKey] == "string"
                                            ) {
                                              this.aggregatedObject[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey][
                                                sixthKey
                                              ] +=
                                                e?.essential_indicators[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey];
                                              if (
                                                response?.data.length >
                                                i + 1
                                              ) {
                                                this.aggregatedObject[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey] += ", ";
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
    console.log(this.aggregatedObject);
    this.essentialOneToFiveComponent.setMonthlyData(
      this.aggregatedObject,
      true
    );

    this.essentialSixToTenComponent.setMonthlyData(this.aggregatedObject, true);

    this.principleVLeadershipOneToFiveComponent.setMonthlyData(
      this.aggregatedObject,
      true
    );
  }

  getMonthDataPrev() {
    let prevStartYearAr = this.startDate.split("-");
    let prevEndYearAr = this.endDate.split("-");
    this._principlesService
      .getMonthlySurveyData({
        company_id: this._utilities.selectedCompany?.company_id,
        form: 5,
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
                      if (
                        typeof e?.essential_indicators[key][secondKey] ==
                        "number"
                      ) {
                        this.aggregatedObjectPrev[key][secondKey] +=
                          e?.essential_indicators[key][secondKey];
                      } else if (
                        typeof e?.essential_indicators[key][secondKey] ==
                        "string"
                      ) {
                        this.aggregatedObjectPrev[key][secondKey] +=
                          e?.essential_indicators[key][secondKey];
                        if (response?.data.length > i + 1) {
                          this.aggregatedObjectPrev[key][secondKey] += ", ";
                        }
                      } else {
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
                                e?.essential_indicators[key][secondKey][
                                  thirdKey
                                ];
                            } else if (
                              typeof e?.essential_indicators[key][secondKey][
                                thirdKey
                              ] == "string"
                            ) {
                              this.aggregatedObjectPrev[key][secondKey][
                                thirdKey
                              ] +=
                                e?.essential_indicators[key][secondKey][
                                  thirdKey
                                ];
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
                                              typeof e?.essential_indicators[
                                                key
                                              ][secondKey][thirdKey][fourthKey][
                                                fifthKey
                                              ][sixthKey] == "number"
                                            ) {
                                              this.aggregatedObjectPrev[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey][
                                                sixthKey
                                              ] +=
                                                e?.essential_indicators[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey];
                                            } else if (
                                              typeof e?.essential_indicators[
                                                key
                                              ][secondKey][thirdKey][fourthKey][
                                                fifthKey
                                              ][sixthKey] == "string"
                                            ) {
                                              this.aggregatedObjectPrev[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey][
                                                sixthKey
                                              ] +=
                                                e?.essential_indicators[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey];
                                              if (
                                                response?.data.length >
                                                i + 1
                                              ) {
                                                this.aggregatedObjectPrev[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey] += ", ";
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
              }
            });
            this.mapAggregatedValuePrev();
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  mapAggregatedValuePrev() {
    this.essentialOneToFiveComponent.setMonthlyData(
      this.aggregatedObjectPrev,
      false
    );

    this.essentialSixToTenComponent.setMonthlyData(
      this.aggregatedObjectPrev,
      false
    );

    this.principleVLeadershipOneToFiveComponent.setMonthlyData(
      this.aggregatedObjectPrev,
      false
    );
  }

  callBackFunction(e) {
    this.data[e.from] = e?.data;
  }
  submitForm() {
    const promise = new Promise((resolve, reject) => {
      this.essentialOneToFiveComponent.initialize();
      this.essentialSixToTenComponent.initialize();
      this.principleVLeadershipOneToFiveComponent.initialize();
      let obj = {
        company_id: this._utilities.selectedCompany?.company_id,
        financial_start_date: this._utilities?.financialStartDate,
        financial_end_date: this._utilities?.financialEndDate,
        essential_indicators: {
          ...this.data.one_to_five,
          ...this.data.six_to_ten,
        },
        leadership_indicators: {
          ...this.data.leadership_indicator,
        },
      };
      let finalObj = this._utilities.removeBlankElements(obj);

      this._principlesService.addPrinciple5(finalObj, true).subscribe(
        (response) => {
          return resolve({ data: finalObj, formName: "Principle 5" });
        },
        (err) => {
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
