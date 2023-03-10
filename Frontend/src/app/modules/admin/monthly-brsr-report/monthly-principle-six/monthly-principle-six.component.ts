import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { PrinciplesService } from "../../../../providers/principles.service";
import { PrincipleViOneToThreeComponent } from "../../principle-vi/principle-vi-one-to-three/principle-vi-one-to-three.component";
import { PrincipleViFourToSixComponent } from "../../principle-vi/principle-vi-four-to-six/principle-vi-four-to-six.component";
import { PrincipleViSevenToNineComponent } from "../../principle-vi/principle-vi-seven-to-nine/principle-vi-seven-to-nine.component";
import { PrincipleViTenToTwelveComponent } from "../../principle-vi/principle-vi-ten-to-twelve/principle-vi-ten-to-twelve.component";
import { PrincipleViThirteenToFiftenComponent } from "../../principle-vi/principle-vi-thirteen-to-fiften/principle-vi-thirteen-to-fiften.component";
import { PrincipleViSixteenToTwentyoneComponent } from "../../principle-vi/principle-vi-sixteen-to-twentyone/principle-vi-sixteen-to-twentyone.component";
@Component({
  selector: "app-monthly-principle-six",
  templateUrl: "./monthly-principle-six.component.html",
  styleUrls: ["./monthly-principle-six.component.scss"],
})
export class MonthlyPrincipleSixComponent implements OnInit {
  @ViewChild(PrincipleViOneToThreeComponent)
  principleViOneToThreeComponent: PrincipleViOneToThreeComponent;
  @ViewChild(PrincipleViFourToSixComponent)
  principleViFourToSixComponent: PrincipleViFourToSixComponent;
  @ViewChild(PrincipleViSevenToNineComponent)
  principleViSevenToNineComponent: PrincipleViSevenToNineComponent;
  @ViewChild(PrincipleViTenToTwelveComponent)
  principleViTenToTwelveComponent: PrincipleViTenToTwelveComponent;
  @ViewChild(PrincipleViThirteenToFiftenComponent)
  principleViThirteenToFiftenComponent: PrincipleViThirteenToFiftenComponent;
  @ViewChild(PrincipleViSixteenToTwentyoneComponent)
  principleViSixteenToTwentyoneComponent: PrincipleViSixteenToTwentyoneComponent;

  @Input() startDate: any = "";
  @Input() endDate: any = "";
  @Input() branch_id: any = "";

  alert: any = {};
  showAlert: boolean = false;
  data: any = {
    one_to_three: {},
    four_to_six: {},
    seven_to_nine: {},
    ten_to_twelve: {},
    thirteen_to_fifteen: {},
    sixteen_to_twentyone: {},
  };

