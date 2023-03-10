import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { PrinciplesService } from "../../../providers/principles.service";
@Component({
  selector: "app-principle-ii",
  templateUrl: "./principle-ii.component.html",
  styleUrls: ["./principle-ii.component.scss"],
})
export class PrincipleIiComponent implements OnInit {
  alert: any = {};
  showAlert: boolean = false;
  moduleId: string = "63d55d60164bb0415e42cefa";
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
  percentage_of_recycled_or_reused_input_material: any[] = [
    {
      indicate_input_material: "",
      current_year: "",
      previous_year: "",
    },
  ];

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
    this.getPrinciple();
  }
  getPrinciple() {
    this._utilities.loaderOn();
    this._principlesService
      .getPrinciple({
        company_id: this._utilities.selectedCompany?.company_id,
        form_type: "principal_two",
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          let obj = {};
          obj = this._utilities.nullToString(
            response?.data?.essential_indicators?.one_capital_expenditure
          );
          this.one_capital_expenditure = obj;

          this.two_a = response?.data?.essential_indicators?.two_a || "";

          this.two_b = response?.data?.essential_indicators?.two_b || "";

          obj = this._utilities.nullToString(
            response?.data?.essential_indicators
              ?.three_describe_the_processes_in_place_to_safely_reclaim
          );
          this.three_describe_the_processes_in_place_to_safely_reclaim = obj;

          obj = this._utilities.nullToString(
            response?.data?.essential_indicators
              ?.four_extended_producer_responsibility
          );
          this.four_extended_producer_responsibility = obj;

          this.entity_conducted_life_cycle_perspective = this._utilities.arrayNullToString(
            response?.data?.leadership_indicators
              ?.entity_conducted_life_cycle_perspective
          );
          this.is_lca = this.entity_conducted_life_cycle_perspective.length
            ? true
            : false;

          this.significant_social_or_environmental_concerns = this._utilities.arrayNullToString(
            response?.data?.leadership_indicators
              ?.significant_social_or_environmental_concerns
          );

          this.percentage_of_recycled_or_reused_input_material = this._utilities.arrayNullToString(
            response?.data?.leadership_indicators
              ?.percentage_of_recycled_or_reused_input_material
          );

          this.products_and_packaging_reclaimed_at_end_of_life = this._utilities.nullToString(
            response?.data?.leadership_indicators
              ?.products_and_packaging_reclaimed_at_end_of_life
          );

          this.reclaimed_products = this._utilities.arrayNullToString(
            response?.data?.leadership_indicators?.reclaimed_products
          );
          console.log(response);
        },
        (err) => {
          this.resetData();
          console.log(err);
        }
      );
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
    this._utilities.loaderOn();
    this._principlesService.addPrinciple2(finalObj).subscribe(
      (response) => {
        this._utilities.loaderOff();
        console.log(response);
        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Principle 2 Form Submitted Successfully",
        };
        this.closeAlert();
      },
      (err) => {
        console.log(err);
        this._utilities.loaderOff();
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: this._utilities.someThingWentWrong,
        };
        this.closeAlert();
      }
    );
  }
  closeAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}
