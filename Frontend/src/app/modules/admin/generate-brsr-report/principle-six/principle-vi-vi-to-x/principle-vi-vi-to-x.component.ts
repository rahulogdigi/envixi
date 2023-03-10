import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-vi-vi-to-x",
  templateUrl: "./principle-vi-vi-to-x.component.html",
  styleUrls: ["./principle-vi-vi-to-x.component.scss"],
})
export class PrincipleViViToXComponent implements OnInit {
  @Input() data: any = {};

  details_of_greenhouse_gas_emissions: any = {};
  indicate_if_any_independent_assessment_essential_6: string = "";
  independent_assessment_agency_name_essential_6: string = "";

  related_to_reducing_green_house_gas_emission: any = "";
  related_to_reducing_green_house_gas_emission_details: string = "";

  details_related_to_waste_management: any = {};
  indicate_if_any_independent_assessment_essential_8: string = "";
  indicate_if_any_independent_assessment_name_essential_8: string = "";
  waste_management_practices_adopted: string = "";

  ecologically_sensitive_areas: any[] = [];

  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.details_of_greenhouse_gas_emissions = this.data?.essential_indicators
      ?.details_of_greenhouse_gas_emissions || {
      total_scope_1_emissions: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_scope_2_emissions: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_scope_1_2_emissions_per_rupee_of_turnover: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_scope_1_2_emissions_intensity: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
    };

    this.indicate_if_any_independent_assessment_essential_6 =
      this.data?.essential_indicators
        ?.indicate_if_any_independent_assessment_essential_6 == true
        ? "Yes"
        : this.data?.essential_indicators
            ?.indicate_if_any_independent_assessment_essential_6 == false
        ? "No"
        : "--";

    this.independent_assessment_agency_name_essential_6 =
      this.data?.essential_indicators
        ?.independent_assessment_agency_name_essential_6 || "--";

    this.related_to_reducing_green_house_gas_emission =
      this.data?.essential_indicators
        ?.related_to_reducing_green_house_gas_emission == true
        ? "Yes"
        : this.data?.essential_indicators
            ?.related_to_reducing_green_house_gas_emission == false
        ? "No"
        : "--";

    this.related_to_reducing_green_house_gas_emission_details =
      this.data?.essential_indicators
        ?.related_to_reducing_green_house_gas_emission_details || "--";

    this.details_related_to_waste_management = this.data?.essential_indicators
      ?.details_related_to_waste_management || {
      plastic_waste: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      e_waste: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      bio_medical_waste: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      construction_and_demolition_waste: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      battery_waste: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      radioactive_waste: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      other_hazardous_waste: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      other_non_hazardous_waste: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      recycled: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      re_used: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      other_recovery_operations: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      incineration: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      landfilling: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      other_disposal_operations: {
        current_financial_year: "",
        previous_financial_year: "",
      },
    };

    this.indicate_if_any_independent_assessment_essential_8 =
      this.data?.essential_indicators
        ?.indicate_if_any_independent_assessment_essential_8 == true
        ? "Yes"
        : this.data?.essential_indicators
            ?.indicate_if_any_independent_assessment_essential_8 == false
        ? "No"
        : "--";

    this.indicate_if_any_independent_assessment_name_essential_8 =
      this.data?.essential_indicators
        ?.indicate_if_any_independent_assessment_name_essential_8 || "--";

    this.waste_management_practices_adopted =
      this.data?.essential_indicators?.waste_management_practices_adopted ||
      "--";

    this.ecologically_sensitive_areas = this.data?.essential_indicators
      ?.ecologically_sensitive_areas || [
      {
        office_location: "",
        types_of_operation: "",
        is_environmental_approval: "",
        details: "",
      },
    ];
  }

  getSum(mode, fYear) {
    let val1, val2, val3, val4, val5, val6, val7, val8;
    if (mode == "1" && fYear == "current") {
      val1 =
        this.details_related_to_waste_management?.plastic_waste
          ?.current_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.e_waste
          ?.current_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.bio_medical_waste
          ?.current_financial_year || "0";
      val4 =
        this.details_related_to_waste_management
          ?.construction_and_demolition_waste?.current_financial_year || "0";
      val5 =
        this.details_related_to_waste_management?.battery_waste
          ?.current_financial_year || "0";
      val6 =
        this.details_related_to_waste_management?.radioactive_waste
          ?.current_financial_year || "0";
      val7 =
        this.details_related_to_waste_management?.other_hazardous_waste
          ?.current_financial_year || "0";
      val8 =
        this.details_related_to_waste_management?.other_non_hazardous_waste
          ?.current_financial_year || "0";
      return (
        parseFloat(val1) +
        parseFloat(val2) +
        parseFloat(val3) +
        parseFloat(val4) +
        parseFloat(val5) +
        parseFloat(val6) +
        parseFloat(val7) +
        parseFloat(val8)
      );
    }
    if (mode == "1" && fYear == "previous") {
      val1 =
        this.details_related_to_waste_management?.plastic_waste
          ?.previous_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.e_waste
          ?.previous_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.bio_medical_waste
          ?.previous_financial_year || "0";
      val4 =
        this.details_related_to_waste_management
          ?.construction_and_demolition_waste?.previous_financial_year || "0";
      val5 =
        this.details_related_to_waste_management?.battery_waste
          ?.previous_financial_year || "0";
      val6 =
        this.details_related_to_waste_management?.radioactive_waste
          ?.previous_financial_year || "0";
      val7 =
        this.details_related_to_waste_management?.other_hazardous_waste
          ?.previous_financial_year || "0";
      val8 =
        this.details_related_to_waste_management?.other_non_hazardous_waste
          ?.previous_financial_year || "0";
      return (
        parseFloat(val1) +
        parseFloat(val2) +
        parseFloat(val3) +
        parseFloat(val4) +
        parseFloat(val5) +
        parseFloat(val6) +
        parseFloat(val7) +
        parseFloat(val8)
      );
    }
    if (mode == "2" && fYear == "current") {
      val1 =
        this.details_related_to_waste_management?.recycled
          ?.current_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.re_used
          ?.current_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.other_recovery_operations
          ?.current_financial_year || "0";

      return parseFloat(val1) + parseFloat(val2) + parseFloat(val3);
    }
    if (mode == "2" && fYear == "previous") {
      val1 =
        this.details_related_to_waste_management?.recycled
          ?.previous_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.re_used
          ?.previous_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.other_recovery_operations
          ?.previous_financial_year || "0";

      return parseFloat(val1) + parseFloat(val2) + parseFloat(val3);
    }
    if (mode == "3" && fYear == "current") {
      val1 =
        this.details_related_to_waste_management?.incineration
          ?.current_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.landfilling
          ?.current_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.other_disposal_operations
          ?.current_financial_year || "0";

      return parseFloat(val1) + parseFloat(val2) + parseFloat(val3);
    }
    if (mode == "3" && fYear == "previous") {
      val1 =
        this.details_related_to_waste_management?.incineration
          ?.previous_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.landfilling
          ?.previous_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.other_disposal_operations
          ?.previous_financial_year || "0";

      return parseFloat(val1) + parseFloat(val2) + parseFloat(val3);
    }
  }
}
