import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-three-one-to-eight",
  templateUrl: "./principle-three-one-to-eight.component.html",
  styleUrls: ["./principle-three-one-to-eight.component.scss"],
})
export class PrincipleThreeOneToEightComponent implements OnInit {
  @Input() data: any = {};
  is_accessibility_of_workplaces: string = "";
  accessibility_of_workplaces: string = "";
  percentage_of_employees_covered: any = {};
  percentage_of_workers_covered: any = {};
  details_of_retirement_benefits: any = {};

  does_entity_have_an_equal_opportunity_policy: string = "";
  retention_rates_of_permanent_employees_and_workers: any = {};
  mechanism_available_to_receive_and_redress_grievances: any = {};
  membership_of_employees_and_worker_in_association: any = {};
  details_of_training_given_to_employees_and_workers: any = {};
  details_of_performance_and_career_development_reviews_of_employees_and_worker: any = {};
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    if (this.data?.essential_indicators) {
      this.accessibility_of_workplaces =
        this.data?.essential_indicators?.accessibility_of_workplaces || "";

      this.percentage_of_employees_covered = this.data?.essential_indicators
        ?.a_details_of_measures_for_the_well_being_of_employees
        ?.percentage_of_employees_covered || {
        permanent_employees: {
          male: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          female: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          total: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
        },
        other_than_permanent_employees: {
          male: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          female: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          total: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
        },
      };
      this.percentage_of_workers_covered = this.data?.essential_indicators?.b_details_of_measures_for_the_well_being_of_workers?.percentage_of_employees_covered;
      this.details_of_retirement_benefits = this.data?.essential_indicators
        ?.details_of_retirement_benefits || {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          pf: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          gratutity: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          esi: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          others: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
        },
        previous_financial_year: {
          fy: this._utilities.previousFinancialYear,
          pf: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          gratutity: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          esi: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          others: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
        },
      };
      this.does_entity_have_an_equal_opportunity_policy =
        this.data?.essential_indicators
          ?.does_entity_have_an_equal_opportunity_policy || "";
      this.retention_rates_of_permanent_employees_and_workers = this.data
        ?.essential_indicators
        ?.retention_rates_of_permanent_employees_and_workers || {
        permanent_employees: {
          male: {
            return_to_work_rate: "",
            retention_rate: "",
          },
          female: {
            return_to_work_rate: "",
            retention_rate: "",
          },
          total: {
            return_to_work_rate: "",
            retention_rate: "",
          },
        },
        permanent_workers: {
          male: {
            return_to_work_rate: "",
            retention_rate: "",
          },
          female: {
            return_to_work_rate: "",
            retention_rate: "",
          },
          total: {
            return_to_work_rate: "",
            retention_rate: "",
          },
        },
      };
      this.mechanism_available_to_receive_and_redress_grievances = this.data
        ?.essential_indicators
        ?.mechanism_available_to_receive_and_redress_grievances || {
        permanent_workers: "",
        other_than_permanent_workers: "",
        permanent_employees: "",
        other_than_permanent_employees: "",
      };

      this.membership_of_employees_and_worker_in_association = this.data
        ?.essential_indicators
        ?.membership_of_employees_and_worker_in_association || {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          total_permanent_employees: {
            total_employee_category_a: "",
            no_employee_or_workers_b: "",
            percentage_b_divided_by_a: "",
            male: {
              total_employee_category_a: "",
              no_employee_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
            female: {
              total_employee_category_a: "",
              no_employee_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
          },
          total_permanent_workers: {
            total_employee_category_a: "",
            no_employee_or_workers_b: "",
            percentage_b_divided_by_a: "",
            male: {
              total_employee_category_a: "",
              no_employee_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
            female: {
              total_employee_category_a: "",
              no_employee_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
          },
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          total_permanent_employees: {
            total_employee_category_c: "",
            no_employee_or_workers_d: "",
            percentage_d_divided_by_c: "",
            male: {
              total_employee_category_c: "",
              no_employee_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
            female: {
              total_employee_category_c: "",
              no_employee_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
          },
          total_permanent_workers: {
            total_employee_category_c: "",
            no_employee_or_workers_d: "",
            percentage_d_divided_by_c: "",
            male: {
              total_employee_category_c: "",
              no_employee_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
            female: {
              total_employee_category_c: "",
              no_employee_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
          },
        },
      };

      this.details_of_training_given_to_employees_and_workers = this.data
        ?.essential_indicators
        ?.details_of_training_given_to_employees_and_workers || {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          employees: {
            total: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
            male: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
            female: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
          },
          workers: {
            total: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
            male: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
            female: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
          },
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          employees: {
            total: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
            male: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
            female: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
          },
          workers: {
            total: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
            male: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
            female: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
          },
        },
      };

      this.details_of_performance_and_career_development_reviews_of_employees_and_worker = this
        .data?.essential_indicators
        ?.details_of_performance_and_career_development_reviews_of_employees_and_worker || {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          employees: {
            total_a: "",
            no_b: "",
            percentage_b_divided_by_a: "",
            male: {
              total_a: "",
              no_b: "",
              percentage_b_divided_by_a: "",
            },
            female: {
              total_a: "",
              no_b: "",
              percentage_b_divided_by_a: "",
            },
          },
          workers: {
            total_c: "",
            no_d: "",
            percentage_d_divided_by_c: "",
            male: {
              total_c: "",
              no_d: "",
              percentage_d_divided_by_c: "",
            },
            female: {
              total_c: "",
              no_d: "",
              percentage_d_divided_by_c: "",
            },
          },
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          employees: {
            total_a: "",
            no_b: "",
            percentage_b_divided_by_a: "",
            male: {
              total_a: "",
              no_b: "",
              percentage_b_divided_by_a: "",
            },
            female: {
              total_a: "",
              no_b: "",
              percentage_b_divided_by_a: "",
            },
          },
          workers: {
            total_c: "",
            no_d: "",
            percentage_d_divided_by_c: "",
            male: {
              total_c: "",
              no_d: "",
              percentage_d_divided_by_c: "",
            },
            female: {
              total_c: "",
              no_d: "",
              percentage_d_divided_by_c: "",
            },
          },
        },
      };
    }
  }
}
