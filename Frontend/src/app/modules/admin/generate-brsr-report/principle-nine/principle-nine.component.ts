import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-nine",
  templateUrl: "./principle-nine.component.html",
  styleUrls: ["./principle-nine.component.scss"],
})
export class PrincipleNineComponent implements OnInit {
  @Input() data: any = {};
  describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback: string =
    "";
  turnover_of_products_and_services: any = {};
  number_of_consumer_complaints_in_respect: any = {};
  details_of_instances_of_product_recalls_on_account_of_safety_issues: any = {};
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
  constructor(public _utilities: CommonFunctionsService) {}
  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback =
      this.data?.essential_indicators
        ?.describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback ||
      "--";
    this.turnover_of_products_and_services = this.data?.essential_indicators
      ?.turnover_of_products_and_services || {
      percentage_to_total_turnover: {
        environmental_and_social_parameters_relevant_to_the_product: "",
        safe_and_responsible_usage: "",
        recycling_and_or_safe_disposa: "",
      },
    };
    this.number_of_consumer_complaints_in_respect = this.data
      ?.essential_indicators?.number_of_consumer_complaints_in_respect || {
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
    this.details_of_instances_of_product_recalls_on_account_of_safety_issues = this
      .data?.essential_indicators
      ?.details_of_instances_of_product_recalls_on_account_of_safety_issues || {
      voluntary_recalls: {
        number: "",
        reason_for_recall: "",
      },
      forced_recalls: {
        number: "",
        reason_for_recall: "",
      },
    };
    this.does_the_entity_have_a_framework_policy_boolean =
      this.data?.essential_indicators
        ?.does_the_entity_have_a_framework_policy_boolean || "--";
    this.does_the_entity_have_a_framework_policy =
      this.data?.essential_indicators
        ?.does_the_entity_have_a_framework_policy || "--";
    this.provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating =
      this.data?.essential_indicators
        ?.provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating ||
      "--";

    this.channels_or_platforms_where_information =
      this.data?.leadership_indicators
        ?.channels_or_platforms_where_information || "--";
    this.steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible =
      this.data?.leadership_indicators
        ?.steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible ||
      "--";
    this.mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services =
      this.data?.leadership_indicators
        ?.mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services ||
      "--";
    this.does_the_entity_display_product_information_on_the_product_over =
      this.data?.leadership_indicators
        ?.does_the_entity_display_product_information_on_the_product_over ||
      "--";
    this.does_the_entity_display_product_information_on_the_product_over_brief =
      this.data?.leadership_indicators
        ?.does_the_entity_display_product_information_on_the_product_over_brief ||
      "--";
    this.does_the_entity_display_product_information_on_the_product_over_survey =
      this.data?.leadership_indicators
        ?.does_the_entity_display_product_information_on_the_product_over_survey ||
      "--";
    this.five_a_number_of_instances_of_data_breaches_along_with_impact =
      this.data?.leadership_indicators
        ?.five_a_number_of_instances_of_data_breaches_along_with_impact || "--";
    this.five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer =
      this.data?.leadership_indicators
        ?.five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer ||
      "--";
  }
}