  response: any = {};
  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  intervalId: any;
  aggregatedObject: any = {
    details_of_air_emissions: {
      nox: {
        unit: "",
        current_financial_year: 0,
      },
      sox: {
        unit: "",
        current_financial_year: 0,
      },
      pm: {
        unit: "",
        current_financial_year: 0,
      },
      pop: {
        unit: "",
        current_financial_year: 0,
      },
      voc: {
        unit: "",
        current_financial_year: 0,
      },
      hap: {
        unit: "",
        current_financial_year: 0,
      },
      other: {
        unit: "",
        current_financial_year: 0,
      },
    },
    details_of_following_disclosures_related_to_water: {
      surface_water: {
        current_financial_year: 0,
      },
      groundwater: {
        current_financial_year: 0,
      },
      third_party_water: {
        current_financial_year: 0,
      },
      desalinated_water: {
        current_financial_year: 0,
      },
      others: {
        current_financial_year: 0,
      },
      total_volume_of_water_withdrawal: {
        current_financial_year: 0,
      },
      total_volume_of_water_consumption: {
        current_financial_year: 0,
      },
      water_intensity_per_rupee: {
        current_financial_year: 0,
      },
      water_intensity_optional: {
        current_financial_year: 0,
      },
    },
    details_of_greenhouse_gas_emissions: {
      total_scope_1_emissions: {
        unit: "",
        current_financial_year: 0,
      },
      total_scope_2_emissions: {
        unit: "",
        current_financial_year: 0,
      },
      total_scope_1_2_emissions_per_rupee_of_turnover: {
        unit: "",
        current_financial_year: 0,
      },
      total_scope_1_2_emissions_intensity: {
        unit: "",
        current_financial_year: 0,
      },
    },
    details_of_total_energy_consumption: {
      total_electricity_consumption: {
        carbon_free: 0,
        carbon_positive: 0,
        current_month: 0,
      },
      total_energy_consumption: {
        in_joule: 0,
        in_kilojoule: 0,
      },
      total_fuel_coal: {
        current_month: 0,
        diesel: 0,
        lpg: 0,
      },
    },
    details_related_to_waste_management: {
      plastic_waste: {
        current_financial_year: 0,
      },
      e_waste: {
        current_financial_year: 0,
      },
      bio_medical_waste: {
        current_financial_year: 0,
      },
      construction_and_demolition_waste: {
        current_financial_year: 0,
      },
      battery_waste: {
        current_financial_year: 0,
      },
      radioactive_waste: {
        current_financial_year: 0,
      },
      other_hazardous_waste: {
        current_financial_year: 0,
      },
      other_non_hazardous_waste: {
        current_financial_year: 0,
      },
      recycled: {
        current_financial_year: 0,
      },
      re_used: {
        current_financial_year: 0,
      },
      other_recovery_operations: {
        current_financial_year: 0,
      },
      incineration: {
        current_financial_year: 0,
      },
      landfilling: {
        current_financial_year: 0,
      },
      other_disposal_operations: {
        current_financial_year: 0,
      },
    },
    details_related_to_water_discharged: {
      surface_water_no_treatment: {
        current_financial_year: 0,
      },
      surface_water_with_treatment: {
        current_financial_year: 0,
      },
      ground_water_no_treatment: {
        current_financial_year: 0,
      },
      ground_water_with_treatment: {
        current_financial_year: 0,
      },
      sea_water_no_treatment: {
        current_financial_year: 0,
      },
      sea_water_with_treatment: {
        current_financial_year: 0,
      },
      third_parties_no_treatment: {
        current_financial_year: 0,
      },
      third_parties_with_treatment: {
        current_financial_year: 0,
      },
      others_no_treatment: {
        current_financial_year: 0,
      },
      others_with_treatment: {
        current_financial_year: 0,
      },
    },
    energy_consumed_from_renewable_and_non_renewable_sources: {
      renewable_total_electricity_consumption: {
        current_financial_year: 0,
      },
      renewable_total_fuel_consumption: {
        current_financial_year: 0,
      },
      renewable_energy_consumption_through_other_sources: {
        current_financial_year: 0,
      },
      non_renewable_total_electricity_consumption: {
        current_financial_year: 0,
      },
      non_renewable_total_fuel_consumption: {
        current_financial_year: 0,
      },
      non_renewable_energy_consumption_through_other_sources: {
        current_financial_year: 0,
      },
    },
    percentage_of_value_chain_partners: 0,
    used_innovative_technology: [],
  };
  aggregatedObjectPrev: any = {};
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
        form: 6,
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
              for (const key in e?.leadership_indicators) {
                if (e?.leadership_indicators?.hasOwnProperty(key)) {
                  if (key == "percentage_of_value_chain_partners")
                    this.aggregatedObject[key] += e?.leadership_indicators[key];
                  else if (key == "used_innovative_technology") {
                    this.aggregatedObject[key] = this.aggregatedObject[
                      key
                    ].concat(e?.leadership_indicators[key] || []);
                  } else {
                    for (const secondKey in e?.leadership_indicators[key]) {
                      if (
                        e?.leadership_indicators[key].hasOwnProperty(secondKey)
                      ) {
                        if (
                          typeof e?.leadership_indicators[key][secondKey] ==
                          "number"
                        ) {
                          this.aggregatedObject[key][secondKey] +=
                            e?.leadership_indicators[key][secondKey];
                        } else if (
                          typeof e?.leadership_indicators[key][secondKey] ==
                          "string"
                        ) {
                          this.aggregatedObject[key][secondKey] +=
                            e?.leadership_indicators[key][secondKey];
                          if (response?.data.length > i + 1) {
                            this.aggregatedObject[key][secondKey] += ", ";
                          }
                        } else {
                          for (const thirdKey in e?.leadership_indicators[key][
                            secondKey
                          ]) {
                            if (
                              e?.leadership_indicators[key][
                                secondKey
                              ].hasOwnProperty(thirdKey)
                            ) {
                              if (
                                typeof e?.leadership_indicators[key][secondKey][
                                  thirdKey
                                ] == "number"
                              ) {
                                this.aggregatedObject[key][secondKey][
                                  thirdKey
                                ] +=
                                  e?.leadership_indicators[key][secondKey][
                                    thirdKey
                                  ];
                              } else if (
                                typeof e?.leadership_indicators[key][secondKey][
                                  thirdKey
                                ] == "string"
                              ) {
                                this.aggregatedObject[key][secondKey][
                                  thirdKey
                                ] +=
                                  e?.leadership_indicators[key][secondKey][
                                    thirdKey
                                  ];
                                if (response?.data.length > i + 1) {
                                  this.aggregatedObject[key][secondKey][
                                    thirdKey
                                  ] += ", ";
                                }
                              } else {
                                for (const fourthKey in e
                                  ?.leadership_indicators[key][secondKey][
                                  thirdKey
                                ]) {
                                  if (
                                    e?.leadership_indicators[key][secondKey][
                                      thirdKey
                                    ].hasOwnProperty(fourthKey)
                                  ) {
                                    if (
                                      typeof e?.leadership_indicators[key][
                                        secondKey
                                      ][thirdKey][fourthKey] == "number"
                                    ) {
                                      this.aggregatedObject[key][secondKey][
                                        thirdKey
                                      ][fourthKey] +=
                                        e?.leadership_indicators[key][
                                          secondKey
                                        ][thirdKey][fourthKey];
                                    } else if (
                                      typeof e?.leadership_indicators[key][
                                        secondKey
                                      ][thirdKey][fourthKey] == "string"
                                    ) {
                                      this.aggregatedObject[key][secondKey][
                                        thirdKey
                                      ][fourthKey] +=
                                        e?.leadership_indicators[key][
                                          secondKey
                                        ][thirdKey][fourthKey];
                                      if (response?.data.length > i + 1) {
                                        this.aggregatedObject[key][secondKey][
                                          thirdKey
                                        ][fourthKey] += ", ";
                                      }
                                    } else {
                                      for (const fifthKey in e
                                        ?.leadership_indicators[key][secondKey][
                                        thirdKey
                                      ][fourthKey]) {
                                        if (
                                          e?.leadership_indicators[key][
                                            secondKey
                                          ][thirdKey][fourthKey].hasOwnProperty(
                                            fifthKey
                                          )
                                        ) {
                                          if (
                                            typeof e?.leadership_indicators[
                                              key
                                            ][secondKey][thirdKey][fourthKey][
                                              fifthKey
                                            ] == "number"
                                          ) {
                                            this.aggregatedObject[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] +=
                                              e?.leadership_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey];
                                          } else if (
                                            typeof e?.leadership_indicators[
                                              key
                                            ][secondKey][thirdKey][fourthKey][
                                              fifthKey
                                            ] == "string"
                                          ) {
                                            this.aggregatedObject[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] +=
                                              e?.leadership_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey];
                                            if (response?.data.length > i + 1) {
                                              this.aggregatedObject[key][
                                                secondKey
                                              ][thirdKey][fourthKey][
                                                fifthKey
                                              ] += ", ";
                                            }
                                          } else {
                                            for (const sixthKey in e
                                              ?.leadership_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey]) {
                                              if (
                                                typeof e?.leadership_indicators[
                                                  key
                                                ][secondKey][thirdKey][
                                                  fourthKey
                                                ][fifthKey][sixthKey] ==
                                                "number"
                                              ) {
                                                this.aggregatedObject[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey] +=
                                                  e?.leadership_indicators[key][
                                                    secondKey
                                                  ][thirdKey][fourthKey][
                                                    fifthKey
                                                  ][sixthKey];
                                              } else if (
                                                typeof e?.leadership_indicators[
                                                  key
                                                ][secondKey][thirdKey][
                                                  fourthKey
                                                ][fifthKey][sixthKey] ==
                                                "string"
                                              ) {
                                                this.aggregatedObject[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey] +=
                                                  e?.leadership_indicators[key][
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
              }
            });
            this.mapAggregatedValue();
          }
        },
        (err) => {
          this.mapAggregatedValue();
          console.log(err);
        }
      );
  }

  mapAggregatedValue() {
    this.principleViOneToThreeComponent.setMonthlyData(
      this.aggregatedObject,
      true
    ); //details_of_following_disclosures_related_to_water , details_of_total_energy_consumption

    this.principleViFourToSixComponent.setMonthlyData(
      this.aggregatedObject,
      true
    ); //details_of_greenhouse_gas_emissions, details_of_air_emissions

    this.principleViSevenToNineComponent.setMonthlyData(
      this.aggregatedObject,
      true
    ); //details_related_to_waste_management

    this.principleViThirteenToFiftenComponent.setMonthlyData(
      this.aggregatedObject,
      true
    ); //details_related_to_water_discharged, energy_consumed_from_renewable_and_non_renewable_sources

    this.principleViSixteenToTwentyoneComponent.setMonthlyData(
      this.aggregatedObject,
      true
    ); //percentage_of_value_chain_partners, used_innovative_technology
  }

  getMonthDataPrev() {
    let prevStartYearAr = this.startDate.split("-");
    let prevEndYearAr = this.endDate.split("-");
    this._principlesService
      .getMonthlySurveyData({
        company_id: this._utilities.selectedCompany?.company_id,
        form: 6,
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
              for (const key in e?.leadership_indicators) {
                if (e?.leadership_indicators?.hasOwnProperty(key)) {
                  if (key == "percentage_of_value_chain_partners")
                    this.aggregatedObject[key] += e?.leadership_indicators[key];
                  else if (key == "used_innovative_technology") {
                    this.aggregatedObject[key] = this.aggregatedObject[
                      key
                    ].concat(e?.leadership_indicators[key] || []);
                  } else {
                    for (const secondKey in e?.leadership_indicators[key]) {
                      if (
                        e?.leadership_indicators[key].hasOwnProperty(secondKey)
                      ) {
                        if (
                          typeof e?.leadership_indicators[key][secondKey] ==
                          "number"
                        ) {
                          this.aggregatedObjectPrev[key][secondKey] +=
                            e?.leadership_indicators[key][secondKey];
                        } else if (
                          typeof e?.leadership_indicators[key][secondKey] ==
                          "string"
                        ) {
                          this.aggregatedObjectPrev[key][secondKey] +=
                            e?.leadership_indicators[key][secondKey];
                          if (response?.data.length > i + 1) {
                            this.aggregatedObjectPrev[key][secondKey] += ", ";
                          }
                        } else {
                          for (const thirdKey in e?.leadership_indicators[key][
                            secondKey
                          ]) {
                            if (
                              e?.leadership_indicators[key][
                                secondKey
                              ].hasOwnProperty(thirdKey)
                            ) {
                              if (
                                typeof e?.leadership_indicators[key][secondKey][
                                  thirdKey
                                ] == "number"
                              ) {
                                this.aggregatedObjectPrev[key][secondKey][
                                  thirdKey
                                ] +=
                                  e?.leadership_indicators[key][secondKey][
                                    thirdKey
                                  ];
                              } else if (
                                typeof e?.leadership_indicators[key][secondKey][
                                  thirdKey
                                ] == "string"
                              ) {
                                this.aggregatedObjectPrev[key][secondKey][
                                  thirdKey
                                ] +=
                                  e?.leadership_indicators[key][secondKey][
                                    thirdKey
                                  ];
                                if (response?.data.length > i + 1) {
                                  this.aggregatedObjectPrev[key][secondKey][
                                    thirdKey
                                  ] += ", ";
                                }
                              } else {
                                for (const fourthKey in e
                                  ?.leadership_indicators[key][secondKey][
                                  thirdKey
                                ]) {
                                  if (
                                    e?.leadership_indicators[key][secondKey][
                                      thirdKey
                                    ].hasOwnProperty(fourthKey)
                                  ) {
                                    if (
                                      typeof e?.leadership_indicators[key][
                                        secondKey
                                      ][thirdKey][fourthKey] == "number"
                                    ) {
                                      this.aggregatedObjectPrev[key][secondKey][
                                        thirdKey
                                      ][fourthKey] +=
                                        e?.leadership_indicators[key][
                                          secondKey
                                        ][thirdKey][fourthKey];
                                    } else if (
                                      typeof e?.leadership_indicators[key][
                                        secondKey
                                      ][thirdKey][fourthKey] == "string"
                                    ) {
                                      this.aggregatedObjectPrev[key][secondKey][
                                        thirdKey
                                      ][fourthKey] +=
                                        e?.leadership_indicators[key][
                                          secondKey
                                        ][thirdKey][fourthKey];
                                      if (response?.data.length > i + 1) {
                                        this.aggregatedObjectPrev[key][
                                          secondKey
                                        ][thirdKey][fourthKey] += ", ";
                                      }
                                    } else {
                                      for (const fifthKey in e
                                        ?.leadership_indicators[key][secondKey][
                                        thirdKey
                                      ][fourthKey]) {
                                        if (
                                          e?.leadership_indicators[key][
                                            secondKey
                                          ][thirdKey][fourthKey].hasOwnProperty(
                                            fifthKey
                                          )
                                        ) {
                                          if (
                                            typeof e?.leadership_indicators[
                                              key
                                            ][secondKey][thirdKey][fourthKey][
                                              fifthKey
                                            ] == "number"
                                          ) {
                                            this.aggregatedObjectPrev[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] +=
                                              e?.leadership_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey];
                                          } else if (
                                            typeof e?.leadership_indicators[
                                              key
                                            ][secondKey][thirdKey][fourthKey][
                                              fifthKey
                                            ] == "string"
                                          ) {
                                            this.aggregatedObjectPrev[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] +=
                                              e?.leadership_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey];
                                            if (response?.data.length > i + 1) {
                                              this.aggregatedObjectPrev[key][
                                                secondKey
                                              ][thirdKey][fourthKey][
                                                fifthKey
                                              ] += ", ";
                                            }
                                          } else {
                                            for (const sixthKey in e
                                              ?.leadership_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey]) {
                                              if (
                                                typeof e?.leadership_indicators[
                                                  key
                                                ][secondKey][thirdKey][
                                                  fourthKey
                                                ][fifthKey][sixthKey] ==
                                                "number"
                                              ) {
                                                this.aggregatedObjectPrev[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey] +=
                                                  e?.leadership_indicators[key][
                                                    secondKey
                                                  ][thirdKey][fourthKey][
                                                    fifthKey
                                                  ][sixthKey];
                                              } else if (
                                                typeof e?.leadership_indicators[
                                                  key
                                                ][secondKey][thirdKey][
                                                  fourthKey
                                                ][fifthKey][sixthKey] ==
                                                "string"
                                              ) {
                                                this.aggregatedObjectPrev[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey] +=
                                                  e?.leadership_indicators[key][
                                                    secondKey
                                                  ][thirdKey][fourthKey][
                                                    fifthKey
                                                  ][sixthKey];
                                                if (
                                                  response?.data.length >
                                                  i + 1
                                                ) {
                                                  this.aggregatedObjectPrev[
                                                    key
                                                  ][secondKey][thirdKey][
                                                    fourthKey
                                                  ][fifthKey][sixthKey] += ", ";
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
              }
            });
            this.mapAggregatedValuePrev();
          }
        },
        (err) => {
          this.mapAggregatedValuePrev();
          console.log(err);
        }
      );
  }

  mapAggregatedValuePrev() {
    this.principleViOneToThreeComponent.setMonthlyData(
      this.aggregatedObjectPrev,
      false
    ); //details_of_following_disclosures_related_to_water , details_of_total_energy_consumption

    this.principleViFourToSixComponent.setMonthlyData(
      this.aggregatedObjectPrev,
      false
    ); //details_of_greenhouse_gas_emissions, details_of_air_emissions

    this.principleViSevenToNineComponent.setMonthlyData(
      this.aggregatedObjectPrev,
      false
    ); //details_related_to_waste_management

    this.principleViThirteenToFiftenComponent.setMonthlyData(
      this.aggregatedObjectPrev,
      false
    );
  }

  callBackFunction(e) {
    if (e?.data) this.data[e.from] = e?.data;
    else {
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: e?.msg,
      };
      this.closeAlert();
    }
    console.log("this.data", this.data);
  }
  submitForm() {
    const promise = new Promise((resolve, reject) => {
      this.principleViOneToThreeComponent.initialize();
      this.principleViFourToSixComponent.initialize();
      this.principleViSevenToNineComponent.initialize();
      this.principleViTenToTwelveComponent.initialize();
      this.principleViThirteenToFiftenComponent.initialize();
      this.principleViSixteenToTwentyoneComponent.initialize();
      let obj = {
        company_id: this._utilities.selectedCompany?.company_id,
        financial_start_date: this._utilities?.financialStartDate,
        financial_end_date: this._utilities?.financialEndDate,
        essential_indicators: {
          ...this.data.one_to_three,
          ...this.data.four_to_six,
          ...this.data.seven_to_nine,
          ...this.data.ten_to_twelve,
        },
        leadership_indicators: {
          ...this.data.thirteen_to_fifteen,
          ...this.data.sixteen_to_twentyone,
        },
      };
      let finalObj = this._utilities.removeBlankElements(obj);
      this._principlesService.addPrinciple6(finalObj, true).subscribe(
        (response) => {
          return resolve({ data: finalObj, formName: "Principle 6" });
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
