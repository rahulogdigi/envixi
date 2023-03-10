import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-seven",
  templateUrl: "./principle-seven.component.html",
  styleUrls: ["./principle-seven.component.scss"],
})
export class PrincipleSevenComponent implements OnInit {
  @Input() data: any = {};
  one_a_number_of_affiliations_with_trade_and_industry_chambers_associations: string =
    "";
  one_b_list_the_top_10_trade_and_industry_chambers: any[] = [];
  two_provide_details_of_corrective_action_taken_or_underway_on_any_issues: any[] = [];
  details_of_public_policy_positions_advocated_by_the_entity: any[] = [];
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.one_a_number_of_affiliations_with_trade_and_industry_chambers_associations =
      this.data?.essential_indicators
        ?.one_a_number_of_affiliations_with_trade_and_industry_chambers_associations ||
      "--";
    this.one_b_list_the_top_10_trade_and_industry_chambers = this.data
      ?.essential_indicators
      ?.one_b_list_the_top_10_trade_and_industry_chambers || [
      {
        name_of_the_trade_and_industry_chambers_associations: null,
        reach_of_trade_and_industry_chambers_associations_state_national: null,
      },
      {
        name_of_the_trade_and_industry_chambers_associations: null,
        reach_of_trade_and_industry_chambers_associations_state_national: null,
      },
      {
        name_of_the_trade_and_industry_chambers_associations: null,
        reach_of_trade_and_industry_chambers_associations_state_national: null,
      },
      {
        name_of_the_trade_and_industry_chambers_associations: null,
        reach_of_trade_and_industry_chambers_associations_state_national: null,
      },
      {
        name_of_the_trade_and_industry_chambers_associations: null,
        reach_of_trade_and_industry_chambers_associations_state_national: null,
      },
      {
        name_of_the_trade_and_industry_chambers_associations: null,
        reach_of_trade_and_industry_chambers_associations_state_national: null,
      },
      {
        name_of_the_trade_and_industry_chambers_associations: null,
        reach_of_trade_and_industry_chambers_associations_state_national: null,
      },
      {
        name_of_the_trade_and_industry_chambers_associations: null,
        reach_of_trade_and_industry_chambers_associations_state_national: null,
      },
      {
        name_of_the_trade_and_industry_chambers_associations: null,
        reach_of_trade_and_industry_chambers_associations_state_national: null,
      },
      {
        name_of_the_trade_and_industry_chambers_associations: null,
        reach_of_trade_and_industry_chambers_associations_state_national: null,
      },
    ];

    this.two_provide_details_of_corrective_action_taken_or_underway_on_any_issues = this
      .data?.essential_indicators
      ?.two_provide_details_of_corrective_action_taken_or_underway_on_any_issues || [
      {
        name_of_authority: "",
        brief_of_the_case: "",
        corrective_action_taken: "",
      },
    ];
    this.details_of_public_policy_positions_advocated_by_the_entity = this.data
      ?.leadership_indicators
      ?.details_of_public_policy_positions_advocated_by_the_entity || [
      {
        public_policy_advocated: "",
        method_resorted_for_such_advocacy: "",
        whether_information_available_in_public: "",
        frequency_of_review_by_board: "",
        web_link: "",
      },
    ];
  }
}
