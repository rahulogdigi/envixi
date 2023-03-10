import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../../utils/common-functions.service";
@Component({
  selector: "app-ten-fifteen-leader-all",
  templateUrl: "./ten-fifteen-leader-all.component.html",
  styleUrls: ["./ten-fifteen-leader-all.component.scss"],
})
export class TenFifteenLeaderAllComponent implements OnInit {
  @Input() data: any = {};
  health_and_safety_management_system: any = {};

  safety_incident_number: any = {};
  measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place: any =
    "";

  number_of_complaints: any = {};
  assessment_of_the_year: any = {};
  details_of_any_corrective_action_taken: string = "";

  does_the_entity_extend_any_life_insurance_employees: string = "";
  does_the_entity_extend_any_life_insurance_workers: string = "";
  provide_the_measures_undertaken_by_the_entity: string = "";
  high_consequence_work_related_injury: any = {};
  does_the_entity_provide_transition_assistance_programs: string = "";
  details_on_assessment_of_value_chain_partners: any = {};
  details_of_any_corrective_actions_taken: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    if (this.data?.essential_indicators) {
      this.health_and_safety_management_system = this.data?.essential_indicators
        ?.health_and_safety_management_system || {
        a: "",
        b: "",
        c: "",
        d: "",
      };
      this.safety_incident_number = this.data?.essential_indicators
        ?.details_of_safety_related_incidents?.safety_incident_number || {
        ltifr: {
          employees: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
          workers: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
        },
        total_recordable_work_related_injuries: {
          employees: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
          workers: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
        },
        no_of_fatalities: {
          employees: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
          workers: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
        },
        high_consequence_work_related_injury: {
          employees: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
          workers: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
        },
      };

      this.measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place =
        this.data?.essential_indicators
          ?.measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place ||
        "";

      this.number_of_complaints = this.data?.essential_indicators
        ?.number_of_complaints || {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          working_conditions: {
            filed_during_the_year: "",
            pending_resolution_at_the_year_end: "",
            remarks: "",
          },
          healthy_and_safety: {
            filed_during_the_year: "",
            pending_resolution_at_the_year_end: "",
            remarks: "",
          },
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          working_conditions: {
            filed_during_the_year: "",
            pending_resolution_at_the_year_end: "",
            remarks: "",
          },
          healthy_and_safety: {
            filed_during_the_year: "",
            pending_resolution_at_the_year_end: "",
            remarks: "",
          },
        },
      };

      this.assessment_of_the_year = this.data?.essential_indicators
        ?.assessment_of_the_year || {
        health_and_safety_practices: {
          percentage_of_your_plants: "",
        },
        working_conditions: {
          percentage_of_your_plants: "",
        },
      };

      this.details_of_any_corrective_action_taken =
        this.data?.essential_indicators
          ?.details_of_any_corrective_action_taken || "";

      this.does_the_entity_extend_any_life_insurance_employees =
        this.data?.leadership_indicators
          ?.does_the_entity_extend_any_life_insurance_employees || "";
      this.does_the_entity_extend_any_life_insurance_workers =
        this.data?.leadership_indicators
          ?.does_the_entity_extend_any_life_insurance_workers || "";
      this.provide_the_measures_undertaken_by_the_entity =
        this.data?.leadership_indicators
          ?.provide_the_measures_undertaken_by_the_entity || "";

      this.high_consequence_work_related_injury = this.data
        ?.leadership_indicators?.high_consequence_work_related_injury || {
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

      this.does_the_entity_provide_transition_assistance_programs =
        this.data?.leadership_indicators
          ?.does_the_entity_provide_transition_assistance_programs || "";

      this.details_on_assessment_of_value_chain_partners = this.data
        ?.leadership_indicators
        ?.details_on_assessment_of_value_chain_partners || {
        health_and_safety_practices: {
          percentage_of_value_partners: "",
        },
        working_conditions: {
          percentage_of_value_partners: "",
        },
      };

      this.details_of_any_corrective_actions_taken =
        this.data?.leadership_indicators
          ?.details_of_any_corrective_actions_taken || "";
    }
  }
}
