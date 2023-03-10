import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-vi-four-to-six",
  templateUrl: "./principle-vi-four-to-six.component.html",
  styleUrls: ["./principle-vi-four-to-six.component.scss"],
})
export class PrincipleViFourToSixComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  mechanism_for_zero_liquid_discharge: any = "";
  mechanism_for_zero_liquid_discharge_details: string = "";
  details_of_air_emissions: any = {
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
  indicate_if_any_independent_assessment_essential_5: string = "";
  independent_assessment_agency_name_essential_5: string = "";
  details_of_greenhouse_gas_emissions: any = {
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
  indicate_if_any_independent_assessment_essential_6: string = "";
  independent_assessment_agency_name_essential_6: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  ngOnChanges(): void {
    if (this.response?.essential_indicators) {
      this.mechanism_for_zero_liquid_discharge = this.response
        ?.essential_indicators?.mechanism_for_zero_liquid_discharge
        ? "Yes"
        : this.response?.essential_indicators
            ?.mechanism_for_zero_liquid_discharge == false
        ? "No"
        : "";
      this.mechanism_for_zero_liquid_discharge_details =
        this.response?.essential_indicators
          ?.mechanism_for_zero_liquid_discharge_details || "";
      this.details_of_air_emissions = this._utilities.nullToString(
        this.response?.essential_indicators?.details_of_air_emissions
      );
      this.indicate_if_any_independent_assessment_essential_5 = this.response
        ?.essential_indicators
        ?.indicate_if_any_independent_assessment_essential_5
        ? "Yes"
        : this.response?.essential_indicators
            ?.indicate_if_any_independent_assessment_essential_5 == false
        ? "No"
        : "";
      this.independent_assessment_agency_name_essential_5 =
        this.response?.essential_indicators
          ?.independent_assessment_agency_name_essential_5 || "";
      this.details_of_greenhouse_gas_emissions = this._utilities.nullToString(
        this.response?.essential_indicators?.details_of_greenhouse_gas_emissions
      );
      this.indicate_if_any_independent_assessment_essential_6 = this.response
        ?.essential_indicators
        ?.indicate_if_any_independent_assessment_essential_6
        ? "Yes"
        : this.response?.essential_indicators
            ?.indicate_if_any_independent_assessment_essential_6 == false
        ? "No"
        : "";
      this.independent_assessment_agency_name_essential_6 =
        this.response?.essential_indicators
          ?.independent_assessment_agency_name_essential_6 || "";
    } else {
      this.mechanism_for_zero_liquid_discharge = "";
      this.mechanism_for_zero_liquid_discharge_details = "";
      this.details_of_air_emissions = {
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
      this.indicate_if_any_independent_assessment_essential_5 = "";
      this.independent_assessment_agency_name_essential_5 = "";
      this.details_of_greenhouse_gas_emissions = {
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
      this.indicate_if_any_independent_assessment_essential_6 = "";
      this.independent_assessment_agency_name_essential_6 = "";
    }
  }
  initialize() {
    this._emitter.emit({
      from: "four_to_six",
      data: {
        mechanism_for_zero_liquid_discharge:
          this.mechanism_for_zero_liquid_discharge == "Yes"
            ? true
            : this.mechanism_for_zero_liquid_discharge == "No"
            ? false
            : "",
        mechanism_for_zero_liquid_discharge_details: this
          .mechanism_for_zero_liquid_discharge_details,
        details_of_air_emissions: this.details_of_air_emissions,
        indicate_if_any_independent_assessment_essential_5:
          this.indicate_if_any_independent_assessment_essential_5 == "Yes"
            ? true
            : this.indicate_if_any_independent_assessment_essential_5 == "No"
            ? false
            : "",
        independent_assessment_agency_name_essential_5: this
          .independent_assessment_agency_name_essential_5,
        details_of_greenhouse_gas_emissions: this
          .details_of_greenhouse_gas_emissions,
        indicate_if_any_independent_assessment_essential_6:
          this.indicate_if_any_independent_assessment_essential_6 == "Yes"
            ? true
            : this.indicate_if_any_independent_assessment_essential_6 == "No"
            ? false
            : "",
        independent_assessment_agency_name_essential_6: this
          .independent_assessment_agency_name_essential_6,
      },
    });
  }

  setMonthlyData(res, isCurrent) {
    if (isCurrent) {
      this.details_of_greenhouse_gas_emissions.total_scope_1_emissions.unit =
        res.details_of_greenhouse_gas_emissions?.total_scope_1_emissions?.unit;
      this.details_of_greenhouse_gas_emissions.total_scope_1_emissions.current_financial_year =
        res.details_of_greenhouse_gas_emissions?.total_scope_1_emissions?.current_financial_year;

      this.details_of_greenhouse_gas_emissions.total_scope_2_emissions.unit =
        res.details_of_greenhouse_gas_emissions?.total_scope_2_emissions?.unit;
      this.details_of_greenhouse_gas_emissions.total_scope_2_emissions.current_financial_year =
        res.details_of_greenhouse_gas_emissions?.total_scope_2_emissions?.current_financial_year;

      this.details_of_greenhouse_gas_emissions.total_scope_1_2_emissions_per_rupee_of_turnover.unit =
        res.details_of_greenhouse_gas_emissions?.total_scope_1_2_emissions_per_rupee_of_turnover?.unit;
      this.details_of_greenhouse_gas_emissions.total_scope_1_2_emissions_per_rupee_of_turnover.current_financial_year =
        res.details_of_greenhouse_gas_emissions?.total_scope_1_2_emissions_per_rupee_of_turnover?.current_financial_year;

      this.details_of_greenhouse_gas_emissions.total_scope_1_2_emissions_intensity.unit =
        res.details_of_greenhouse_gas_emissions?.total_scope_1_2_emissions_intensity?.unit;
      this.details_of_greenhouse_gas_emissions.total_scope_1_2_emissions_intensity.current_financial_year =
        res.details_of_greenhouse_gas_emissions?.total_scope_1_2_emissions_intensity?.current_financial_year;

      //Please provide details of air

      this.details_of_air_emissions.nox.unit =
        res.details_of_air_emissions?.nox?.unit;
      this.details_of_air_emissions.nox.current_financial_year =
        res.details_of_air_emissions?.nox?.current_financial_year;

      this.details_of_air_emissions.sox.unit =
        res.details_of_air_emissions?.sox?.unit;
      this.details_of_air_emissions.sox.current_financial_year =
        res.details_of_air_emissions?.sox?.current_financial_year;

      this.details_of_air_emissions.pm.unit =
        res.details_of_air_emissions?.pm?.unit;
      this.details_of_air_emissions.pm.current_financial_year =
        res.details_of_air_emissions?.pm?.current_financial_year;

      this.details_of_air_emissions.pop.unit =
        res.details_of_air_emissions?.pop?.unit;
      this.details_of_air_emissions.pop.current_financial_year =
        res.details_of_air_emissions?.pop?.current_financial_year;

      this.details_of_air_emissions.voc.unit =
        res.details_of_air_emissions?.voc?.unit;
      this.details_of_air_emissions.voc.current_financial_year =
        res.details_of_air_emissions?.voc?.current_financial_year;

      this.details_of_air_emissions.hap.unit =
        res.details_of_air_emissions?.hap?.unit;
      this.details_of_air_emissions.hap.current_financial_year =
        res.details_of_air_emissions?.hap?.current_financial_year;

      this.details_of_air_emissions.other.unit =
        res.details_of_air_emissions?.other?.unit;
      this.details_of_air_emissions.other.current_financial_year =
        res.details_of_air_emissions?.other?.current_financial_year;
    } else {
      // this.details_of_greenhouse_gas_emissions.total_scope_1_emissions.unit =
      //   res.details_of_greenhouse_gas_emissions?.total_scope_1_emissions?.unit;
      // this.details_of_greenhouse_gas_emissions.total_scope_1_emissions.previous_financial_year =
      //   res.details_of_greenhouse_gas_emissions?.total_scope_1_emissions?.current_financial_year;

      // this.details_of_greenhouse_gas_emissions.total_scope_1_2_emissions_per_rupee_of_turnover.unit =
      //   res.details_of_greenhouse_gas_emissions?.total_scope_1_2_emissions_per_rupee_of_turnover?.unit;
      // this.details_of_greenhouse_gas_emissions.total_scope_1_2_emissions_per_rupee_of_turnover.previous_financial_year =
      //   res.details_of_greenhouse_gas_emissions?.total_scope_1_2_emissions_per_rupee_of_turnover?.current_financial_year;

      // this.details_of_greenhouse_gas_emissions.total_scope_2_emissions.unit =
      //   res.details_of_greenhouse_gas_emissions?.total_scope_2_emissions?.unit;
      // this.details_of_greenhouse_gas_emissions.total_scope_2_emissions.previous_financial_year =
      //   res.details_of_greenhouse_gas_emissions?.total_scope_2_emissions?.current_financial_year;

      // this.details_of_greenhouse_gas_emissions.total_scope_1_2_emissions_intensity.unit =
      //   res.details_of_greenhouse_gas_emissions?.total_scope_1_2_emissions_intensity?.unit;
      // this.details_of_greenhouse_gas_emissions.total_scope_1_2_emissions_intensity.previous_financial_year =
      //   res.details_of_greenhouse_gas_emissions?.total_scope_1_2_emissions_intensity?.current_financial_year;

      //Please provide details of air

      this.details_of_air_emissions.nox.previous_financial_year =
        res.details_of_air_emissions?.nox?.previous_financial_year;

      this.details_of_air_emissions.sox.previous_financial_year =
        res.details_of_air_emissions?.sox?.previous_financial_year;

      this.details_of_air_emissions.pm.previous_financial_year =
        res.details_of_air_emissions?.pm?.previous_financial_year;

      this.details_of_air_emissions.pop.previous_financial_year =
        res.details_of_air_emissions?.pop?.previous_financial_year;

      this.details_of_air_emissions.voc.previous_financial_year =
        res.details_of_air_emissions?.voc?.previous_financial_year;

      this.details_of_air_emissions.hap.previous_financial_year =
        res.details_of_air_emissions?.hap?.previous_financial_year;

      this.details_of_air_emissions.other.previous_financial_year =
        res.details_of_air_emissions?.other?.previous_financial_year;
    }
  }
}
