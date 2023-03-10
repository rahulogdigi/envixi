import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-vi-one-to-three",
  templateUrl: "./principle-vi-one-to-three.component.html",
  styleUrls: ["./principle-vi-one-to-three.component.scss"],
})
export class PrincipleViOneToThreeComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  details_of_total_energy_consumption: any = {
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
  indicate_if_any_independent_assessment_essential_1: string = "";
  independent_assessment_agency_name_essential_1: string = "";
  is_dcs: any = "";
  targets_under_pat_achieved: any = "";
  remedial_action_taken: string = "";

  details_of_following_disclosures_related_to_water: any = {
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
  indicate_if_any_independent_assessment_essential_3: string = "";
  independent_assessment_agency_name_essential_3: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    if (this.response?.essential_indicators) {
      this.details_of_total_energy_consumption = this._utilities.nullToString(
        this.response?.essential_indicators?.details_of_total_energy_consumption
      );
      this.indicate_if_any_independent_assessment_essential_1 = this.response
        ?.essential_indicators
        ?.indicate_if_any_independent_assessment_essential_1
        ? "Yes"
        : this.response?.essential_indicators
            ?.indicate_if_any_independent_assessment_essential_1 == false
        ? "No"
        : "";
      this.independent_assessment_agency_name_essential_1 =
        this.response?.essential_indicators
          ?.independent_assessment_agency_name_essential_1 || "";
      this.is_dcs = this.response?.essential_indicators?.is_dcs
        ? "Yes"
        : this.response?.essential_indicators?.is_dcs == false
        ? "No"
        : "";
      this.targets_under_pat_achieved = this.response?.essential_indicators
        ?.targets_under_pat_achieved
        ? "Yes"
        : this.response?.essential_indicators?.targets_under_pat_achieved ==
          false
        ? "No"
        : "";
      this.remedial_action_taken =
        this.response?.essential_indicators?.remedial_action_taken || "";
      this.details_of_following_disclosures_related_to_water = this._utilities.nullToString(
        this.response?.essential_indicators
          ?.details_of_following_disclosures_related_to_water
      );
      this.indicate_if_any_independent_assessment_essential_3 = this.response
        ?.essential_indicators
        ?.indicate_if_any_independent_assessment_essential_3
        ? "Yes"
        : this.response?.essential_indicators
            ?.indicate_if_any_independent_assessment_essential_3 == false
        ? "No"
        : "";
      this.independent_assessment_agency_name_essential_3 =
        this.response?.essential_indicators
          ?.independent_assessment_agency_name_essential_3 || "";
    } else {
      this.details_of_total_energy_consumption = {
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
      this.indicate_if_any_independent_assessment_essential_1 = "";
      this.independent_assessment_agency_name_essential_1 = "";
      this.is_dcs = "";
      this.targets_under_pat_achieved = "";
      this.remedial_action_taken = "";

      this.details_of_following_disclosures_related_to_water = {
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
      this.indicate_if_any_independent_assessment_essential_3 = "";
      this.independent_assessment_agency_name_essential_3 = "";
    }
  }

  initialize() {
    this._emitter.emit({
      from: "one_to_three",
      data: {
        details_of_total_energy_consumption: this
          .details_of_total_energy_consumption,
        indicate_if_any_independent_assessment_essential_1:
          this.indicate_if_any_independent_assessment_essential_1 == "Yes"
            ? true
            : this.indicate_if_any_independent_assessment_essential_1 == "No"
            ? false
            : "",
        independent_assessment_agency_name_essential_1: this
          .independent_assessment_agency_name_essential_1,
        is_dcs: this.is_dcs == "Yes" ? true : this.is_dcs == "No" ? false : "",
        targets_under_pat_achieved:
          this.targets_under_pat_achieved == "Yes"
            ? true
            : this.targets_under_pat_achieved == "No"
            ? false
            : "",
        remedial_action_taken: this.remedial_action_taken,
        details_of_following_disclosures_related_to_water: this
          .details_of_following_disclosures_related_to_water,

        indicate_if_any_independent_assessment_essential_3:
          this.indicate_if_any_independent_assessment_essential_3 == "Yes"
            ? true
            : this.indicate_if_any_independent_assessment_essential_3 == "No"
            ? false
            : "",
        independent_assessment_agency_name_essential_3: this
          .independent_assessment_agency_name_essential_3,
      },
    });
  }

  setMonthlyData(res, isCurrent) {
    let totElectricity =
      parseInt(
        res?.details_of_total_energy_consumption?.total_electricity_consumption
          ?.current_month || "0"
      ) * 3600000;

    let totFuel =
      parseInt(
        res?.details_of_total_energy_consumption?.total_fuel_coal
          ?.current_month || "0"
      ) * 3600000;
    if (isCurrent) {
      this.details_of_total_energy_consumption.total_electricity_consumption.current_financial_year = totElectricity;
      this.details_of_total_energy_consumption.total_fuel_consumption.current_financial_year = totFuel;

      let totEn =
        parseFloat(
          res?.details_of_total_energy_consumption?.total_energy_consumption
            ?.in_joule || "0"
        ) +
        parseFloat(
          this.details_of_total_energy_consumption
            ?.energy_consumption_through_other_sources
            ?.current_financial_year || "0"
        );

      this.details_of_total_energy_consumption.total_energy_consumption.current_financial_year = totEn;
      //details_of_following_disclosures_related_to_water
      this.details_of_following_disclosures_related_to_water.surface_water.current_financial_year =
        res.details_of_following_disclosures_related_to_water?.surface_water?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.groundwater.current_financial_year =
        res.details_of_following_disclosures_related_to_water?.groundwater?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.third_party_water.current_financial_year =
        res.details_of_following_disclosures_related_to_water?.third_party_water?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.desalinated_water.current_financial_year =
        res.details_of_following_disclosures_related_to_water?.desalinated_water?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.others.current_financial_year =
        res.details_of_following_disclosures_related_to_water?.others?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.total_volume_of_water_withdrawal.current_financial_year =
        res.details_of_following_disclosures_related_to_water?.total_volume_of_water_withdrawal?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.total_volume_of_water_consumption.current_financial_year =
        res.details_of_following_disclosures_related_to_water?.total_volume_of_water_consumption?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.water_intensity_per_rupee.current_financial_year =
        res.details_of_following_disclosures_related_to_water?.water_intensity_per_rupee?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.water_intensity_optional.current_financial_year =
        res.details_of_following_disclosures_related_to_water?.water_intensity_optional?.current_financial_year;
    } else {
      this.details_of_total_energy_consumption.total_electricity_consumption.previous_financial_year = totElectricity;
      this.details_of_total_energy_consumption.total_fuel_consumption.previous_financial_year = totFuel;

      let totEn =
        parseFloat(
          res?.details_of_total_energy_consumption?.total_energy_consumption
            ?.in_joule || "0"
        ) +
        parseFloat(
          this.details_of_total_energy_consumption
            ?.energy_consumption_through_other_sources
            ?.previous_financial_year || "0"
        );

      this.details_of_total_energy_consumption.total_energy_consumption.previous_financial_year = totEn;
      //details_of_following_disclosures_related_to_water
      this.details_of_following_disclosures_related_to_water.surface_water.previous_financial_year =
        res.details_of_following_disclosures_related_to_water?.surface_water?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.groundwater.previous_financial_year =
        res.details_of_following_disclosures_related_to_water?.groundwater?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.third_party_water.previous_financial_year =
        res.details_of_following_disclosures_related_to_water?.third_party_water?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.desalinated_water.previous_financial_year =
        res.details_of_following_disclosures_related_to_water?.desalinated_water?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.others.previous_financial_year =
        res.details_of_following_disclosures_related_to_water?.others?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.total_volume_of_water_withdrawal.previous_financial_year =
        res.details_of_following_disclosures_related_to_water?.total_volume_of_water_withdrawal?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.total_volume_of_water_consumption.previous_financial_year =
        res.details_of_following_disclosures_related_to_water?.total_volume_of_water_consumption?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.water_intensity_per_rupee.previous_financial_year =
        res.details_of_following_disclosures_related_to_water?.water_intensity_per_rupee?.current_financial_year;

      this.details_of_following_disclosures_related_to_water.water_intensity_optional.previous_financial_year =
        res.details_of_following_disclosures_related_to_water?.water_intensity_optional?.current_financial_year;
    }
  }

  sumUp(mode, financial_year) {
    let val1 = "0",
      val2 = "0",
      val3 = "0",
      val4 = "0",
      val5 = "0",
      val6 = "0";
    if (mode == "1") {
      val1 =
        this.details_of_total_energy_consumption[
          "total_electricity_consumption"
        ][financial_year] || "0";
      val2 =
        this.details_of_total_energy_consumption["total_fuel_consumption"][
          financial_year
        ] || "0";
      val3 =
        this.details_of_total_energy_consumption[
          "energy_consumption_through_other_sources"
        ][financial_year] || "0";

      console.log(parseFloat(val1) + parseFloat(val2) + parseFloat(val3));
      this.details_of_total_energy_consumption["total_energy_consumption"][
        financial_year
      ] = parseFloat(val1) + parseFloat(val2) + parseFloat(val3);
    }
    if (mode == "2") {
      val1 =
        this.details_of_following_disclosures_related_to_water["surface_water"][
          financial_year
        ] || "0";
      val2 =
        this.details_of_following_disclosures_related_to_water["groundwater"][
          financial_year
        ] || "0";
      val3 =
        this.details_of_following_disclosures_related_to_water[
          "third_party_water"
        ][financial_year] || "0";

      val4 =
        this.details_of_following_disclosures_related_to_water[
          "desalinated_water"
        ][financial_year] || "0";

      val5 =
        this.details_of_following_disclosures_related_to_water["others"][
          financial_year
        ] || "0";

      this.details_of_following_disclosures_related_to_water[
        "total_volume_of_water_withdrawal"
      ][financial_year] =
        parseFloat(val1) +
        parseFloat(val2) +
        parseFloat(val3) +
        parseFloat(val4) +
        parseFloat(val5);
    }
  }
}
