import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-two",
  templateUrl: "./principle-two.component.html",
  styleUrls: ["./principle-two.component.scss"],
})
export class PrincipleTwoComponent implements OnInit {
  @Input() data: any = {};
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
      year: "",
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
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.one_capital_expenditure = this.data?.essential_indicators
      ?.one_capital_expenditure || {
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

    this.two_a = this.data?.essential_indicators?.two_a || "";

    this.two_b = this.data?.essential_indicators?.two_b || "";

    this.three_describe_the_processes_in_place_to_safely_reclaim = this.data
      ?.essential_indicators
      ?.three_describe_the_processes_in_place_to_safely_reclaim || {
      a: "",
      b: "",
      c: "",
      d: "",
    };

    this.four_extended_producer_responsibility = this.data?.essential_indicators
      ?.four_extended_producer_responsibility || {
      epr: "",
      if_yes: "",
      if_no: "",
    };

    this.entity_conducted_life_cycle_perspective = this.data
      ?.leadership_indicators?.entity_conducted_life_cycle_perspective || [
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

    this.significant_social_or_environmental_concerns = this.data
      ?.leadership_indicators?.significant_social_or_environmental_concerns || [
      {
        name_of_the_product_or_service: "",
        description_of_the_risk: "",
        action_taken: "",
      },
    ];

    this.percentage_of_recycled_or_reused_input_material = this.data
      ?.leadership_indicators
      ?.percentage_of_recycled_or_reused_input_material || [
      {
        indicate_input_material: "",
        current_year: "",
        previous_year: "",
      },
    ];

    this.products_and_packaging_reclaimed_at_end_of_life = this.data
      ?.leadership_indicators
      ?.products_and_packaging_reclaimed_at_end_of_life || {
      current_financial_year: {
        year: "",
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

    this.reclaimed_products = this.data?.leadership_indicators
      ?.reclaimed_products || [
      {
        indicate_product_category: "",
        packaging_materials_as_percentage: "",
      },
    ];
  }
}
