import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-v-leadership-one-to-five",
  templateUrl: "./principle-v-leadership-one-to-five.component.html",
  styleUrls: ["./principle-v-leadership-one-to-five.component.scss"],
})
export class PrincipleVLeadershipOneToFiveComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  details_of_a_business_process_being_modified: string = "";
  details_of_the_scope_and_coverage_of_any_human_rights_due_diligence_conducted: string =
    "";
  is_the_premise_or_office_of_the_entity_accessible_to_differently_abled_visitors: string =
    "";
  details_on_assessment_of_value_chain_partners: any = {
    sexual_harassment_percentage_of_value_chain_partners: "",
    discrimination_at_workplace_percentage_of_value_chain_partners: "",
    child_labour_percentage_of_value_chain_partners: "",
    involuntary_labour_percentage_of_value_chain_partners: "",
    wages_percentage_of_value_chain_partners: "",
    others_percentage_of_value_chain_partners: "",
  };
  provide_details_of_any_corrective_actions_taken: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  ngOnChanges(): void {
    if (this.response?.leadership_indicators) {
      this.details_of_a_business_process_being_modified = this.response?.leadership_indicators?.details_of_a_business_process_being_modified;
      this.details_of_the_scope_and_coverage_of_any_human_rights_due_diligence_conducted = this.response?.leadership_indicators?.details_of_the_scope_and_coverage_of_any_human_rights_due_diligence_conducted;
      this.is_the_premise_or_office_of_the_entity_accessible_to_differently_abled_visitors =
        this.response?.leadership_indicators
          ?.is_the_premise_or_office_of_the_entity_accessible_to_differently_abled_visitors ||
        "";

      let obj = this._utilities.nullToString(
        this.response?.leadership_indicators
          ?.details_on_assessment_of_value_chain_partners
      );
      this.details_on_assessment_of_value_chain_partners = obj;

      this.provide_details_of_any_corrective_actions_taken = this.response?.leadership_indicators?.provide_details_of_any_corrective_actions_taken;
    } else {
      this.details_of_a_business_process_being_modified = "";
      this.details_of_the_scope_and_coverage_of_any_human_rights_due_diligence_conducted =
        "";
      this.is_the_premise_or_office_of_the_entity_accessible_to_differently_abled_visitors =
        "";
      this.details_on_assessment_of_value_chain_partners = {
        sexual_harassment_percentage_of_value_chain_partners: "",
        discrimination_at_workplace_percentage_of_value_chain_partners: "",
        child_labour_percentage_of_value_chain_partners: "",
        involuntary_labour_percentage_of_value_chain_partners: "",
        wages_percentage_of_value_chain_partners: "",
        others_percentage_of_value_chain_partners: "",
      };
      this.provide_details_of_any_corrective_actions_taken = "";
    }
  }
  initialize() {
    this._emitter.emit({
      from: "leadership_indicator",
      data: {
        details_of_a_business_process_being_modified: this
          .details_of_a_business_process_being_modified,
        details_of_the_scope_and_coverage_of_any_human_rights_due_diligence_conducted: this
          .details_of_the_scope_and_coverage_of_any_human_rights_due_diligence_conducted,
        is_the_premise_or_office_of_the_entity_accessible_to_differently_abled_visitors: this
          .is_the_premise_or_office_of_the_entity_accessible_to_differently_abled_visitors,
        details_on_assessment_of_value_chain_partners: this
          .details_on_assessment_of_value_chain_partners,
        provide_details_of_any_corrective_actions_taken: this
          .provide_details_of_any_corrective_actions_taken,
      },
    });
  }

  setMonthlyData(aggregatedObject, isCurrent) {
    if (isCurrent) {
      this.details_on_assessment_of_value_chain_partners =
        aggregatedObject?.details_on_assessment_of_value_chain_partners;
    }
  }
}
