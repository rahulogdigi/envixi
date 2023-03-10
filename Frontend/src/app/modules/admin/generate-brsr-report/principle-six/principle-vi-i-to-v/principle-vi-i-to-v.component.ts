import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-vi-i-to-v",
  templateUrl: "./principle-vi-i-to-v.component.html",
  styleUrls: ["./principle-vi-i-to-v.component.scss"],
})
export class PrincipleViIToVComponent implements OnInit {
  @Input() data: any = {};
  details_of_total_energy_consumption: any = {};
  indicate_if_any_independent_assessment_essential_1: any = "";
  independent_assessment_agency_name_essential_1: string = "";
  is_dcs: any = "";
  targets_under_pat_achieved: any = "";
  remedial_action_taken: string = "";

  details_of_following_disclosures_related_to_water: any = {};
  indicate_if_any_independent_assessment_essential_3: any = "";
  independent_assessment_agency_name_essential_3: string = "";

  mechanism_for_zero_liquid_discharge: any = "";
  mechanism_for_zero_liquid_discharge_details: string = "";
  details_of_air_emissions: any = {};
  indicate_if_any_independent_assessment_essential_5: any = "";
  independent_assessment_agency_name_essential_5: string = "";

  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.details_of_total_energy_consumption = this.data?.essential_indicators
      ?.details_of_total_energy_consumption || {
      current_year: this._utilities.selectedFinancialYear,
      previous_year: this._utilities.previousFinancialYear,
      total_electricity_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_fuel_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      energy_consumption_through_other_sources: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_energy_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      energy_intensity_per_rupee: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      energy_intensity_optional: {
        current_financial_year: "",
        previous_financial_year: "",
      },
    };

    this.indicate_if_any_independent_assessment_essential_1 =
      this.data?.essential_indicators
        ?.indicate_if_any_independent_assessment_essential_1 == true
        ? "Yes"
        : this.data?.essential_indicators
            ?.indicate_if_any_independent_assessment_essential_1 == false
        ? "No"
        : "--";
    this.independent_assessment_agency_name_essential_1 =
      this.data?.essential_indicators
        ?.independent_assessment_agency_name_essential_1 || "--";

    this.is_dcs =
      this.data?.essential_indicators?.is_dcs == true
        ? "Yes"
        : this.data?.essential_indicators?.is_dcs == false
        ? "No"
        : "--";
    this.targets_under_pat_achieved =
      this.data?.essential_indicators?.targets_under_pat_achieved == true
        ? "Yes"
        : this.data?.essential_indicators?.targets_under_pat_achieved == false
        ? "No"
        : "--";
    this.remedial_action_taken =
      this.data?.essential_indicators?.remedial_action_taken || "--";

    this.details_of_following_disclosures_related_to_water = this.data
      ?.essential_indicators
      ?.details_of_following_disclosures_related_to_water || {
      current_year: this._utilities.selectedFinancialYear,
      previous_year: this._utilities.previousFinancialYear,
      surface_water: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      groundwater: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      third_party_water: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      desalinated_water: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      others: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_volume_of_water_withdrawal: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_volume_of_water_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      water_intensity_per_rupee: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      water_intensity_optional: {
        current_financial_year: "",
        previous_financial_year: "",
      },
    };
    this.indicate_if_any_independent_assessment_essential_3 =
      this.data?.essential_indicators
        ?.indicate_if_any_independent_assessment_essential_3 == true
        ? "Yes"
        : this.data?.essential_indicators
            ?.indicate_if_any_independent_assessment_essential_3 == false
        ? "No"
        : "--";
    this.independent_assessment_agency_name_essential_3 =
      this.data?.essential_indicators
        ?.independent_assessment_agency_name_essential_3 || "--";

    //4 to 6
    this.mechanism_for_zero_liquid_discharge =
      this.data?.essential_indicators?.mechanism_for_zero_liquid_discharge ==
      true
        ? "Yes"
        : this.data?.essential_indicators
            ?.mechanism_for_zero_liquid_discharge == false
        ? "No"
        : "--";

    this.mechanism_for_zero_liquid_discharge_details =
      this.data?.essential_indicators
        ?.mechanism_for_zero_liquid_discharge_details || "--";

    this.details_of_air_emissions = this.data?.essential_indicators
      ?.details_of_air_emissions || {
      nox: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
      sox: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
      pm: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
      pop: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
      voc: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
      hap: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
      other: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
    };

    this.indicate_if_any_independent_assessment_essential_5 =
      this.data?.essential_indicators
        ?.indicate_if_any_independent_assessment_essential_5 == true
        ? "Yes"
        : this.data?.essential_indicators
            ?.indicate_if_any_independent_assessment_essential_5 == false
        ? "No"
        : "--";

    this.independent_assessment_agency_name_essential_5 =
      this.data?.essential_indicators
        ?.independent_assessment_agency_name_essential_5 || "--";
  }
}
