import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { PrinciplesService } from "../../../../providers/principles.service";
@Component({
  selector: "app-monthly-principle-two",
  templateUrl: "./monthly-principle-two.component.html",
  styleUrls: ["./monthly-principle-two.component.scss"],
})
export class MonthlyPrincipleTwoComponent implements OnInit {
  @Input() startDate: any = "";
  @Input() endDate: any = "";
  @Input() branch_id: any = "";

  alert: any = {};
  showAlert: boolean = false;
  current_years: string = "";
  previous_years: string = "";
  one_capital_expenditure: any = {
    r_and_d: {
      current_year: "",
      previous_year: "",
      details_of_improvements: "",
    },
    capex: {
      current_year: "",
      previous_year: "",
      details_of_improvements: "",
    },
  };
  two_a: string = "";
  two_b: string = "";

  three_describe_the_processes_in_place_to_safely_reclaim: any = {
    a: "",
    b: "",
    c: "",
    d: "",
  };
  four_extended_producer_responsibility: any = {
    epr: "",
    if_yes: "",
    if_no: "",
  };
  is_lca: boolean = true;
  entity_conducted_life_cycle_perspective: any[] = [
    {
      nic_code: "",
      name_of_the_product_or_service: "",
      percetage_of_total_turnover: "",
      assesment_was_conducted: "",
      whether_conducted_by_independent_external_agency: "",
      result_communucated_in_public_domain: "",
      url: "",
    },
  ];
  significant_social_or_environmental_concerns: any[] = [
    {
      name_of_the_product_or_service: "",
      description_of_the_risk: "",
      action_taken: "",
    },
  ];
  percentage_of_recycled_or_reused_input_material: any[] = [];

  products_and_packaging_reclaimed_at_end_of_life: any = {
    current_financial_year: {
      year: this._utilities.selectedFinancialYear,
      plastic: {
        re_used: "",
        recycled: "",
        safely_disposed: "",
      },
      e_waste: {
        re_used: "",
        recycled: "",
        safely_disposed: "",
      },
      hazardous_waste: {
        re_used: "",
        recycled: "",
        safely_disposed: "",
      },
      other_waste: {
        re_used: "",
        recycled: "",
        safely_disposed: "",
      },
    },
    previous_financial_year: {
      year: this._utilities.previousFinancialYear,
      plastic: {
        re_used: "",
        recycled: "",
        safely_disposed: "",
      },
      e_waste: {
        re_used: "",
        recycled: "",
        safely_disposed: "",
      },
      hazardous_waste: {
        re_used: "",
        recycled: "",
        safely_disposed: "",
      },
      other_waste: {
        re_used: "",
        recycled: "",
        safely_disposed: "",
      },
    },
  };
  reclaimed_products: any[] = [
    {
      indicate_product_category: "",
      packaging_materials_as_percentage: "",
    },
  ];

  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  intervalId: any;

  //aggregatedObject
  aggregatedObject: any = {
    one_capital_expenditure: {
      capex: {
        amount_per_month_in_rs: 0,
        details_of_improvements: "",
      },
      r_and_d: {
        amount_per_month_in_rs: 0,
        details_of_improvements: "",
      },
    },
    products_and_packaging_reclaimed_at_end_of_life: {
      e_waste: {
        re_used: 0,
        recycled: 0,
        safely_disposed: 0,
      },
      hazardous_waste: {
        re_used: 0,
        recycled: 0,
        safely_disposed: 0,
      },
      other_waste: {
        re_used: 0,
        recycled: 0,
        safely_disposed: 0,
      },
      plastic: {
        re_used: 0,
        recycled: 0,
        safely_disposed: 0,
      },
    },
    percentage_of_recycled_or_reused_input_material: [],
    reclaimed_products: [],
  };

