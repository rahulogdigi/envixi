import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-one",
  templateUrl: "./principle-one.component.html",
  styleUrls: ["./principle-one.component.scss"],
})
export class PrincipleOneComponent implements OnInit {
  @Input() data: any = {};
  principles_during_the_financial_year: any = {
    segment_board_of_director: {
      total_number_of_training: "",
      topics: "",
      percentage_of_person: "",
    },
    key_managerial_personnel: {
      total_number_of_training: "",
      topics: "",
      percentage_of_person: "",
    },
    employees_other_than_bod_and_kmps: {
      total_number_of_training: "",
      topics: "",
      percentage_of_person: "",
    },
    workers: {
      total_number_of_training: "",
      topics: "",
      percentage_of_person: "",
    },
  };
  details_of_fines_penalties: any = {
    monetary: {
      penality: {
        ngrbc_principal: "",
        name_of_the_regulatory: "",
        amount_in_inr: "",
        brief_of_the_case: "",
        has_an_appeal_been_preferred: "",
      },
      settlement: {
        ngrbc_principal: "",
        name_of_the_regulatory: "",
        amount_in_inr: "",
        brief_of_the_case: "",
        has_an_appeal_been_preferred: "",
      },
      compounding_fee: {
        ngrbc_principal: "",
        name_of_the_regulatory: "",
        amount_in_inr: "",
        brief_of_the_case: "",
        has_an_appeal_been_preferred: "",
      },
    },
    non_monetary: {
      imprisonment: {
        ngrbc_principal: "",
        name_of_the_regulatory: "",
        amount_in_inr: "",
        brief_of_the_case: "",
        has_an_appeal_been_preferred: "",
      },
      punishment: {
        ngrbc_principal: "",
        name_of_the_regulatory: "",
        amount_in_inr: "",
        brief_of_the_case: "",
        has_an_appeal_been_preferred: "",
      },
    },
  };
  monetary_or_non_monetary_action_appealed: any[] = [
    {
      case_details: "",
      judicial_institutions: "",
    },
  ];
  is_anti_corruption: any = "";
  anti_corruption_or_anti_bribery_policy: string = "";
  web_link_to_the_policy: string = "";
  number_of_directors: any = {
    current_financial_yr: {
      year: "",
      directors: "",
      kmps: "",
      employees: "",
      workers: "",
    },
    previous_financial_yr: {
      year: "",
      directors: "",
      kmps: "",
      employees: "",
      workers: "",
    },
  };
  details_of_complaints: any = {
    current_financial_yr: {
      year: "",
      number_of_complaints_received_of_conflict_of_interes_of_the_directors: {
        numbers: "",
        remarks: "",
      },
      number_of_complaints_received_of_conflict_of_interes_of_the_kmps: {
        numbers: "",
        remarks: "",
      },
    },
    previous_financial_yr: {
      year: "",
      number_of_complaints_received_of_conflict_of_interes_of_the_directors: {
        numbers: "",
        remarks: "",
      },
      number_of_complaints_received_of_conflict_of_interes_of_the_kmps: {
        numbers: "",
        remarks: "",
      },
    },
  };
  provide_details_of_any_corrective_action_taken_or_underway_on_issues_related_to_fines: string =
    "";
  awareness_programmes_conducted: any = [
    {
      total_number_of_awareness_programmes_held: "",
      principles_covered_under_the_training: "",
      percetage_of_age: "",
    },
  ];
  is_managing_conflict: any = "";
  manage_conflict_of_interests_involving_members_of_the_board: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.principles_during_the_financial_year = this.data?.essential_indicators
      ?.principles_during_the_financial_year || {
      segment_board_of_director: {
        total_number_of_training: "",
        topics: "",
        percentage_of_person: "",
      },
      key_managerial_personnel: {
        total_number_of_training: "",
        topics: "",
        percentage_of_person: "",
      },
      employees_other_than_bod_and_kmps: {
        total_number_of_training: "",
        topics: "",
        percentage_of_person: "",
      },
      workers: {
        total_number_of_training: "",
        topics: "",
        percentage_of_person: "",
      },
    };

    this.details_of_fines_penalties = this.data?.essential_indicators
      ?.details_of_fines_penalties || {
      monetary: {
        penality: {
          ngrbc_principal: "",
          name_of_the_regulatory: "",
          amount_in_inr: "",
          brief_of_the_case: "",
          has_an_appeal_been_preferred: "",
        },
        settlement: {
          ngrbc_principal: "",
          name_of_the_regulatory: "",
          amount_in_inr: "",
          brief_of_the_case: "",
          has_an_appeal_been_preferred: "",
        },
        compounding_fee: {
          ngrbc_principal: "",
          name_of_the_regulatory: "",
          amount_in_inr: "",
          brief_of_the_case: "",
          has_an_appeal_been_preferred: "",
        },
      },
      non_monetary: {
        imprisonment: {
          ngrbc_principal: "",
          name_of_the_regulatory: "",
          amount_in_inr: "",
          brief_of_the_case: "",
          has_an_appeal_been_preferred: "",
        },
        punishment: {
          ngrbc_principal: "",
          name_of_the_regulatory: "",
          amount_in_inr: "",
          brief_of_the_case: "",
          has_an_appeal_been_preferred: "",
        },
      },
    };

    this.monetary_or_non_monetary_action_appealed = this.data
      ?.essential_indicators?.monetary_or_non_monetary_action_appealed || [
      {
        case_details: "",
        judicial_institutions: "",
      },
    ];
    this.anti_corruption_or_anti_bribery_policy =
      this.data?.essential_indicators?.anti_corruption_or_anti_bribery_policy ||
      "";

    this.web_link_to_the_policy =
      this.data?.essential_indicators?.web_link_to_the_policy || "";

    this.number_of_directors = this.data?.essential_indicators
      ?.number_of_directors || {
      current_financial_yr: {
        year: "",
        directors: "",
        kmps: "",
        employees: "",
        workers: "",
      },
      previous_financial_yr: {
        year: "",
        directors: "",
        kmps: "",
        employees: "",
        workers: "",
      },
    };

    this.details_of_complaints = this.data?.essential_indicators
      ?.details_of_complaints || {
      current_financial_yr: {
        year: "",
        number_of_complaints_received_of_conflict_of_interes_of_the_directors: {
          numbers: "",
          remarks: "",
        },
        number_of_complaints_received_of_conflict_of_interes_of_the_kmps: {
          numbers: "",
          remarks: "",
        },
      },
      previous_financial_yr: {
        year: "",
        number_of_complaints_received_of_conflict_of_interes_of_the_directors: {
          numbers: "",
          remarks: "",
        },
        number_of_complaints_received_of_conflict_of_interes_of_the_kmps: {
          numbers: "",
          remarks: "",
        },
      },
    };

    this.provide_details_of_any_corrective_action_taken_or_underway_on_issues_related_to_fines =
      this.data?.essential_indicators
        ?.provide_details_of_any_corrective_action_taken_or_underway_on_issues_related_to_fines ||
      "";

    this.awareness_programmes_conducted = this.data?.leadership_indicators
      ?.awareness_programmes_conducted || [
      {
        total_number_of_awareness_programmes_held: "",
        principles_covered_under_the_training: "",
        percetage_of_age: "",
      },
    ];

    this.manage_conflict_of_interests_involving_members_of_the_board =
      this.data?.leadership_indicators
        ?.manage_conflict_of_interests_involving_members_of_the_board || "";
  }
}
