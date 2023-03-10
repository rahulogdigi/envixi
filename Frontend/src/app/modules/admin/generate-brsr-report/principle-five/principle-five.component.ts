import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-five",
  templateUrl: "./principle-five.component.html",
  styleUrls: ["./principle-five.component.scss"],
})
export class PrincipleFiveComponent implements OnInit {
  @Input() data: any = {};
  employees_and_workers_who_have_been_provided_training_on_human_rights: any = {};
  details_of_minimum_wages_paid_to_employees: any = {};
  details_of_remuneration: any = {};
  do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business: any =
    "";
  describe_the_internal_mechanisms_in_place_to_redress_grievances: string = "";

  number_of_complaints: any = {};
  mechanisms_to_prevent_adverse_consequences_to_the_complainant_in_discrimination_and_harassment_cases: string =
    "";
  do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts: any =
    "";
  assessments_for_the_year: any = {};
  provide_details_of_any_corrective_actions_taken: string = "";

  details_of_a_business_process_being_modified: string = "";
  details_of_the_scope_and_coverage_of_any_human_rights_due_diligence_conducted: string =
    "";
  is_the_premise_or_office_of_the_entity_accessible_to_differently_abled_visitors: string =
    "";
  details_on_assessment_of_value_chain_partners: any = {};
  provide_details_of_any_corrective_actions_taken_1: string = "";

  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.employees_and_workers_who_have_been_provided_training_on_human_rights = this
      .data?.essential_indicators
      ?.employees_and_workers_who_have_been_provided_training_on_human_rights || {
      current_financial_year: {
        employees: {
          permanent: {
            total_a: "",
            no_of_employees_or_workers_b: "",
            percentage_b_divided_by_a: "",
          },
          other_permanent: {
            total_a: "",
            no_of_employees_or_workers_b: "",
            percentage_b_divided_by_a: "",
          },
          total_employees: {
            total_a: "",
            no_of_employees_or_workers_b: "",
            percentage_b_divided_by_a: "",
          },
        },
        workers: {
          permanent: {
            total_a: "",
            no_of_employees_or_workers_b: "",
            percentage_b_divided_by_a: "",
          },
          other_permanent: {
            total_a: "",
            no_of_employees_or_workers_b: "",
            percentage_b_divided_by_a: "",
          },
          total_workers: {
            total_a: "",
            no_of_employees_or_workers_b: "",
            percentage_b_divided_by_a: "",
          },
        },
      },
      previous_financial_year: {
        employees: {
          permanent: {
            total_c: "",
            no_of_employees_or_workers_d: "",
            percentage_d_divided_by_c: "",
          },
          other_permanent: {
            total_c: "",
            no_of_employees_or_workers_d: "",
            percentage_d_divided_by_c: "",
          },
          total_employees: {
            total_c: "",
            no_of_employees_or_workers_d: "",
            percentage_d_divided_by_c: "",
          },
        },
        workers: {
          permanent: {
            total_c: "",
            no_of_employees_or_workers_d: "",
            percentage_d_divided_by_c: "",
          },
          other_permanent: {
            total_c: "",
            no_of_employees_or_workers_d: "",
            percentage_d_divided_by_c: "",
          },
          total_workers: {
            total_c: "",
            no_of_employees_or_workers_d: "",
            percentage_d_divided_by_c: "",
          },
        },
      },
    };

