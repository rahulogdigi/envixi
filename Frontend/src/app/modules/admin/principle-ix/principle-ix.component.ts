import { Component, OnInit } from "@angular/core";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { PrinciplesService } from "../../../providers/principles.service";
@Component({
  selector: "app-principle-ix",
  templateUrl: "./principle-ix.component.html",
  styleUrls: ["./principle-ix.component.scss"],
})
export class PrincipleIxComponent implements OnInit {
  alert: any = {};
  showAlert: boolean = false;
  moduleId: string = "63d55e62164bb0415e42d040";
  describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback: string =
    "";
  turnover_of_products_and_services: any = {
    percentage_to_total_turnover: {
      environmental_and_social_parameters_relevant_to_the_product: "",
      safe_and_responsible_usage: "",
      recycling_and_or_safe_disposa: "",
    },
  };
  number_of_consumer_complaints_in_respect: any = {
    current_financial_year: {
      year: this._utilities.selectedFinancialYear,
      data_privacy: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      advertising: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      cyber_security: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      delivery_of_essential_services: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      restrictive_trade_practices: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      unfair_trade_practices: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      other: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
    },
    previous_financial_year: {
      year: this._utilities.previousFinancialYear,
      data_privacy: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      advertising: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      cyber_security: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      delivery_of_essential_services: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      restrictive_trade_practices: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      unfair_trade_practices: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
      other: {
        received_during_the_year: "",
        pending_resolution_at_end_of_year: "",
        remarks: "",
      },
    },
  };
  details_of_instances_of_product_recalls_on_account_of_safety_issues: any = {
    voluntary_recalls: {
      number: "",
      reason_for_recall: "",
    },
    forced_recalls: {
      number: "",
      reason_for_recall: "",
    },
  };
  does_the_entity_have_a_framework_policy_boolean: any = "";
  does_the_entity_have_a_framework_policy: string = "";
  provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating: string =
    "";
  channels_or_platforms_where_information: string = "";
  steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible: string =
    "";
  mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services: string =
    "";
  does_the_entity_display_product_information_on_the_product_over: string = "";
  does_the_entity_display_product_information_on_the_product_over_brief: string =
    "";
  does_the_entity_display_product_information_on_the_product_over_survey: any =
    "";
  five_a_number_of_instances_of_data_breaches_along_with_impact: string = "";
  five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer: string =
    "";

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
        form_type: "principal_nine",
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();

          this.describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback =
            response?.data?.essential_indicators
              ?.describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback ||
            "";

          this.turnover_of_products_and_services = this._utilities.nullToString(
            response?.data?.essential_indicators
              ?.turnover_of_products_and_services
          );

          this.number_of_consumer_complaints_in_respect = this._utilities.nullToString(
            response?.data?.essential_indicators
              ?.number_of_consumer_complaints_in_respect
          );

          this.details_of_instances_of_product_recalls_on_account_of_safety_issues = this._utilities.nullToString(
            response?.data?.essential_indicators
              ?.details_of_instances_of_product_recalls_on_account_of_safety_issues
          );

          this.does_the_entity_have_a_framework_policy_boolean =
            response?.data?.essential_indicators
              ?.does_the_entity_have_a_framework_policy_boolean == true
              ? "Yes"
              : response?.data?.essential_indicators
                  ?.does_the_entity_have_a_framework_policy_boolean == false
              ? "No"
              : "";

          this.does_the_entity_have_a_framework_policy =
            response?.data?.essential_indicators
              ?.does_the_entity_have_a_framework_policy || "";

          this.provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating =
            response?.data?.essential_indicators
              ?.provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating ||
            "";

          this.channels_or_platforms_where_information =
            response?.data?.leadership_indicators
              ?.channels_or_platforms_where_information || "";

          this.steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible =
            response?.data?.leadership_indicators
              ?.steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible ||
            "";

          this.mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services =
            response?.data?.leadership_indicators
              ?.mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services ||
            "";

          this.does_the_entity_display_product_information_on_the_product_over =
            response?.data?.leadership_indicators
              ?.does_the_entity_display_product_information_on_the_product_over ||
            "";

          this.does_the_entity_display_product_information_on_the_product_over_brief =
            response?.data?.leadership_indicators
              ?.does_the_entity_display_product_information_on_the_product_over_brief ||
            "";

