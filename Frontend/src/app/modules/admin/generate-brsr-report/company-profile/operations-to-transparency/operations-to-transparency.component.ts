import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input,
} from "@angular/core";
import { CommonFunctionsService } from "../../../../../utils/common-functions.service";
@Component({
  selector: "app-operations-to-transparency",
  templateUrl: "./operations-to-transparency.component.html",
  styleUrls: ["./operations-to-transparency.component.scss"],
})
export class OperationsToTransparencyComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() data: any = {};
  location: any = {};
  market_served_by_entity: any = {};

  employees_and_worker: any = {};
  diffrently_added_employees_and_worker: any = {};
  participation_or_representation_of_women: any = {};
  turnover_rate_for_permanent_employees_and_workers: any = {};

  v_associate_companies: any[] = [];

  is_csr_applicable: any = "";
  turnover_in_rs: any = "";
  net_worth: any = "";

  stakeholder_group: any = {};
  business_conduct_issues: any[] = [];
  /**
   * Constructor
   */
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.location = this.data?.location || {
      national_operations: {
        number_of_plants: "",
        number_of_office: "",
      },
      international_operations: {
        number_of_plants: "",
        number_of_office: "",
      },
    };
    this.market_served_by_entity = this.data?.market_served_by_entity || {
      number_of_location: {
        number_of_states: "",
        number_of_countries: "",
      },
      seventeen_b: "",
      seventeen_c: "",
    };

    //employee
    this.employees_and_worker = this.data?.employees_and_worker || {
      employees: {
        permanent_d: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
        other_than_permanent_e: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
      },
      workers: {
        permanent_f: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
        other_than_permanent_g: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
      },
    };
    this.diffrently_added_employees_and_worker = this.data
      ?.diffrently_added_employees_and_worker || {
      added_employees: {
        permanent_d: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
        other_than_permanent_e: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
      },
      added_workers: {
        permanent_f: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
        other_than_permanent_g: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
      },
    };
    this.participation_or_representation_of_women = this.data
      ?.participation_or_representation_of_women || {
      bod: {
        total: "",
        no_a: "",
        no_a_b: "",
      },
      kmp: {
        total: "",
        no_a: "",
        no_a_b: "",
      },
    };
    this.turnover_rate_for_permanent_employees_and_workers = this.data
      ?.turnover_rate_for_permanent_employees_and_workers || {
      permanent_employees: {
        first_year: {
          fy_year: this._utilities.selectedFinancialYear,
          female: "",
          male: "",
          total: "",
        },
        second_year: {
          fy_year: this._utilities.previousFinancialYear,
          female: "",
          male: "",
          total: "",
        },
        third_year: {
          fy_year: this._utilities.previousToPreviousFinancialYear,
          female: "",
          male: "",
          total: "",
        },
      },
      permanent_workers: {
        first_year: {
          fy_year: this._utilities.selectedFinancialYear,
          female: "",
          male: "",
          total: "",
        },
        second_year: {
          fy_year: this._utilities.previousFinancialYear,
          female: "",
          male: "",
          total: "",
        },
        third_year: {
          fy_year: this._utilities.previousToPreviousFinancialYear,
          female: "",
          male: "",
          total: "",
        },
      },
    };

    //holdings
    this.v_associate_companies = this.data?.v_associate_companies || [
      {
        name_of_holding_or_associate_companies: "",
        indicate_whether_holding_or_subsidiary_or_associate_joint_venture: "",
        percentage_of_shares_held_by_listed_entity: "",
        does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity:
          "",
      },
    ];
    this.v_associate_companies.map((e) => {
      e.does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity = e.does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity
        ? "Yes"
        : e.does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity ==
          false
        ? "No"
        : "";
    });
    //holdings ends

    //CSR starts
    this.is_csr_applicable = this.data?.is_csr_applicable
      ? "Yes"
      : this.data?.is_csr_applicable == false
      ? "No"
      : "";
    this.turnover_in_rs = this.data?.turnover_in_rs || "";
    this.net_worth = this.data?.net_worth || "";
    //CSR ends

    //transparency
    this.stakeholder_group = this.data?.stakeholder_group || {
      communities: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      investors: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      shareholders: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      employee_and_workers: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      customers: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      value_chain_partner: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      others: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
    };

    this.business_conduct_issues = this.data?.business_conduct_issues || [
      {
        material_issue_identified: "",
        indicate_whether_risk_or_opportunity: "",
        rational_of_identifying: "",
        in_case_of_risk: "",
        financial_implications: "",
      },
    ];
  }
  getSum(val1, val2) {
    val1 = val1 ? parseFloat(val1) : 0;
    val2 = val2 ? parseFloat(val2) : 0;
    return parseFloat(val1 + val2).toFixed(2);
  }
}
