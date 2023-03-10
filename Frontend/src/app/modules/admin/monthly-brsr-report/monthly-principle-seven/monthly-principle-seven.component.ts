import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { PrinciplesService } from "../../../../providers/principles.service";
@Component({
  selector: "app-monthly-principle-seven",
  templateUrl: "./monthly-principle-seven.component.html",
  styleUrls: ["./monthly-principle-seven.component.scss"],
})
export class MonthlyPrincipleSevenComponent implements OnInit {
  @Input() startDate: any = "";
  @Input() endDate: any = "";
  @Input() branch_id: any = "";
  alert: any = {};
  showAlert: boolean = false;
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
    const promise = new Promise((resolve, reject) => {
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

      this._principlesService.addPrinciple7(finalObj, true).subscribe(
        (response) => {
          return resolve({ data: finalObj, formName: "Principle 7" });
        },
        (err) => {
          return reject(0);
        }
      );
    });
    return promise;
  }
  closeAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}
