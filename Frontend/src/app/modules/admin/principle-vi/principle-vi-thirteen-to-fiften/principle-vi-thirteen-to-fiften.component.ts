import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-vi-thirteen-to-fiften",
  templateUrl: "./principle-vi-thirteen-to-fiften.component.html",
  styleUrls: ["./principle-vi-thirteen-to-fiften.component.scss"],
})
export class PrincipleViThirteenToFiftenComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  energy_consumed_from_renewable_and_non_renewable_sources: any = {
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
  indicate_if_any_independent_assessment_leader_1: string = "";
  indicate_if_any_independent_assessment_name_leader_1: string = "";
  details_related_to_water_discharged: any = {
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
  indicate_if_any_independent_assessment_leader_2: string = "";
  indicate_if_any_independent_assessment_name_leader_2: string = "";
  water_withdrawal_in_areas_of_water_stress: any = {
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
  indicate_if_any_independent_assessment_leader_3: string = "";
  indicate_if_any_independent_assessment_name_leader_3: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    if (this.response?.leadership_indicators) {
      this.energy_consumed_from_renewable_and_non_renewable_sources = this._utilities.nullToString(
        this.response?.leadership_indicators
          ?.energy_consumed_from_renewable_and_non_renewable_sources
      );
      this.indicate_if_any_independent_assessment_leader_1 = this.response
        ?.leadership_indicators?.indicate_if_any_independent_assessment_leader_1
        ? "Yes"
        : this.response?.leadership_indicators
            ?.indicate_if_any_independent_assessment_leader_1 == false
        ? "No"
        : "";
      this.indicate_if_any_independent_assessment_name_leader_1 =
        this.response?.leadership_indicators
          ?.indicate_if_any_independent_assessment_name_leader_1 || "";
      this.details_related_to_water_discharged = this._utilities.nullToString(
        this.response?.leadership_indicators
          ?.details_related_to_water_discharged
      );
      this.indicate_if_any_independent_assessment_leader_2 = this.response
        ?.leadership_indicators?.indicate_if_any_independent_assessment_leader_2
        ? "Yes"
        : this.response?.leadership_indicators
            ?.indicate_if_any_independent_assessment_leader_2 == false
        ? "No"
        : "";
      this.indicate_if_any_independent_assessment_name_leader_2 =
        this.response?.leadership_indicators
          ?.indicate_if_any_independent_assessment_name_leader_2 || "";
      this.water_withdrawal_in_areas_of_water_stress = this._utilities.nullToString(
        this.response?.leadership_indicators
          ?.water_withdrawal_in_areas_of_water_stress
      );
      this.indicate_if_any_independent_assessment_leader_3 = this.response
        ?.leadership_indicators?.indicate_if_any_independent_assessment_leader_3
        ? "Yes"
        : this.response?.leadership_indicators
            ?.indicate_if_any_independent_assessment_leader_3 == false
        ? "No"
        : "";
      this.indicate_if_any_independent_assessment_name_leader_3 =
        this.response?.leadership_indicators
          ?.indicate_if_any_independent_assessment_name_leader_3 || "";
    } else {
      this.energy_consumed_from_renewable_and_non_renewable_sources = {
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
      this.indicate_if_any_independent_assessment_leader_1 = "";
      this.indicate_if_any_independent_assessment_name_leader_1 = "";
      this.details_related_to_water_discharged = {
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
      this.indicate_if_any_independent_assessment_leader_2 = "";
      this.indicate_if_any_independent_assessment_name_leader_2 = "";
      this.water_withdrawal_in_areas_of_water_stress = {
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
      this.indicate_if_any_independent_assessment_leader_3 = "";
      this.indicate_if_any_independent_assessment_name_leader_3 = "";
    }
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

  setMonthlyData(res, isCurrent) {
    if (isCurrent) {
      this.details_related_to_water_discharged.surface_water_no_treatment.current_financial_year =
        res?.details_related_to_water_discharged?.surface_water_no_treatment?.current_financial_year;
      this.details_related_to_water_discharged.surface_water_with_treatment.current_financial_year =
        res?.details_related_to_water_discharged?.surface_water_with_treatment?.current_financial_year;
      this.details_related_to_water_discharged.ground_water_no_treatment.current_financial_year =
        res?.details_related_to_water_discharged?.ground_water_no_treatment?.current_financial_year;
      this.details_related_to_water_discharged.ground_water_with_treatment.current_financial_year =
        res?.details_related_to_water_discharged?.ground_water_with_treatment?.current_financial_year;
      this.details_related_to_water_discharged.sea_water_no_treatment.current_financial_year =
        res?.details_related_to_water_discharged?.sea_water_no_treatment?.current_financial_year;
      this.details_related_to_water_discharged.sea_water_with_treatment.current_financial_year =
        res?.details_related_to_water_discharged?.sea_water_with_treatment?.current_financial_year;

      this.details_related_to_water_discharged.third_parties_no_treatment.current_financial_year =
        res?.details_related_to_water_discharged?.third_parties_no_treatment?.current_financial_year;
      this.details_related_to_water_discharged.third_parties_with_treatment.current_financial_year =
        res?.details_related_to_water_discharged?.third_parties_with_treatment?.current_financial_year;

      this.details_related_to_water_discharged.others_no_treatment.current_financial_year =
        res?.details_related_to_water_discharged?.others_no_treatment?.current_financial_year;
      this.details_related_to_water_discharged.others_with_treatment.current_financial_year =
        res?.details_related_to_water_discharged?.others_with_treatment?.current_financial_year;

      //energy_consumed_from_renewable_and_non_renewable_sources
      this.energy_consumed_from_renewable_and_non_renewable_sources.renewable_total_electricity_consumption.current_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.renewable_total_electricity_consumption?.current_financial_year;
      this.energy_consumed_from_renewable_and_non_renewable_sources.renewable_total_fuel_consumption.current_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.renewable_total_fuel_consumption?.current_financial_year;
      this.energy_consumed_from_renewable_and_non_renewable_sources.renewable_energy_consumption_through_other_sources.current_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.renewable_energy_consumption_through_other_sources?.current_financial_year;
      this.energy_consumed_from_renewable_and_non_renewable_sources.non_renewable_total_electricity_consumption.current_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.non_renewable_total_electricity_consumption?.current_financial_year;
      this.energy_consumed_from_renewable_and_non_renewable_sources.non_renewable_total_fuel_consumption.current_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.non_renewable_total_fuel_consumption?.current_financial_year;
      this.energy_consumed_from_renewable_and_non_renewable_sources.non_renewable_energy_consumption_through_other_sources.current_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.non_renewable_energy_consumption_through_other_sources?.current_financial_year;
    } else {
      this.details_related_to_water_discharged.surface_water_no_treatment.previous_financial_year =
        res?.details_related_to_water_discharged?.surface_water_no_treatment?.current_financial_year;

      this.details_related_to_water_discharged.surface_water_with_treatment.previous_financial_year =
        res?.details_related_to_water_discharged?.surface_water_with_treatment?.current_financial_year;

      this.details_related_to_water_discharged.ground_water_no_treatment.previous_financial_year =
        res?.details_related_to_water_discharged?.ground_water_no_treatment?.current_financial_year;

      this.details_related_to_water_discharged.ground_water_with_treatment.previous_financial_year =
        res?.details_related_to_water_discharged?.ground_water_with_treatment?.current_financial_year;

      this.details_related_to_water_discharged.sea_water_no_treatment.previous_financial_year =
        res?.details_related_to_water_discharged?.sea_water_no_treatment?.current_financial_year;

      this.details_related_to_water_discharged.sea_water_with_treatment.previous_financial_year =
        res?.details_related_to_water_discharged?.sea_water_with_treatment?.current_financial_year;

      this.details_related_to_water_discharged.third_parties_no_treatment.previous_financial_year =
        res?.details_related_to_water_discharged?.third_parties_no_treatment?.current_financial_year;

      this.details_related_to_water_discharged.third_parties_with_treatment.previous_financial_year =
        res?.details_related_to_water_discharged?.third_parties_with_treatment?.current_financial_year;

      this.details_related_to_water_discharged.others_no_treatment.previous_financial_year =
        res?.details_related_to_water_discharged?.others_no_treatment?.current_financial_year;

      this.details_related_to_water_discharged.others_with_treatment.previous_financial_year =
        res?.details_related_to_water_discharged?.others_with_treatment?.current_financial_year;

      //energy_consumed_from_renewable_and_non_renewable_sources
      this.energy_consumed_from_renewable_and_non_renewable_sources.renewable_total_electricity_consumption.previous_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.renewable_total_electricity_consumption?.current_financial_year;

      this.energy_consumed_from_renewable_and_non_renewable_sources.renewable_total_fuel_consumption.previous_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.renewable_total_fuel_consumption?.current_financial_year;

      this.energy_consumed_from_renewable_and_non_renewable_sources.renewable_energy_consumption_through_other_sources.previous_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.renewable_energy_consumption_through_other_sources?.current_financial_year;

      this.energy_consumed_from_renewable_and_non_renewable_sources.non_renewable_total_electricity_consumption.previous_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.non_renewable_total_electricity_consumption?.current_financial_year;

      this.energy_consumed_from_renewable_and_non_renewable_sources.non_renewable_total_fuel_consumption.previous_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.non_renewable_total_fuel_consumption?.current_financial_year;

      this.energy_consumed_from_renewable_and_non_renewable_sources.non_renewable_energy_consumption_through_other_sources.previous_financial_year =
        res?.energy_consumed_from_renewable_and_non_renewable_sources?.non_renewable_energy_consumption_through_other_sources?.current_financial_year;
    }
  }

  initialize() {
    this._emitter.emit({
      from: "thirteen_to_fifteen",
      data: {
        energy_consumed_from_renewable_and_non_renewable_sources: this
          .energy_consumed_from_renewable_and_non_renewable_sources,
        indicate_if_any_independent_assessment_leader_1:
          this.indicate_if_any_independent_assessment_leader_1 == "Yes"
            ? true
            : this.indicate_if_any_independent_assessment_leader_1 == "No"
            ? false
            : "",
        indicate_if_any_independent_assessment_name_leader_1: this
          .indicate_if_any_independent_assessment_name_leader_1,
        details_related_to_water_discharged: this
          .details_related_to_water_discharged,
        indicate_if_any_independent_assessment_leader_2:
          this.indicate_if_any_independent_assessment_leader_2 == "Yes"
            ? true
            : this.indicate_if_any_independent_assessment_leader_2 == "No"
            ? false
            : "",
        indicate_if_any_independent_assessment_name_leader_2: this
          .indicate_if_any_independent_assessment_name_leader_2,
        water_withdrawal_in_areas_of_water_stress: this
          .water_withdrawal_in_areas_of_water_stress,
        indicate_if_any_independent_assessment_leader_3:
          this.indicate_if_any_independent_assessment_leader_3 == "Yes"
            ? true
            : this.indicate_if_any_independent_assessment_leader_3 == "No"
            ? false
            : "",
        indicate_if_any_independent_assessment_name_leader_3: this
          .indicate_if_any_independent_assessment_name_leader_3,
      },
    });
  }
}
