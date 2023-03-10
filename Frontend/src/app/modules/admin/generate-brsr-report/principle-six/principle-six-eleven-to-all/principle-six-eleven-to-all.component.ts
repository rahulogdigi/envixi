import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-six-eleven-to-all",
  templateUrl: "./principle-six-eleven-to-all.component.html",
  styleUrls: ["./principle-six-eleven-to-all.component.scss"],
})
export class PrincipleSixElevenToAllComponent implements OnInit {
  @Input() data: any = {};

  details_of_environmental_impact_assessments: any[] = [];
  is_entity_compliant_with_the_applicable_environmental_law: any = "";
  non_compliances_details: any[] = [];

  energy_consumed_from_renewable_and_non_renewable_sources: any = {};
  indicate_if_any_independent_assessment_leader_1: string = "";
  indicate_if_any_independent_assessment_name_leader_1: string = "";
  details_related_to_water_discharged: any = {};
  indicate_if_any_independent_assessment_leader_2: string = "";
  indicate_if_any_independent_assessment_name_leader_2: string = "";

  water_withdrawal_in_areas_of_water_stress: any = {};
  indicate_if_any_independent_assessment_leader_3: string = "";
  indicate_if_any_independent_assessment_name_leader_3: string = "";

  details_of_total_Scope_3_emissions: any = {};
  indicate_if_any_independent_assessment_leader_4: string = "";
  indicate_if_any_independent_assessment_name_leader_4: string = "";
  details_of_significant_direct_indirect_impact_on_biodiversity: string = "";
  used_innovative_technology: any[] = [];
  business_continuity_and_disaster_management_plan: string = "";
  business_continuity_and_disaster_management_plan_web_link: string = "";
  significant_adverse_impact_to_the_environment: string = "";
  percentage_of_value_chain_partners: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.details_of_environmental_impact_assessments = this.data
      ?.essential_indicators?.details_of_environmental_impact_assessments || [
      {
        project_detail: "",
        eia: "",
        date: "",
        conducted_by_independent_external_agency: "",
        communicated_in_public_domain: "",
        web_link: "",
      },
    ];
    this.is_entity_compliant_with_the_applicable_environmental_law =
      this.data?.essential_indicators
        ?.is_entity_compliant_with_the_applicable_environmental_law == true
        ? "Yes"
        : this.data?.essential_indicators
            ?.is_entity_compliant_with_the_applicable_environmental_law == false
        ? "No"
        : "--";
    this.non_compliances_details = this.data?.essential_indicators
      ?.non_compliances_details || [
      {
        guidelines_which_was_not_complied: "",
        details_of_the_non_compliance: "",
        action_taken_by_regulatory_agencies: "",
        corrective_action_taken: "",
      },
    ];

    this.energy_consumed_from_renewable_and_non_renewable_sources = this.data
      ?.leadership_indicators
      ?.energy_consumed_from_renewable_and_non_renewable_sources || {
      renewable_total_electricity_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      renewable_total_fuel_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      renewable_energy_consumption_through_other_sources: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      non_renewable_total_electricity_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      non_renewable_total_fuel_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      non_renewable_energy_consumption_through_other_sources: {
        current_financial_year: "",
        previous_financial_year: "",
      },
    };
    this.indicate_if_any_independent_assessment_leader_1 =
      this.data?.leadership_indicators
        ?.indicate_if_any_independent_assessment_leader_1 == true
        ? "Yes"
        : this.data?.leadership_indicators
            ?.indicate_if_any_independent_assessment_leader_1 == false
        ? "No"
        : "--";

    this.indicate_if_any_independent_assessment_name_leader_1 =
      this.data?.leadership_indicators
        ?.indicate_if_any_independent_assessment_name_leader_1 || "--";

    this.details_related_to_water_discharged = this.data?.leadership_indicators
      ?.details_related_to_water_discharged || {
      surface_water_no_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      surface_water_with_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      ground_water_no_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      ground_water_with_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      sea_water_no_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      sea_water_with_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      third_parties_no_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      third_parties_with_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      others_no_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      others_with_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
    };

    this.indicate_if_any_independent_assessment_leader_2 =
      this.data?.leadership_indicators
        ?.indicate_if_any_independent_assessment_leader_2 == true
        ? "Yes"
        : this.data?.leadership_indicators
            ?.indicate_if_any_independent_assessment_leader_2 == false
        ? "No"
        : "--";