    this.details_of_minimum_wages_paid_to_employees = this.data
      ?.essential_indicators?.details_of_minimum_wages_paid_to_employees || {
      current_financial_year: {
        employees: {
          permanent_male: {
            total_a: "",
            equal_to_minimum_wage_no_b: "",
            equal_to_minimum_wage_no_b_divided_by_a: "",
            more_than_minimum_wage_no_c: "",
            more_than_minimum_wage_no_c_divided_by_a: "",
          },
          permanent_female: {
            total_a: "",
            equal_to_minimum_wage_no_b: "",
            equal_to_minimum_wage_no_b_divided_by_a: "",
            more_than_minimum_wage_no_c: "",
            more_than_minimum_wage_no_c_divided_by_a: "",
          },
          other_than_permanent_male: {
            total_a: "",
            equal_to_minimum_wage_no_b: "",
            equal_to_minimum_wage_no_b_divided_by_a: "",
            more_than_minimum_wage_no_c: "",
            more_than_minimum_wage_no_c_divided_by_a: "",
          },
          other_than_permanent_female: {
            total_a: "",
            equal_to_minimum_wage_no_b: "",
            equal_to_minimum_wage_no_b_divided_by_a: "",
            more_than_minimum_wage_no_c: "",
            more_than_minimum_wage_no_c_divided_by_a: "",
          },
        },
        workers: {
          permanent_male: {
            total_a: "",
            equal_to_minimum_wage_no_b: "",
            equal_to_minimum_wage_no_b_divided_by_a: "",
            more_than_minimum_wage_no_c: "",
            more_than_minimum_wage_no_c_divided_by_a: "",
          },
          permanent_female: {
            total_a: "",
            equal_to_minimum_wage_no_b: "",
            equal_to_minimum_wage_no_b_divided_by_a: "",
            more_than_minimum_wage_no_c: "",
            more_than_minimum_wage_no_c_divided_by_a: "",
          },
          other_than_permanent_male: {
            total_a: "",
            equal_to_minimum_wage_no_b: "",
            equal_to_minimum_wage_no_b_divided_by_a: "",
            more_than_minimum_wage_no_c: "",
            more_than_minimum_wage_no_c_divided_by_a: "",
          },
          other_than_permanent_female: {
            total_a: "",
            equal_to_minimum_wage_no_b: "",
            equal_to_minimum_wage_no_b_divided_by_a: "",
            more_than_minimum_wage_no_c: "",
            more_than_minimum_wage_no_c_divided_by_a: "",
          },
        },
      },
      previous_financial_year: {
        employees: {
          permanent_male: {
            total_d: "",
            equal_to_minimum_wage_no_e: "",
            equal_to_minimum_wage_no_e_divided_by_d: "",
            more_than_minimum_wage_no_f: "",
            more_than_minimum_wage_no_f_divided_by_d: "",
          },
          permanent_female: {
            total_d: "",
            equal_to_minimum_wage_no_e: "",
            equal_to_minimum_wage_no_e_divided_by_d: "",
            more_than_minimum_wage_no_f: "",
            more_than_minimum_wage_no_f_divided_by_d: "",
          },
          other_than_permanent_male: {
            total_d: "",
            equal_to_minimum_wage_no_e: "",
            equal_to_minimum_wage_no_e_divided_by_d: "",
            more_than_minimum_wage_no_f: "",
            more_than_minimum_wage_no_f_divided_by_d: "",
          },
          other_than_permanent_female: {
            total_d: "",
            equal_to_minimum_wage_no_e: "",
            equal_to_minimum_wage_no_e_divided_by_d: "",
            more_than_minimum_wage_no_f: "",
            more_than_minimum_wage_no_f_divided_by_d: "",
          },
        },
        workers: {
          permanent_male: {
            total_d: "",
            equal_to_minimum_wage_no_e: "",
            equal_to_minimum_wage_no_e_divided_by_d: "",
            more_than_minimum_wage_no_f: "",
            more_than_minimum_wage_no_f_divided_by_d: "",
          },
          permanent_female: {
            total_d: "",
            equal_to_minimum_wage_no_e: "",
            equal_to_minimum_wage_no_e_divided_by_d: "",
            more_than_minimum_wage_no_f: "",
            more_than_minimum_wage_no_f_divided_by_d: "",
          },
          other_than_permanent_male: {
            total_d: "",
            equal_to_minimum_wage_no_e: "",
            equal_to_minimum_wage_no_e_divided_by_d: "",
            more_than_minimum_wage_no_f: "",
            more_than_minimum_wage_no_f_divided_by_d: "",
          },
          other_than_permanent_female: {
            total_d: "",
            equal_to_minimum_wage_no_e: "",
            equal_to_minimum_wage_no_e_divided_by_d: "",
            more_than_minimum_wage_no_f: "",
            more_than_minimum_wage_no_f_divided_by_d: "",
          },
        },
      },
    };

