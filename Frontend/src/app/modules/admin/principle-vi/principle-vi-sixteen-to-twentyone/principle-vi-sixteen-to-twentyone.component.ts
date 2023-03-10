import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";

@Component({
  selector: "app-principle-vi-sixteen-to-twentyone",
  templateUrl: "./principle-vi-sixteen-to-twentyone.component.html",
  styleUrls: ["./principle-vi-sixteen-to-twentyone.component.scss"],
})
export class PrincipleViSixteenToTwentyoneComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  details_of_total_Scope_3_emissions: any = {
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
  indicate_if_any_independent_assessment_leader_4: string = "";
  indicate_if_any_independent_assessment_name_leader_4: string = "";
  details_of_significant_direct_indirect_impact_on_biodiversity: string = "";
  used_innovative_technology: any[] = [
    {
      initiative_undertaken: "",
      details_of_the_initiative: "",
      web_link: "",
      outcome_of_the_initiative: "",
    },
  ];
  business_continuity_and_disaster_management_plan: string = "";
  business_continuity_and_disaster_management_plan_web_link: string = "";
  significant_adverse_impact_to_the_environment: string = "";
  percentage_of_value_chain_partners: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    if (this.response?.leadership_indicators) {
      this.details_of_total_Scope_3_emissions = this._utilities.nullToString(
        this.response?.leadership_indicators?.details_of_total_Scope_3_emissions
      );
      this.indicate_if_any_independent_assessment_leader_4 = this.response
        ?.leadership_indicators?.indicate_if_any_independent_assessment_leader_4
        ? "Yes"
        : this.response?.leadership_indicators
            ?.indicate_if_any_independent_assessment_leader_4 == false
        ? "No"
        : "";
      this.indicate_if_any_independent_assessment_name_leader_4 =
        this.response?.leadership_indicators
          ?.indicate_if_any_independent_assessment_name_leader_4 || "";
      this.details_of_significant_direct_indirect_impact_on_biodiversity =
        this.response?.leadership_indicators
          ?.details_of_significant_direct_indirect_impact_on_biodiversity || "";
      this.used_innovative_technology = this._utilities.arrayNullToString(
        this.response?.leadership_indicators?.used_innovative_technology
      );
      if (!this.used_innovative_technology.length) {
        this.used_innovative_technology = [
          {
            initiative_undertaken: "",
            details_of_the_initiative: "",
            web_link: "",
            outcome_of_the_initiative: "",
          },
        ];
      }
      this.business_continuity_and_disaster_management_plan =
        this.response?.leadership_indicators
          ?.business_continuity_and_disaster_management_plan || "";
      this.business_continuity_and_disaster_management_plan_web_link =
        this.response?.leadership_indicators
          ?.business_continuity_and_disaster_management_plan_web_link || "";
      this.significant_adverse_impact_to_the_environment =
        this.response?.leadership_indicators
          ?.significant_adverse_impact_to_the_environment || "";
      this.percentage_of_value_chain_partners =
        this.response?.leadership_indicators
          ?.percentage_of_value_chain_partners || "";
    } else {
      this.details_of_total_Scope_3_emissions = {
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
      this.indicate_if_any_independent_assessment_leader_4 = "";
      this.indicate_if_any_independent_assessment_name_leader_4 = "";
      this.details_of_significant_direct_indirect_impact_on_biodiversity = "";
      this.used_innovative_technology = [
        {
          initiative_undertaken: "",
          details_of_the_initiative: "",
          web_link: "",
          outcome_of_the_initiative: "",
        },
      ];
      this.business_continuity_and_disaster_management_plan = "";
      this.business_continuity_and_disaster_management_plan_web_link = "";
      this.significant_adverse_impact_to_the_environment = "";
      this.percentage_of_value_chain_partners = "";
    }
  }

  setMonthlyData(res, isCurrent) {
    if (isCurrent) {
      this.percentage_of_value_chain_partners =
        res.percentage_of_value_chain_partners;
      this.used_innovative_technology = res.used_innovative_technology;
    }
  }

  addField(mode) {
    let flag = 1;
    if (mode == 1)
      this.used_innovative_technology.filter((e) => {
        if (
          e?.initiative_undertaken.trim().length == 0 ||
          e?.details_of_the_initiative.trim().length == 0 ||
          e?.web_link.trim().length == 0 ||
          e?.outcome_of_the_initiative.trim().length == 0
        )
          flag = 0;
      });
    if (flag == 0) {
      this._emitter.emit({
        msg: "Please fill all fields of Leadership Indicators point 6",
      });
      return;
    }
    if (this.used_innovative_technology.length < 15)
      this.used_innovative_technology.push({
        initiative_undertaken: "",
        details_of_the_initiative: "",
        web_link: "",
        outcome_of_the_initiative: "",
      });
  }
  removeField(i, mode) {
    if (mode == 1 && this.used_innovative_technology.length > 1)
      this.used_innovative_technology.splice(i, 1);
  }
  initialize() {
    this._emitter.emit({
      from: "sixteen_to_twentyone",
      data: {
        details_of_total_Scope_3_emissions: this
          .details_of_total_Scope_3_emissions,
        indicate_if_any_independent_assessment_leader_4:
          this.indicate_if_any_independent_assessment_leader_4 == "Yes"
            ? true
            : this.indicate_if_any_independent_assessment_leader_4 == "No"
            ? false
            : "",
        indicate_if_any_independent_assessment_name_leader_4: this
          .indicate_if_any_independent_assessment_name_leader_4,
        details_of_significant_direct_indirect_impact_on_biodiversity: this
          .details_of_significant_direct_indirect_impact_on_biodiversity,
        used_innovative_technology: this.used_innovative_technology.filter(
          (e) => e.initiative_undertaken.length > 0
        ),
        business_continuity_and_disaster_management_plan: this
          .business_continuity_and_disaster_management_plan,
        business_continuity_and_disaster_management_plan_web_link: this
          .business_continuity_and_disaster_management_plan_web_link,
        significant_adverse_impact_to_the_environment: this
          .significant_adverse_impact_to_the_environment,
        percentage_of_value_chain_partners: this
          .percentage_of_value_chain_partners,
      },
    });
  }
}
