import { Component, OnInit } from "@angular/core";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { PrinciplesService } from "../../../providers/principles.service";
@Component({
  selector: "app-principle-vii",
  templateUrl: "./principle-vii.component.html",
  styleUrls: ["./principle-vii.component.scss"],
})
export class PrincipleViiComponent implements OnInit {
  alert: any = {};
  showAlert: boolean = false;
  moduleId: string = "63d55e38164bb0415e42d00c";
  one_a_number_of_affiliations_with_trade_and_industry_chambers_associations: string =
    "";
  one_b_list_the_top_10_trade_and_industry_chambers: any[] = [
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
  two_provide_details_of_corrective_action_taken_or_underway_on_any_issues: any[] = [
    {
      name_of_authority: "",
      brief_of_the_case: "",
      corrective_action_taken: "",
    },
  ];
  details_of_public_policy_positions_advocated_by_the_entity: any[] = [
    {
      public_policy_advocated: "",
      method_resorted_for_such_advocacy: "",
      whether_information_available_in_public: "",
      frequency_of_review_by_board: "",
      web_link: "",
    },
  ];
  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  intervalId: any;
  constructor(
    public _utilities: CommonFunctionsService,
    private _principlesService: PrinciplesService
  ) {
    this.intervalId = setInterval(() => {
      if (this.prevCompanyId != this._utilities.selectedCompany?.company_id) {
        this.prevCompanyId = this._utilities.selectedCompany?.company_id;
        this.firstLoadFunction();
      }
    }, 1000);
  }

  ngOnInit(): void {
    this.firstLoadFunction();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  firstLoadFunction() {
    this._utilities.callRedirectLoader();
    this.getPrinciple();
  }

  getPrinciple() {
    this._utilities.loaderOn();
    this._principlesService
      .getPrinciple({
        company_id: this._utilities.selectedCompany?.company_id,
        form_type: "principal_seven",
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();

          this.one_a_number_of_affiliations_with_trade_and_industry_chambers_associations =
            response?.data?.essential_indicators?.one_a_number_of_affiliations_with_trade_and_industry_chambers_associations;

          this.one_b_list_the_top_10_trade_and_industry_chambers = this._utilities.arrayNullToString(
            response?.data?.essential_indicators
              ?.one_b_list_the_top_10_trade_and_industry_chambers
          );

          this.two_provide_details_of_corrective_action_taken_or_underway_on_any_issues = this._utilities.arrayNullToString(
            response?.data?.essential_indicators
              ?.two_provide_details_of_corrective_action_taken_or_underway_on_any_issues
          );
          if (
            !this
              .two_provide_details_of_corrective_action_taken_or_underway_on_any_issues
              .length
          ) {
            this.two_provide_details_of_corrective_action_taken_or_underway_on_any_issues = [
              {
                name_of_authority: "",
                brief_of_the_case: "",
                corrective_action_taken: "",
              },
            ];
          }
          this.details_of_public_policy_positions_advocated_by_the_entity = this._utilities.arrayNullToString(
            response?.data?.leadership_indicators
              ?.details_of_public_policy_positions_advocated_by_the_entity
          );
          if (
            !this.details_of_public_policy_positions_advocated_by_the_entity
              .length
          ) {
            this.details_of_public_policy_positions_advocated_by_the_entity = [
              {
                public_policy_advocated: "",
                method_resorted_for_such_advocacy: "",
                whether_information_available_in_public: true,
                frequency_of_review_by_board: "",
                web_link: "",
              },
            ];
          }
          console.log(response);
        },
        (err) => {
          this.resetData();
          console.log(err);
        }
      );
  }
  resetData() {
    this.one_a_number_of_affiliations_with_trade_and_industry_chambers_associations =
      "";
    this.one_b_list_the_top_10_trade_and_industry_chambers = [
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
    this.two_provide_details_of_corrective_action_taken_or_underway_on_any_issues = [
      {
        name_of_authority: "",
        brief_of_the_case: "",
        corrective_action_taken: "",
      },
    ];
    this.details_of_public_policy_positions_advocated_by_the_entity = [
      {
        public_policy_advocated: "",
        method_resorted_for_such_advocacy: "",
        whether_information_available_in_public: "",
        frequency_of_review_by_board: "",
        web_link: "",
      },
    ];
  }
  addField(mode) {
    let flag = 1;
    if (mode == 1) {
      this.two_provide_details_of_corrective_action_taken_or_underway_on_any_issues.filter(
        (e) => {
          if (
            e?.name_of_authority.trim().length == 0 ||
            e?.brief_of_the_case.trim().length == 0 ||
            e?.corrective_action_taken.trim().length == 0
          )
            flag = 0;
        }
      );
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Essential Indicators point 2",
        };
        this.closeAlert();
        return;
      }
      if (
        this
          .two_provide_details_of_corrective_action_taken_or_underway_on_any_issues
          .length < 15
      )
        this.two_provide_details_of_corrective_action_taken_or_underway_on_any_issues.push(
          {
            name_of_authority: "",
            brief_of_the_case: "",
            corrective_action_taken: "",
          }
        );
    } else if (mode == 2) {
      this.details_of_public_policy_positions_advocated_by_the_entity.filter(
        (e) => {
          if (
            e?.public_policy_advocated.trim().length == 0 ||
            e?.method_resorted_for_such_advocacy.trim().length == 0 ||
            e?.whether_information_available_in_public === "" ||
            e?.frequency_of_review_by_board === ""
          )
            flag = 0;
        }
      );
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Leadership Indicators point 2",
        };
        this.closeAlert();
        return;
      }
      if (
        this.details_of_public_policy_positions_advocated_by_the_entity.length <
        15
      )
        this.details_of_public_policy_positions_advocated_by_the_entity.push({
          public_policy_advocated: "",
          method_resorted_for_such_advocacy: "",
          whether_information_available_in_public: true,
          frequency_of_review_by_board: "",
          web_link: "",
        });
    }
  }
  removeField(mode, i) {
    if (
      mode == 1 &&
      this
        .two_provide_details_of_corrective_action_taken_or_underway_on_any_issues
        .length > 1
    )
      this.two_provide_details_of_corrective_action_taken_or_underway_on_any_issues.splice(
        i,
        1
      );
    else if (
      mode == 2 &&
      this.details_of_public_policy_positions_advocated_by_the_entity.length > 1
    )
      this.details_of_public_policy_positions_advocated_by_the_entity.splice(
        i,
        1
      );
  }
  submitForm() {
    let obj = {
      company_id: this._utilities.selectedCompany?.company_id,
      financial_start_date: this._utilities?.financialStartDate,
      financial_end_date: this._utilities?.financialEndDate,
      essential_indicators: {
        one_a_number_of_affiliations_with_trade_and_industry_chambers_associations: this
          .one_a_number_of_affiliations_with_trade_and_industry_chambers_associations,
        one_b_list_the_top_10_trade_and_industry_chambers: this
          .one_b_list_the_top_10_trade_and_industry_chambers,
        two_provide_details_of_corrective_action_taken_or_underway_on_any_issues: this.two_provide_details_of_corrective_action_taken_or_underway_on_any_issues.filter(
          (e) => e.name_of_authority.length > 0
        ),
      },
      leadership_indicators: {
        details_of_public_policy_positions_advocated_by_the_entity: this.details_of_public_policy_positions_advocated_by_the_entity.filter(
          (e) => e.public_policy_advocated.length > 0
        ),
      },
    };
    let finalObj = this._utilities.removeBlankElements(obj);
    this._utilities.loaderOn();
    this._principlesService.addPrinciple7(finalObj).subscribe(
      (response) => {
        this._utilities.loaderOff();
        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Principle 7 Form Submitted Successfully",
        };
        this.closeAlert();
      },
      (err) => {
        console.log(err);
        this._utilities.loaderOff();
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: this._utilities.someThingWentWrong,
        };
        this.closeAlert();
      }
    );
  }
  closeAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}