    this.indicate_if_any_independent_assessment_name_leader_2 =
      this.data?.leadership_indicators
        ?.indicate_if_any_independent_assessment_name_leader_2 || "--";

    this.water_withdrawal_in_areas_of_water_stress = this.data
      ?.leadership_indicators?.water_withdrawal_in_areas_of_water_stress || {
      name_of_area: "",
      nature_of_operations: "",
      water_withdrawal_surface_water: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      water_withdrawal_ground_water: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      water_withdrawal_third_party_water: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      water_withdrawal_sea_water: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      water_withdrawal_others_water: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_volume_of_water_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      water_intensity_per_rupee_of_turnover: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      water_intensity: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      surface_water_no_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      surface_water_with_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      ground_water_no_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      ground_water_with_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      sea_water_no_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      sea_water_with_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      third_parties_no_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      third_parties_with_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      others_no_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      others_with_treatment: {
        current_financial_year: "",
        previous_financial_year: "",
      },
    };

    this.indicate_if_any_independent_assessment_leader_3 =
      this.data?.leadership_indicators
        ?.indicate_if_any_independent_assessment_leader_3 == true
        ? "Yes"
        : this.data?.leadership_indicators
            ?.indicate_if_any_independent_assessment_leader_3 == false
        ? "No"
        : "--";

    this.indicate_if_any_independent_assessment_name_leader_3 =
      this.data?.leadership_indicators
        ?.indicate_if_any_independent_assessment_name_leader_3 || "--";

    this.details_of_total_Scope_3_emissions = this.data?.leadership_indicators
      ?.details_of_total_Scope_3_emissions || {
      total_scope_3_emissions: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_scope_3_emissions_per_rupee_of_turnover: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_scope_3_emissions_intensity: {
        unit: "",
        current_financial_year: "",
        previous_financial_year: "",
      },
    };

    this.indicate_if_any_independent_assessment_leader_4 =
      this.data?.leadership_indicators
        ?.indicate_if_any_independent_assessment_leader_4 == true
        ? "Yes"
        : this.data?.leadership_indicators
            ?.indicate_if_any_independent_assessment_leader_4 == false
        ? "No"
        : "--";

    this.indicate_if_any_independent_assessment_name_leader_4 =
      this.data?.leadership_indicators
        ?.indicate_if_any_independent_assessment_name_leader_4 || "--";

    this.details_of_significant_direct_indirect_impact_on_biodiversity =
      this.data?.leadership_indicators
        ?.details_of_significant_direct_indirect_impact_on_biodiversity || "--";

    this.used_innovative_technology = this.data?.leadership_indicators
      ?.used_innovative_technology || [
      {
        initiative_undertaken: "",
        details_of_the_initiative: "",
        web_link: "",
        outcome_of_the_initiative: "",
      },
    ];

    this.business_continuity_and_disaster_management_plan =
      this.data?.leadership_indicators
        ?.business_continuity_and_disaster_management_plan || "--";

    this.business_continuity_and_disaster_management_plan_web_link =
      this.data?.leadership_indicators
        ?.business_continuity_and_disaster_management_plan_web_link || "--";

    this.significant_adverse_impact_to_the_environment =
      this.data?.leadership_indicators
        ?.significant_adverse_impact_to_the_environment || "--";