  aggregatedObjectPrev: any = {
    one_capital_expenditure: {
      capex: {
        amount_per_month_in_rs: 0,
        details_of_improvements: "",
      },
      r_and_d: {
        amount_per_month_in_rs: 0,
        details_of_improvements: "",
      },
    },
    products_and_packaging_reclaimed_at_end_of_life: {
      e_waste: {
        re_used: 0,
        recycled: 0,
        safely_disposed: 0,
      },
      hazardous_waste: {
        re_used: 0,
        recycled: 0,
        safely_disposed: 0,
      },
      other_waste: {
        re_used: 0,
        recycled: 0,
        safely_disposed: 0,
      },
      plastic: {
        re_used: 0,
        recycled: 0,
        safely_disposed: 0,
      },
    },
    percentage_of_recycled_or_reused_input_material: [],
    reclaimed_products: [],
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
    this.current_years = this._utilities.selectedFinancialYear;
    this.previous_years = this._utilities.previousFinancialYear;
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
        form: 2,
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
            response?.data.filter((e) => {
              for (const key in e?.essential_indicators) {
                if (e?.essential_indicators?.hasOwnProperty(key)) {
                  for (const secondKey in e?.essential_indicators[key]) {
                    if (
                      e?.essential_indicators[key].hasOwnProperty(secondKey)
                    ) {
                      for (const finalKey in e?.essential_indicators[key][
                        secondKey
                      ]) {
                        if (
                          e?.essential_indicators[key][
                            secondKey
                          ].hasOwnProperty(finalKey)
                        ) {
                          if (
                            typeof e?.essential_indicators[key][secondKey][
                              finalKey
                            ] == "number"
                          ) {
                            this.aggregatedObject[key][secondKey][finalKey] +=
                              e?.essential_indicators[key][secondKey][finalKey];
                          } else {
                            this.aggregatedObject[key][secondKey][finalKey] +=
                              e?.essential_indicators[key][secondKey][
                                finalKey
                              ] + ", ";
                          }
                        }
                      }
                    }
                  }
                }
              }
              this.aggregatedObject.percentage_of_recycled_or_reused_input_material = this.aggregatedObject.percentage_of_recycled_or_reused_input_material.concat(
                e?.leadership_indicators
                  ?.percentage_of_recycled_or_reused_input_material || []
              );
              this.aggregatedObject.reclaimed_products = this.aggregatedObject.reclaimed_products.concat(
                e?.leadership_indicators?.reclaimed_products || []
              );
            });
            this.mapAggregatedValue();
          }
        },
        (err) => {
          //this.resetData();
          this.mapAggregatedValue();
          console.log(err);
        }
      );
  }

  getMonthDataPrevYear() {
    let prevStartYearAr = this.startDate.split("-");
    let prevEndYearAr = this.endDate.split("-");
    console.log(prevStartYearAr);
    this._principlesService
      .getMonthlySurveyData({
        company_id: this._utilities.selectedCompany?.company_id,
        form: 2,
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
            response?.data.filter((e) => {
              for (const key in e?.essential_indicators) {
                if (e?.essential_indicators?.hasOwnProperty(key)) {
                  for (const secondKey in e?.essential_indicators[key]) {
                    if (
                      e?.essential_indicators[key].hasOwnProperty(secondKey)
                    ) {
                      for (const finalKey in e?.essential_indicators[key][
                        secondKey
                      ]) {
                        if (
                          e?.essential_indicators[key][
                            secondKey
                          ].hasOwnProperty(finalKey)
                        ) {
                          this.aggregatedObjectPrev[key][secondKey][finalKey] +=
                            e?.essential_indicators[key][secondKey][finalKey];
                        }
                      }
                    }
                  }
                }
              }
              this.aggregatedObjectPrev.percentage_of_recycled_or_reused_input_material = this.aggregatedObjectPrev.percentage_of_recycled_or_reused_input_material.concat(
                e?.leadership_indicators
                  ?.percentage_of_recycled_or_reused_input_material || []
              );
              this.aggregatedObjectPrev.reclaimed_products = this.aggregatedObjectPrev.reclaimed_products.concat(
                e?.leadership_indicators?.reclaimed_products || []
              );
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

  mapAggregatedValue() {
    this.one_capital_expenditure.capex.current_year = this.aggregatedObject?.one_capital_expenditure?.capex?.amount_per_month_in_rs;
    this.one_capital_expenditure.capex.details_of_improvements = this.aggregatedObject?.one_capital_expenditure?.capex?.details_of_improvements.slice(
      0,
      -2
    );
    this.one_capital_expenditure.r_and_d.current_year = this.aggregatedObject?.one_capital_expenditure?.r_and_d?.amount_per_month_in_rs;
    this.one_capital_expenditure.r_and_d.details_of_improvements = this.aggregatedObject?.one_capital_expenditure?.r_and_d?.details_of_improvements.slice(
      0,
      -2
    );

    this.products_and_packaging_reclaimed_at_end_of_life.current_financial_year.plastic = this.aggregatedObject?.products_and_packaging_reclaimed_at_end_of_life?.plastic;
    this.products_and_packaging_reclaimed_at_end_of_life.current_financial_year.e_waste = this.aggregatedObject?.products_and_packaging_reclaimed_at_end_of_life?.e_waste;
    this.products_and_packaging_reclaimed_at_end_of_life.current_financial_year.hazardous_waste = this.aggregatedObject?.products_and_packaging_reclaimed_at_end_of_life?.hazardous_waste;
    this.products_and_packaging_reclaimed_at_end_of_life.current_financial_year.other_waste = this.aggregatedObject?.products_and_packaging_reclaimed_at_end_of_life?.other_waste;

    this.aggregatedObject.reclaimed_products = this.aggregatedObject?.reclaimed_products.map(
      ({
        reclaimed_packaging_materials_as_percentage: packaging_materials_as_percentage,
        ...rest
      }) => ({
        packaging_materials_as_percentage,
        ...rest,
      })
    );
    this.percentage_of_recycled_or_reused_input_material = [];
    this.aggregatedObject.percentage_of_recycled_or_reused_input_material.filter(
      (e) => {
        this.percentage_of_recycled_or_reused_input_material.push({
          indicate_input_material: e?.indicate_input_material,
          current_year: e?.monthly_percentage,
          previous_year: 0,
        });
      }
    );

    this.reclaimed_products = this.aggregatedObject?.reclaimed_products;
  }

  mapAggregatedValuePrev() {
    this.one_capital_expenditure.capex.previous_year = this.aggregatedObjectPrev?.one_capital_expenditure?.capex?.amount_per_month_in_rs;
    this.one_capital_expenditure.r_and_d.previous_year = this.aggregatedObjectPrev?.one_capital_expenditure?.r_and_d?.amount_per_month_in_rs;

    this.products_and_packaging_reclaimed_at_end_of_life.previous_financial_year.plastic = this.aggregatedObjectPrev?.products_and_packaging_reclaimed_at_end_of_life?.plastic;
    this.products_and_packaging_reclaimed_at_end_of_life.previous_financial_year.e_waste = this.aggregatedObjectPrev?.products_and_packaging_reclaimed_at_end_of_life?.e_waste;
    this.products_and_packaging_reclaimed_at_end_of_life.previous_financial_year.hazardous_waste = this.aggregatedObjectPrev?.products_and_packaging_reclaimed_at_end_of_life?.hazardous_waste;
    this.products_and_packaging_reclaimed_at_end_of_life.previous_financial_year.other_waste = this.aggregatedObjectPrev?.products_and_packaging_reclaimed_at_end_of_life?.other_waste;
  }

  resetData() {
    this.one_capital_expenditure = {
      r_and_d: {
        current_year: "",
        previous_year: "",
        details_of_improvements: "",
      },
      capex: {
        current_year: "",
        previous_year: "",
        details_of_improvements: "",
      },
    };

    this.two_a = "";
    this.two_b = "";

    this.three_describe_the_processes_in_place_to_safely_reclaim = {
      a: "",
      b: "",
      c: "",
      d: "",
    };

    this.four_extended_producer_responsibility = {
      epr: "",
      if_yes: "",
      if_no: "",
    };

    this.is_lca = true;

    this.entity_conducted_life_cycle_perspective = [
      {
        nic_code: "",
        name_of_the_product_or_service: "",
        percetage_of_total_turnover: "",
        assesment_was_conducted: "",
        whether_conducted_by_independent_external_agency: "",
        result_communucated_in_public_domain: "",
        url: "",
      },
    ];

    this.significant_social_or_environmental_concerns = [
      {
        name_of_the_product_or_service: "",
        description_of_the_risk: "",
        action_taken: "",
      },
    ];

    this.percentage_of_recycled_or_reused_input_material = [
      {
        indicate_input_material: "",
        current_year: "",
        previous_year: "",
      },
    ];

    this.products_and_packaging_reclaimed_at_end_of_life = {
      current_financial_year: {
        year: this._utilities.selectedFinancialYear,
        plastic: {
          re_used: "",
          recycled: "",
          safely_disposed: "",
        },
        e_waste: {
          re_used: "",
          recycled: "",
          safely_disposed: "",
        },
        hazardous_waste: {
          re_used: "",
          recycled: "",
          safely_disposed: "",
        },
        other_waste: {
          re_used: "",
          recycled: "",
          safely_disposed: "",
        },
      },
      previous_financial_year: {
        year: this._utilities.previousFinancialYear,
        plastic: {
          re_used: "",
          recycled: "",
          safely_disposed: "",
        },
        e_waste: {
          re_used: "",
          recycled: "",
          safely_disposed: "",
        },
        hazardous_waste: {
          re_used: "",
          recycled: "",
          safely_disposed: "",
        },
        other_waste: {
          re_used: "",
          recycled: "",
          safely_disposed: "",
        },
      },
    };

    this.reclaimed_products = [
      {
        indicate_product_category: "",
        packaging_materials_as_percentage: "",
      },
    ];
  }

  onChangeSelect(mode) {
    if (mode == "two_a") {
      this.two_b = this.two_a != "No" ? "" : "No";
    }
  }

  addField(mode) {
    let flag = 1;
    if (mode == 1) {
      this.entity_conducted_life_cycle_perspective.filter((e) => {
        if (
          e?.nic_code.trim().length == 0 ||
          e?.name_of_the_product_or_service.trim().length == 0 ||
          e?.assesment_was_conducted.trim().length == 0 ||
          e?.percetage_of_total_turnover == null ||
          e?.percetage_of_total_turnover === "" ||
          e?.whether_conducted_by_independent_external_agency == null ||
          e?.whether_conducted_by_independent_external_agency === "" ||
          e?.result_communucated_in_public_domain == null ||
          e?.result_communucated_in_public_domain === ""
        )
          flag = 0;
      });
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Leadership Indicators point 1",
        };
        this.closeAlert();
        return;
      }
      if (this.entity_conducted_life_cycle_perspective.length < 15)
        this.entity_conducted_life_cycle_perspective.push({
          nic_code: "",
          name_of_the_product_or_service: "",
          percetage_of_total_turnover: "",
          assesment_was_conducted: "",
          whether_conducted_by_independent_external_agency: "",
          result_communucated_in_public_domain: "",
          url: "",
        });
    } else if (mode == 2) {
      this.significant_social_or_environmental_concerns.filter((e) => {
        if (
          e?.name_of_the_product_or_service.trim().length == 0 ||
          e?.description_of_the_risk.trim().length == 0 ||
          e?.action_taken.trim().length == 0
        )
          flag = 0;
      });
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Leadership Indicators point 2",
        };
        this.closeAlert();
        return;
      }
      if (this.significant_social_or_environmental_concerns.length < 15)
        this.significant_social_or_environmental_concerns.push({
          name_of_the_product_or_service: "",
          description_of_the_risk: "",
          action_taken: "",
        });
    } else if (mode == 3) {
      this.percentage_of_recycled_or_reused_input_material.filter((e) => {
        if (
          e?.indicate_input_material.trim().length == 0 ||
          e?.current_year == null ||
          e?.current_year === "" ||
          e?.previous_year == null ||
          e?.previous_year === ""
        )
          flag = 0;
      });
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Leadership Indicators point 3",
        };
        this.closeAlert();
        return;
      }
      if (this.percentage_of_recycled_or_reused_input_material.length < 15)
        this.percentage_of_recycled_or_reused_input_material.push({
          indicate_input_material: "",
          current_year: "",
          previous_year: "",
        });
    } else if (mode == 4) {
      this.reclaimed_products.filter((e) => {
        if (
          e?.indicate_product_category.trim().length == 0 ||
          e?.packaging_materials_as_percentage == null ||
          e?.packaging_materials_as_percentage === ""
        )
          flag = 0;
      });
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Leadership Indicators point 5",
        };
        this.closeAlert();
        return;
      }
      if (this.reclaimed_products.length < 15)
        this.reclaimed_products.push({
          indicate_product_category: "",
          packaging_materials_as_percentage: "",
        });
    }
  }

  removeField(i, mode) {
    if (mode == 1 && this.entity_conducted_life_cycle_perspective.length > 1)
      this.entity_conducted_life_cycle_perspective.splice(i, 1);
    else if (
      mode == 2 &&
      this.significant_social_or_environmental_concerns.length > 1
    )
      this.significant_social_or_environmental_concerns.splice(i, 1);
    else if (
      mode == 3 &&
      this.percentage_of_recycled_or_reused_input_material.length > 1
    )
      this.percentage_of_recycled_or_reused_input_material.splice(i, 1);
    else if (mode == 4 && this.reclaimed_products.length > 1)
      this.reclaimed_products.splice(i, 1);
  }

  submitForm() {
    const promise = new Promise((resolve, reject) => {
      let obj = {
        company_id: this._utilities.selectedCompany?.company_id,
        financial_start_date: this._utilities?.financialStartDate,
        financial_end_date: this._utilities?.financialEndDate,
        essential_indicators: {
          one_capital_expenditure: this.one_capital_expenditure,
          two_a: this.two_a,
          two_b: this.two_b,
          three_describe_the_processes_in_place_to_safely_reclaim: this
            .three_describe_the_processes_in_place_to_safely_reclaim,
          four_extended_producer_responsibility: this
            .four_extended_producer_responsibility,
        },
        leadership_indicators: {
          entity_conducted_life_cycle_perspective: this.entity_conducted_life_cycle_perspective.filter(
            (e) => e.nic_code.length > 0
          ),
          significant_social_or_environmental_concerns: this.significant_social_or_environmental_concerns.filter(
            (e) => e.name_of_the_product_or_service.length > 0
          ),
          percentage_of_recycled_or_reused_input_material: this.percentage_of_recycled_or_reused_input_material.filter(
            (e) => e.indicate_input_material.length > 0
          ),
          products_and_packaging_reclaimed_at_end_of_life: this
            .products_and_packaging_reclaimed_at_end_of_life,
          reclaimed_products: this.reclaimed_products.filter(
            (e) => e.indicate_product_category.length > 0
          ),
        },
      };
      obj.leadership_indicators.percentage_of_recycled_or_reused_input_material.map(
        (e) => {
          e.current_year = e?.current_year.toString();
          e.previous_year = e?.previous_year.toString();
        }
      );
      let finalObj = this._utilities.removeBlankElements(obj);

      this._principlesService.addPrinciple2(finalObj, true).subscribe(
        (response) => {
          return resolve({ data: finalObj, formName: "Principle 2" });
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
