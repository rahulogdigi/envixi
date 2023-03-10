import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-essential-six-to-ten",
  templateUrl: "./essential-six-to-ten.component.html",
  styleUrls: ["./essential-six-to-ten.component.scss"],
})
export class EssentialSixToTenComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  number_of_complaints: any = {
    current_financial_year: {
      sexual_harassment: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
      discrimination_at_workplace: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
      child_labour: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
      forced_labour: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
      wages: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
      others_human_rights_related_issued: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
    },
    previous_financial_year: {
      sexual_harassment: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
      discrimination_at_workplace: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
      child_labour: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
      forced_labour: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
      wages: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
      others_human_rights_related_issued: {
        filed_during_the_year: "",
        pending_resolution_at_the_end_of_year: "",
        remarks: "",
      },
    },
  };
  mechanisms_to_prevent_adverse_consequences_to_the_complainant_in_discrimination_and_harassment_cases: string =
    "";
  do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts: any =
    "";
  assessments_for_the_year: any = {
    child_labour_percentage_of_your_plants_and_offices: "",
    involuntary_labour_percentage_of_your_plants_and_offices: "",
    sexual_harassment_percentage_of_your_plants_and_offices: "",
    discrimination_at_workplace_percentage_of_your_plants_and_offices: "",
    wages_percentage_of_your_plants_and_offices: "",
    others_percentage_of_your_plants_and_offices: "",
  };
  provide_details_of_any_corrective_actions_taken: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  ngOnChanges(): void {
    if (this.response?.essential_indicators) {
      let obj = this._utilities.nullToString(
        this.response?.essential_indicators?.number_of_complaints
      );
      this.number_of_complaints = obj;
      this.mechanisms_to_prevent_adverse_consequences_to_the_complainant_in_discrimination_and_harassment_cases = this.response?.essential_indicators?.mechanisms_to_prevent_adverse_consequences_to_the_complainant_in_discrimination_and_harassment_cases;
      this.do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts =
        this.response?.essential_indicators
          ?.do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts ==
        true
          ? "Yes"
          : this.response?.essential_indicators
              ?.do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts ==
            false
          ? "No"
          : "";

      this.assessments_for_the_year = this._utilities.nullToString(
        this.response?.essential_indicators?.assessments_for_the_year
      );
      this.provide_details_of_any_corrective_actions_taken = this.response?.essential_indicators?.provide_details_of_any_corrective_actions_taken;
    } else {
      this.number_of_complaints = {
        current_financial_year: {
          sexual_harassment: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
          discrimination_at_workplace: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
          child_labour: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
          forced_labour: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
          wages: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
          others_human_rights_related_issued: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
        },
        previous_financial_year: {
          sexual_harassment: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
          discrimination_at_workplace: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
          child_labour: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
          forced_labour: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
          wages: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
          others_human_rights_related_issued: {
            filed_during_the_year: "",
            pending_resolution_at_the_end_of_year: "",
            remarks: "",
          },
        },
      };
      this.mechanisms_to_prevent_adverse_consequences_to_the_complainant_in_discrimination_and_harassment_cases =
        "";
      this.do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts =
        "";
      this.assessments_for_the_year = {
        child_labour_percentage_of_your_plants_and_offices: "",
        involuntary_labour_percentage_of_your_plants_and_offices: "",
        sexual_harassment_percentage_of_your_plants_and_offices: "",
        discrimination_at_workplace_percentage_of_your_plants_and_offices: "",
        wages_percentage_of_your_plants_and_offices: "",
        others_percentage_of_your_plants_and_offices: "",
      };
      this.provide_details_of_any_corrective_actions_taken = "";
    }
  }
  initialize() {
    this._emitter.emit({
      from: "six_to_ten",
      data: {
        number_of_complaints: this.number_of_complaints,
        mechanisms_to_prevent_adverse_consequences_to_the_complainant_in_discrimination_and_harassment_cases: this
          .mechanisms_to_prevent_adverse_consequences_to_the_complainant_in_discrimination_and_harassment_cases,
        do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts:
          this
            .do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts ==
          "Yes"
            ? true
            : this
                .do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts ==
              "No"
            ? false
            : "",
        assessments_for_the_year: this.assessments_for_the_year,
        provide_details_of_any_corrective_actions_taken: this
          .provide_details_of_any_corrective_actions_taken,
      },
    });
  }

  setMonthlyData(aggregatedObject, isCurrent) {
    if (isCurrent) {
      this.number_of_complaints.current_financial_year =
        aggregatedObject?.number_of_complaints?.current_financial_year;
    } else {
      this.number_of_complaints.previous_financial_year =
        aggregatedObject?.number_of_complaints?.current_financial_year;
    }
  }
}
