import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { PrinciplesService } from "../../../../providers/principles.service";
@Component({
  selector: "app-monthly-principle-nine",
  templateUrl: "./monthly-principle-nine.component.html",
  styleUrls: ["./monthly-principle-nine.component.scss"],
})
export class MonthlyPrincipleNineComponent implements OnInit {
  @Input() startDate: any = "";
  @Input() endDate: any = "";
  @Input() branch_id: any = "";
  alert: any = {};
  showAlert: boolean = false;
  describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback: string =
    "";
  turnover_of_products_and_services: any = {
    percentage_to_total_turnover: {
      environmental_and_social_parameters_relevant_to_the_product: "",
      safe_and_responsible_usage: "",
      recycling_and_or_safe_disposa: "",
    },
  };
  number_of_consumer_complaints_in_respect: any = {
    current_financial_year: {
      year: this._utilities.selectedFinancialYear,
      data_privacy: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      advertising: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      cyber_security: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      delivery_of_essential_services: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      restrictive_trade_practices: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      unfair_trade_practices: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      other: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
    },
    previous_financial_year: {
      year: this._utilities.previousFinancialYear,
      data_privacy: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      advertising: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      cyber_security: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      delivery_of_essential_services: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      restrictive_trade_practices: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      unfair_trade_practices: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      other: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
    },
  };
  details_of_instances_of_product_recalls_on_account_of_safety_issues: any = {
    voluntary_recalls: {
      number: "",
      reason_for_recall: "",
    },
    forced_recalls: {
      number: "",
      reason_for_recall: "",
    },
  };
  does_the_entity_have_a_framework_policy_boolean: any = "";
  does_the_entity_have_a_framework_policy: string = "";
  provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating: string =
    "";
  channels_or_platforms_where_information: string = "";
  steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible: string =
    "";
  mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services: string =
    "";
  does_the_entity_display_product_information_on_the_product_over: string = "";
  does_the_entity_display_product_information_on_the_product_over_brief: string =
    "";
  does_the_entity_display_product_information_on_the_product_over_survey: any =
    "";
  five_a_number_of_instances_of_data_breaches_along_with_impact: string = "";
  five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer: string =
    "";

  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  intervalId: any;