    this.details_of_remuneration = this.data?.essential_indicators
      ?.details_of_remuneration || {
      boards_of_directors: {
        male: {
          number: "",
          median_remuneration: "",
        },
        female: {
          number: "",
          median_remuneration: "",
        },
      },
      key_managerial: {
        male: {
          number: "",
          median_remuneration: "",
        },
        female: {
          number: "",
          median_remuneration: "",
        },
      },
      other_than_bod_and_kmp: {
        male: {
          number: "",
          median_remuneration: "",
        },
        female: {
          number: "",
          median_remuneration: "",
        },
      },
      workers: {
        male: {
          number: "",
          median_remuneration: "",
        },
        female: {
          number: "",
          median_remuneration: "",
        },
      },
    };

    this.do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business =
      this.data?.essential_indicators
        ?.do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business ||
      "";

    this.describe_the_internal_mechanisms_in_place_to_redress_grievances =
      this.data?.essential_indicators
        ?.describe_the_internal_mechanisms_in_place_to_redress_grievances || "";

    this.number_of_complaints = this.data?.essential_indicators
      ?.number_of_complaints || {
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
      this.data?.essential_indicators
        ?.mechanisms_to_prevent_adverse_consequences_to_the_complainant_in_discrimination_and_harassment_cases ||
      "";

    this.do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts =
      this.data?.essential_indicators
        ?.do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts ||
      "";

    this.assessments_for_the_year = this.data?.essential_indicators
      ?.assessments_for_the_year || {
      child_labour_percentage_of_your_plants_and_offices: "",
      involuntary_labour_percentage_of_your_plants_and_offices: "",
      sexual_harassment_percentage_of_your_plants_and_offices: "",
      discrimination_at_workplace_percentage_of_your_plants_and_offices: "",
      wages_percentage_of_your_plants_and_offices: "",
      others_percentage_of_your_plants_and_offices: "",
    };

    this.provide_details_of_any_corrective_actions_taken =
      this.data?.essential_indicators
        ?.provide_details_of_any_corrective_actions_taken || "";

    this.details_of_a_business_process_being_modified =
      this.data?.leadership_indicators
        ?.details_of_a_business_process_being_modified || "";

    this.details_of_the_scope_and_coverage_of_any_human_rights_due_diligence_conducted =
      this.data?.leadership_indicators
        ?.details_of_the_scope_and_coverage_of_any_human_rights_due_diligence_conducted ||
      "";

    this.is_the_premise_or_office_of_the_entity_accessible_to_differently_abled_visitors =
      this.data?.leadership_indicators
        ?.is_the_premise_or_office_of_the_entity_accessible_to_differently_abled_visitors ||
      "";

    this.details_on_assessment_of_value_chain_partners = this.data
      ?.leadership_indicators
      ?.details_on_assessment_of_value_chain_partners || {
      sexual_harassment_percentage_of_value_chain_partners: "",
      discrimination_at_workplace_percentage_of_value_chain_partners: "",
      child_labour_percentage_of_value_chain_partners: "",
      involuntary_labour_percentage_of_value_chain_partners: "",
      wages_percentage_of_value_chain_partners: "",
      others_percentage_of_value_chain_partners: "",
    };

    this.provide_details_of_any_corrective_actions_taken_1 =
      this.data?.leadership_indicators
        ?.provide_details_of_any_corrective_actions_taken || "";
  }
}
