import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-iii-leaderhip-indicator",
  templateUrl: "./principle-iii-leaderhip-indicator.component.html",
  styleUrls: ["./principle-iii-leaderhip-indicator.component.scss"],
})
export class PrincipleIiiLeaderhipIndicatorComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  does_the_entity_extend_any_life_insurance_employees: string = "";
  does_the_entity_extend_any_life_insurance_workers: string = "";
  provide_the_measures_undertaken_by_the_entity: string = "";
  high_consequence_work_related_injury: any = {
    total_number_of_affected_employees_or_workers: {
      current_financial_year: {
        year: this._utilities.selectedFinancialYear,
        employees: "",
        workers: "",
      },
      previous_financial_year: {
        year: this._utilities.previousFinancialYear,
        employees: "",
        workers: "",
      },
    },
    no_of_employees_or_workers_that_are_rehabilitated: {
      current_financial_year: {
        year: this._utilities.selectedFinancialYear,
        employees: "",
        workers: "",
      },
      previous_financial_year: {
        year: this._utilities.previousFinancialYear,
        employees: "",
        workers: "",
      },
    },
  };
  does_the_entity_provide_transition_assistance_programs: string = "";
  details_on_assessment_of_value_chain_partners: any = {
    health_and_safety_practices: {
      percentage_of_value_partners: "",
    },
    working_conditions: {
      percentage_of_value_partners: "",
    },
  };
  details_of_any_corrective_actions_taken: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    if (this.response?.leadership_indicators) {
      this.high_consequence_work_related_injury = this._utilities.nullToString(
        this.response?.leadership_indicators
          ?.high_consequence_work_related_injury
      );
      this.details_on_assessment_of_value_chain_partners = this._utilities.nullToString(
        this.response?.leadership_indicators
          ?.details_on_assessment_of_value_chain_partners
      );
      this.does_the_entity_extend_any_life_insurance_employees =
        this.response?.leadership_indicators
          ?.does_the_entity_extend_any_life_insurance_employees || "";
      this.does_the_entity_extend_any_life_insurance_workers =
        this.response?.leadership_indicators
          ?.does_the_entity_extend_any_life_insurance_workers || "";
      this.provide_the_measures_undertaken_by_the_entity =
        this.response?.leadership_indicators
          ?.provide_the_measures_undertaken_by_the_entity || "";
      this.does_the_entity_provide_transition_assistance_programs =
        this.response?.leadership_indicators
          ?.does_the_entity_provide_transition_assistance_programs || "";
      this.details_of_any_corrective_actions_taken =
        this.response?.leadership_indicators
          ?.details_of_any_corrective_actions_taken || "";
    } else {
      this.does_the_entity_extend_any_life_insurance_employees = "";
      this.does_the_entity_extend_any_life_insurance_workers = "";
      this.provide_the_measures_undertaken_by_the_entity = "";
      this.high_consequence_work_related_injury = {
        total_number_of_affected_employees_or_workers: {
          current_financial_year: {
            year: this._utilities.selectedFinancialYear,
            employees: "",
            workers: "",
          },
          previous_financial_year: {
            year: this._utilities.previousFinancialYear,
            employees: "",
            workers: "",
          },
        },
        no_of_employees_or_workers_that_are_rehabilitated: {
          current_financial_year: {
            year: this._utilities.selectedFinancialYear,
            employees: "",
            workers: "",
          },
          previous_financial_year: {
            year: this._utilities.previousFinancialYear,
            employees: "",
            workers: "",
          },
        },
      };
      this.does_the_entity_provide_transition_assistance_programs = "";
      this.details_on_assessment_of_value_chain_partners = {
        health_and_safety_practices: {
          percentage_of_value_partners: "",
        },
        working_conditions: {
          percentage_of_value_partners: "",
        },
      };
      this.details_of_any_corrective_actions_taken = "";
    }
  }

  initialize() {
    console.log(this.response);
    this._emitter.emit({
      from: "leadership_indicator",
      data: {
        does_the_entity_extend_any_life_insurance_employees: this
          .does_the_entity_extend_any_life_insurance_employees,
        does_the_entity_extend_any_life_insurance_workers: this
          .does_the_entity_extend_any_life_insurance_workers,
        provide_the_measures_undertaken_by_the_entity: this
          .provide_the_measures_undertaken_by_the_entity,
        high_consequence_work_related_injury: this
          .high_consequence_work_related_injury,
        does_the_entity_provide_transition_assistance_programs: this
          .does_the_entity_provide_transition_assistance_programs,
        details_on_assessment_of_value_chain_partners: this
          .details_on_assessment_of_value_chain_partners,
        details_of_any_corrective_actions_taken: this
          .details_of_any_corrective_actions_taken,
      },
    });
  }
}