  aggregatedObject: any = {
    number_of_consumer_complaints_in_respect: {
      current_financial_year: {
        data_privacy: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        advertising: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        cyber_security: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        delivery_of_essential_services: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        restrictive_trade_practices: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        unfair_trade_practices: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        other: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
      },
    },
  };
  aggregatedObjectPrev: any = {
    number_of_consumer_complaints_in_respect: {
      current_financial_year: {
        data_privacy: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        advertising: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        cyber_security: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        delivery_of_essential_services: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        restrictive_trade_practices: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        unfair_trade_practices: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
          remarks: "",
        },
        other: {
          received_during_the_year: 0,
          pending_resolution_at_end_of_year: 0,
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
        form: 9,
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
    this.number_of_consumer_complaints_in_respect.current_financial_year.data_privacy = this.aggregatedObject?.number_of_consumer_complaints_in_respect?.current_financial_year?.data_privacy;
    this.number_of_consumer_complaints_in_respect.current_financial_year.advertising = this.aggregatedObject?.number_of_consumer_complaints_in_respect?.current_financial_year?.advertising;
    this.number_of_consumer_complaints_in_respect.current_financial_year.cyber_security = this.aggregatedObject?.number_of_consumer_complaints_in_respect?.current_financial_year?.cyber_security;
    this.number_of_consumer_complaints_in_respect.current_financial_year.delivery_of_essential_services = this.aggregatedObject?.number_of_consumer_complaints_in_respect?.current_financial_year?.delivery_of_essential_services;
    this.number_of_consumer_complaints_in_respect.current_financial_year.restrictive_trade_practices = this.aggregatedObject?.number_of_consumer_complaints_in_respect?.current_financial_year?.restrictive_trade_practices;
    this.number_of_consumer_complaints_in_respect.current_financial_year.unfair_trade_practices = this.aggregatedObject?.number_of_consumer_complaints_in_respect?.current_financial_year?.unfair_trade_practices;
    this.number_of_consumer_complaints_in_respect.current_financial_year.other = this.aggregatedObject?.number_of_consumer_complaints_in_respect?.current_financial_year?.other;
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
    this.number_of_consumer_complaints_in_respect.previous_financial_year.data_privacy = this.aggregatedObjectPrev?.number_of_consumer_complaints_in_respect?.current_financial_year?.data_privacy;
    this.number_of_consumer_complaints_in_respect.previous_financial_year.advertising = this.aggregatedObjectPrev?.number_of_consumer_complaints_in_respect?.current_financial_year?.advertising;
    this.number_of_consumer_complaints_in_respect.previous_financial_year.cyber_security = this.aggregatedObjectPrev?.number_of_consumer_complaints_in_respect?.current_financial_year?.cyber_security;
    this.number_of_consumer_complaints_in_respect.previous_financial_year.delivery_of_essential_services = this.aggregatedObjectPrev?.number_of_consumer_complaints_in_respect?.current_financial_year?.delivery_of_essential_services;
    this.number_of_consumer_complaints_in_respect.previous_financial_year.restrictive_trade_practices = this.aggregatedObjectPrev?.number_of_consumer_complaints_in_respect?.current_financial_year?.restrictive_trade_practices;
    this.number_of_consumer_complaints_in_respect.previous_financial_year.unfair_trade_practices = this.aggregatedObjectPrev?.number_of_consumer_complaints_in_respect?.current_financial_year?.unfair_trade_practices;
    this.number_of_consumer_complaints_in_respect.previous_financial_year.other = this.aggregatedObjectPrev?.number_of_consumer_complaints_in_respect?.current_financial_year?.other;
  }

  resetData() {
    this.describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback =
      "";
    this.turnover_of_products_and_services = {
      percentage_to_total_turnover: {
        environmental_and_social_parameters_relevant_to_the_product: "",
        safe_and_responsible_usage: "",
        recycling_and_or_safe_disposa: "",
      },
    };
    this.number_of_consumer_complaints_in_respect = {
      current_financial_year: {
        year: this._utilities.selectedFinancialYear,
        data_privacy: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        advertising: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        cyber_security: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        delivery_of_essential_services: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        restrictive_trade_practices: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        unfair_trade_practices: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        other: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
      },
      previous_financial_year: {
        year: this._utilities.previousFinancialYear,
        data_privacy: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        advertising: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        cyber_security: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        delivery_of_essential_services: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        restrictive_trade_practices: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        unfair_trade_practices: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        other: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
      },
    };
    this.details_of_instances_of_product_recalls_on_account_of_safety_issues = {
      voluntary_recalls: {
        number: "",
        reason_for_recall: "",
      },
      forced_recalls: {
        number: "",
        reason_for_recall: "",
      },
    };
    this.does_the_entity_have_a_framework_policy_boolean = "";
    this.does_the_entity_have_a_framework_policy = "";
    this.provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating =
      "";
    this.channels_or_platforms_where_information = "";
    this.steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible =
      "";
    this.mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services =
      "";
    this.does_the_entity_display_product_information_on_the_product_over = "";
    this.does_the_entity_display_product_information_on_the_product_over_brief =
      "";
    this.does_the_entity_display_product_information_on_the_product_over_survey =
      "";
    this.five_a_number_of_instances_of_data_breaches_along_with_impact = "";
    this.five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer =
      "";
  }

  submitForm() {
    const promise = new Promise((resolve, reject) => {
      let obj = {
        company_id: this._utilities.selectedCompany?.company_id,
        financial_start_date: this._utilities?.financialStartDate,
        financial_end_date: this._utilities?.financialEndDate,
        essential_indicators: {
          describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback: this
            .describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback,
          turnover_of_products_and_services: this
            .turnover_of_products_and_services,
          number_of_consumer_complaints_in_respect: this
            .number_of_consumer_complaints_in_respect,
          details_of_instances_of_product_recalls_on_account_of_safety_issues: this
            .details_of_instances_of_product_recalls_on_account_of_safety_issues,
          does_the_entity_have_a_framework_policy_boolean:
            this.does_the_entity_have_a_framework_policy_boolean == "Yes"
              ? true
              : this.does_the_entity_have_a_framework_policy_boolean == "No"
              ? false
              : "",
          does_the_entity_have_a_framework_policy: this
            .does_the_entity_have_a_framework_policy,
          provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating: this
            .provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating,
        },
        leadership_indicators: {
          channels_or_platforms_where_information: this
            .channels_or_platforms_where_information,
          steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible: this
            .steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible,
          mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services: this
            .mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services,
          does_the_entity_display_product_information_on_the_product_over: this
            .does_the_entity_display_product_information_on_the_product_over,
          does_the_entity_display_product_information_on_the_product_over_brief: this
            .does_the_entity_display_product_information_on_the_product_over_brief,
          does_the_entity_display_product_information_on_the_product_over_survey: this
            .does_the_entity_display_product_information_on_the_product_over_survey,
          five_a_number_of_instances_of_data_breaches_along_with_impact: this
            .five_a_number_of_instances_of_data_breaches_along_with_impact,
          five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer: this
            .five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer,
        },
      };
      let finalObj = this._utilities.removeBlankElements(obj);

      this._principlesService.addPrinciple9(finalObj, true).subscribe(
        (response) => {
          return resolve({ data: finalObj, formName: "Principle 9" });
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