          this.does_the_entity_display_product_information_on_the_product_over_survey =
            response?.data?.leadership_indicators
              ?.does_the_entity_display_product_information_on_the_product_over_survey ||
            "";

          this.five_a_number_of_instances_of_data_breaches_along_with_impact =
            response?.data?.leadership_indicators
              ?.five_a_number_of_instances_of_data_breaches_along_with_impact ||
            "";

          this.five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer =
            response?.data?.leadership_indicators
              ?.five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer ||
            "";
          console.log(response);
        },
        (err) => {
          this.resetData();
          console.log(err);
        }
      );
  }

  resetData() {
    this.describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback =
      "";
    this.turnover_of_products_and_services = {
      percentage_to_total_turnover: {
        environmental_and_social_parameters_relevant_to_the_product: "",
        safe_and_responsible_usage: "",
        recycling_and_or_safe_disposa: "",
      },
    };
    this.number_of_consumer_complaints_in_respect = {
      current_financial_year: {
        year: this._utilities.selectedFinancialYear,
        data_privacy: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        advertising: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        cyber_security: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        delivery_of_essential_services: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        restrictive_trade_practices: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        unfair_trade_practices: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        other: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
      },
      previous_financial_year: {
        year: this._utilities.previousFinancialYear,
        data_privacy: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        advertising: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        cyber_security: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        delivery_of_essential_services: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        restrictive_trade_practices: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        unfair_trade_practices: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
        other: {
          received_during_the_year: "",
          pending_resolution_at_end_of_year: "",
          remarks: "",
        },
      },
    };
    this.details_of_instances_of_product_recalls_on_account_of_safety_issues = {
      voluntary_recalls: {
        number: "",
        reason_for_recall: "",
      },
      forced_recalls: {
        number: "",
        reason_for_recall: "",
      },
    };
    this.does_the_entity_have_a_framework_policy_boolean = "";
    this.does_the_entity_have_a_framework_policy = "";
    this.provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating =
      "";
    this.channels_or_platforms_where_information = "";
    this.steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible =
      "";
    this.mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services =
      "";
    this.does_the_entity_display_product_information_on_the_product_over = "";
    this.does_the_entity_display_product_information_on_the_product_over_brief =
      "";
    this.does_the_entity_display_product_information_on_the_product_over_survey =
      "";
    this.five_a_number_of_instances_of_data_breaches_along_with_impact = "";
    this.five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer =
      "";
  }

  submitForm() {
    let obj = {
      company_id: this._utilities.selectedCompany?.company_id,
      financial_start_date: this._utilities?.financialStartDate,
      financial_end_date: this._utilities?.financialEndDate,
      essential_indicators: {
        describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback: this
          .describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback,
        turnover_of_products_and_services: this
          .turnover_of_products_and_services,
        number_of_consumer_complaints_in_respect: this
          .number_of_consumer_complaints_in_respect,
        details_of_instances_of_product_recalls_on_account_of_safety_issues: this
          .details_of_instances_of_product_recalls_on_account_of_safety_issues,
        does_the_entity_have_a_framework_policy_boolean:
          this.does_the_entity_have_a_framework_policy_boolean == "Yes"
            ? true
            : this.does_the_entity_have_a_framework_policy_boolean == "No"
            ? false
            : "",
        does_the_entity_have_a_framework_policy: this
          .does_the_entity_have_a_framework_policy,
        provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating: this
          .provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating,
      },
      leadership_indicators: {
        channels_or_platforms_where_information: this
          .channels_or_platforms_where_information,
        steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible: this
          .steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible,
        mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services: this
          .mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services,
        does_the_entity_display_product_information_on_the_product_over: this
          .does_the_entity_display_product_information_on_the_product_over,
        does_the_entity_display_product_information_on_the_product_over_brief: this
          .does_the_entity_display_product_information_on_the_product_over_brief,
        does_the_entity_display_product_information_on_the_product_over_survey: this
          .does_the_entity_display_product_information_on_the_product_over_survey,
        five_a_number_of_instances_of_data_breaches_along_with_impact: this
          .five_a_number_of_instances_of_data_breaches_along_with_impact,
        five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer: this
          .five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer,
      },
    };
    let finalObj = this._utilities.removeBlankElements(obj);
    this._utilities.loaderOn();
    this._principlesService.addPrinciple9(finalObj).subscribe(
      (response) => {
        this._utilities.loaderOff();
        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Principle 9 Form Submitted Successfully",
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