    this.percentage_of_value_chain_partners =
      this.data?.leadership_indicators?.percentage_of_value_chain_partners ||
      "--";
  }
  getSum(mode, fYear) {
    let val1, val2, val3, val4, val5, val6, val7, val8, val9, val10;
    if (mode == "1" && fYear == "current") {
      val1 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.renewable_total_electricity_consumption?.current_financial_year ||
        "0";
      val2 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.renewable_total_fuel_consumption?.current_financial_year || "0";
      val3 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.renewable_energy_consumption_through_other_sources
          ?.current_financial_year || "0";

      return parseInt(val1) + parseInt(val2) + parseInt(val3);
    }
    if (mode == "1" && fYear == "previous") {
      val1 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.renewable_total_electricity_consumption?.previous_financial_year ||
        "0";
      val2 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.renewable_total_fuel_consumption?.previous_financial_year || "0";
      val3 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.renewable_energy_consumption_through_other_sources
          ?.previous_financial_year || "0";

      return parseInt(val1) + parseInt(val2) + parseInt(val3);
    }
    if (mode == "2" && fYear == "current") {
      val1 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.non_renewable_total_electricity_consumption
          ?.current_financial_year || "0";
      val2 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.non_renewable_total_fuel_consumption?.current_financial_year || "0";
      val3 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.non_renewable_energy_consumption_through_other_sources
          ?.current_financial_year || "0";

      return parseInt(val1) + parseInt(val2) + parseInt(val3);
    }
    if (mode == "2" && fYear == "previous") {
      val1 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.non_renewable_total_electricity_consumption
          ?.previous_financial_year || "0";
      val2 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.non_renewable_total_fuel_consumption?.previous_financial_year ||
        "0";
      val3 =
        this.energy_consumed_from_renewable_and_non_renewable_sources
          ?.non_renewable_energy_consumption_through_other_sources
          ?.previous_financial_year || "0";

      return parseInt(val1) + parseInt(val2) + parseInt(val3);
    }
    if (mode == "3" && fYear == "current") {
      val1 =
        this.details_related_to_water_discharged?.surface_water_no_treatment
          ?.current_financial_year || "0";
      val2 =
        this.details_related_to_water_discharged?.surface_water_with_treatment
          ?.current_financial_year || "0";
      val3 =
        this.details_related_to_water_discharged?.ground_water_no_treatment
          ?.current_financial_year || "0";
      val4 =
        this.details_related_to_water_discharged?.ground_water_with_treatment
          ?.current_financial_year || "0";
      val5 =
        this.details_related_to_water_discharged?.sea_water_no_treatment
          ?.current_financial_year || "0";
      val6 =
        this.details_related_to_water_discharged?.sea_water_with_treatment
          ?.current_financial_year || "0";
      val7 =
        this.details_related_to_water_discharged?.third_parties_no_treatment
          ?.current_financial_year || "0";
      val8 =
        this.details_related_to_water_discharged?.third_parties_with_treatment
          ?.current_financial_year || "0";
      val9 =
        this.details_related_to_water_discharged?.others_no_treatment
          ?.current_financial_year || "0";
      val10 =
        this.details_related_to_water_discharged?.others_with_treatment
          ?.current_financial_year || "0";
      return (
        parseInt(val1) +
        parseInt(val2) +
        parseInt(val3) +
        parseInt(val4) +
        parseInt(val5) +
        parseInt(val6) +
        parseInt(val7) +
        parseInt(val8) +
        parseInt(val9) +
        parseInt(val10)
      );
    }
    if (mode == "3" && fYear == "previous") {
      val1 =
        this.details_related_to_water_discharged?.surface_water_no_treatment
          ?.previous_financial_year || "0";
      val2 =
        this.details_related_to_water_discharged?.surface_water_with_treatment
          ?.previous_financial_year || "0";
      val3 =
        this.details_related_to_water_discharged?.ground_water_no_treatment
          ?.previous_financial_year || "0";
      val4 =
        this.details_related_to_water_discharged?.ground_water_with_treatment
          ?.previous_financial_year || "0";
      val5 =
        this.details_related_to_water_discharged?.sea_water_no_treatment
          ?.previous_financial_year || "0";
      val6 =
        this.details_related_to_water_discharged?.sea_water_with_treatment
          ?.previous_financial_year || "0";
      val7 =
        this.details_related_to_water_discharged?.third_parties_no_treatment
          ?.previous_financial_year || "0";
      val8 =
        this.details_related_to_water_discharged?.third_parties_with_treatment
          ?.previous_financial_year || "0";
      val9 =
        this.details_related_to_water_discharged?.others_no_treatment
          ?.previous_financial_year || "0";
      val10 =
        this.details_related_to_water_discharged?.others_with_treatment
          ?.previous_financial_year || "0";
      return (
        parseInt(val1) +
        parseInt(val2) +
        parseInt(val3) +
        parseInt(val4) +
        parseInt(val5) +
        parseInt(val6) +
        parseInt(val7) +
        parseInt(val8) +
        parseInt(val9) +
        parseInt(val10)
      );
    }
    if (mode == "4" && fYear == "current") {
      val1 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_withdrawal_surface_water?.current_financial_year || "0";
      val2 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_withdrawal_ground_water?.current_financial_year || "0";
      val3 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_withdrawal_third_party_water?.current_financial_year || "0";
      val4 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_withdrawal_sea_water?.current_financial_year || "0";
      val5 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_withdrawal_others_water?.current_financial_year || "0";

      return (
        parseInt(val1) +
        parseInt(val2) +
        parseInt(val3) +
        parseInt(val4) +
        parseInt(val5)
      );
    }
    if (mode == "4" && fYear == "previous") {
      val1 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_withdrawal_surface_water?.previous_financial_year || "0";
      val2 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_withdrawal_ground_water?.previous_financial_year || "0";
      val3 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_withdrawal_third_party_water?.previous_financial_year || "0";
      val4 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_withdrawal_sea_water?.previous_financial_year || "0";
      val5 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_withdrawal_others_water?.previous_financial_year || "0";

      return (
        parseInt(val1) +
        parseInt(val2) +
        parseInt(val3) +
        parseInt(val4) +
        parseInt(val5)
      );
    }
    if (mode == "5" && fYear == "current") {
      val1 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.surface_water_no_treatment?.current_financial_year || "0";
      val2 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.surface_water_with_treatment?.current_financial_year || "0";
      val3 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.ground_water_no_treatment?.current_financial_year || "0";
      val4 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.ground_water_with_treatment?.current_financial_year || "0";
      val5 =
        this.water_withdrawal_in_areas_of_water_stress?.sea_water_no_treatment
          ?.current_financial_year || "0";
      val6 =
        this.water_withdrawal_in_areas_of_water_stress?.sea_water_with_treatment
          ?.current_financial_year || "0";
      val7 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.third_parties_no_treatment?.current_financial_year || "0";
      val8 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.third_parties_with_treatment?.current_financial_year || "0";
      val9 =
        this.water_withdrawal_in_areas_of_water_stress?.others_no_treatment
          ?.current_financial_year || "0";
      val10 =
        this.water_withdrawal_in_areas_of_water_stress?.others_with_treatment
          ?.current_financial_year || "0";

      return (
        parseInt(val1) +
        parseInt(val2) +
        parseInt(val3) +
        parseInt(val4) +
        parseInt(val5) +
        parseInt(val6) +
        parseInt(val7) +
        parseInt(val8) +
        parseInt(val9) +
        parseInt(val10)
      );
    }
    if (mode == "5" && fYear == "previous") {
      val1 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.surface_water_no_treatment?.previous_financial_year || "0";
      val2 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.surface_water_with_treatment?.previous_financial_year || "0";
      val3 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.ground_water_no_treatment?.previous_financial_year || "0";
      val4 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.ground_water_with_treatment?.previous_financial_year || "0";
      val5 =
        this.water_withdrawal_in_areas_of_water_stress?.sea_water_no_treatment
          ?.previous_financial_year || "0";
      val6 =
        this.water_withdrawal_in_areas_of_water_stress?.sea_water_with_treatment
          ?.previous_financial_year || "0";
      val7 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.third_parties_no_treatment?.previous_financial_year || "0";
      val8 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.third_parties_with_treatment?.previous_financial_year || "0";
      val9 =
        this.water_withdrawal_in_areas_of_water_stress?.others_no_treatment
          ?.previous_financial_year || "0";
      val10 =
        this.water_withdrawal_in_areas_of_water_stress?.others_with_treatment
          ?.previous_financial_year || "0";
      return (
        parseInt(val1) +
        parseInt(val2) +
        parseInt(val3) +
        parseInt(val4) +
        parseInt(val5) +
        parseInt(val6) +
        parseInt(val7) +
        parseInt(val8) +
        parseInt(val9) +
        parseInt(val10)
      );
    }
    if (mode == "6" && fYear == "current") {
      val1 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_intensity_per_rupee_of_turnover?.current_financial_year ||
        "0";
      val2 =
        this.water_withdrawal_in_areas_of_water_stress?.water_intensity
          ?.current_financial_year || "0";

      this.water_withdrawal_in_areas_of_water_stress.total_volume_of_water_consumption.current_financial_year =
        parseInt(val1) + parseInt(val2);
      return this.water_withdrawal_in_areas_of_water_stress
        .total_volume_of_water_consumption.current_financial_year;
    }
    if (mode == "6" && fYear == "previous") {
      val1 =
        this.water_withdrawal_in_areas_of_water_stress
          ?.water_intensity_per_rupee_of_turnover?.previous_financial_year ||
        "0";
      val2 =
        this.water_withdrawal_in_areas_of_water_stress?.water_intensity
          ?.previous_financial_year || "0";

      this.water_withdrawal_in_areas_of_water_stress.total_volume_of_water_consumption.previous_financial_year =
        parseInt(val1) + parseInt(val2);
      return this.water_withdrawal_in_areas_of_water_stress
        .total_volume_of_water_consumption.previous_financial_year;
    }
  }
}
