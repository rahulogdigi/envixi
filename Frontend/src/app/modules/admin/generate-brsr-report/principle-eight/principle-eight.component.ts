import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";

@Component({
  selector: "app-principle-eight",
  templateUrl: "./principle-eight.component.html",
  styleUrls: ["./principle-eight.component.scss"],
})
export class PrincipleEightComponent implements OnInit {
  @Input() data: any = {};
  sia: any[] = [];
  r_and_r: any[] = [];
  describe_the_mechanisms_to_receive_and_redress_grievances_of_the_community: "";
  percentage_of_input_material: any = {};
  provide_details_of_actions_taken_to_mitigate: any[] = [];
  provide_the_following_information_on_csr_projects: any[] = [];
  three_a: any = "";
  three_b: string = "";
  three_c: string = "";
  details_of_the_benefits_derived_and_shared_from_the_intellectual_properties: any[] = [];
  details_of_corrective_actions_taken_or_underway_based_on_any_adverse: any[] = [];
  details_of_beneficiaries_of_csr_projects: any[] = [];
  constructor(public _utilities: CommonFunctionsService) {}
  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.sia = this.data?.essential_indicators?.sia || [
      {
        name_and_breif_details_of_project: "",
        sia_notification_no: "",
        date_of_notofication: "",
        whether_conducted_by_independent_external_agency: "",
        results_communicated_in_public_domain: "",
        weh_url: "",
      },
    ];

    this.r_and_r = this.data?.essential_indicators?.r_and_r || [
      {
        name_of_project_for_which_r_and_r_is_going: "",
        state: "",
        district: "",
        no_of_project_affected: "",
        percentage_of_pafs: "",
        amounts_paid_to_pafs_in_inr: "",
      },
    ];

    this.describe_the_mechanisms_to_receive_and_redress_grievances_of_the_community =
      this.data?.essential_indicators
        ?.describe_the_mechanisms_to_receive_and_redress_grievances_of_the_community ||
      "--";

    this.percentage_of_input_material = this.data?.essential_indicators
      ?.percentage_of_input_material || {
      current_financial_year: {
        year: this._utilities.selectedFinancialYear,
        directly_sourced_from_msmes: "",
        sourced_directly_from_within_the_district_and_neighbouring_districts:
          "",
      },
      previous_financial_year: {
        year: this._utilities.previousFinancialYear,
        directly_sourced_from_msmes: "",
        sourced_directly_from_within_the_district_and_neighbouring_districts:
          "",
      },
    };

    this.provide_details_of_actions_taken_to_mitigate = this.data
      ?.leadership_indicators?.provide_details_of_actions_taken_to_mitigate || [
      {
        details_of_negative_social_impact_identified: "",
        corrective_action_taken: "",
      },
    ];

    this.provide_the_following_information_on_csr_projects = this.data
      ?.leadership_indicators
      ?.provide_the_following_information_on_csr_projects || [
      {
        state: "",
        aspirational_district: "",
        amount_spent_in_inr: "",
      },
    ];

    this.three_a = this.data?.leadership_indicators?.three_a || "--";
    this.three_b = this.data?.leadership_indicators?.three_b || "--";
    this.three_c = this.data?.leadership_indicators?.three_c || "--";

    this.details_of_the_benefits_derived_and_shared_from_the_intellectual_properties = this
      .data?.leadership_indicators
      ?.details_of_the_benefits_derived_and_shared_from_the_intellectual_properties || [
      {
        intellectual_property_based_on_traditional_knowledge: "",
        owned_acquired: "",
        benefit_shared: "",
        basis_of_calculating_benefit_share: "",
      },
    ];

    this.details_of_corrective_actions_taken_or_underway_based_on_any_adverse = this
      .data?.leadership_indicators
      ?.details_of_corrective_actions_taken_or_underway_based_on_any_adverse || [
      {
        name_of_authority: "",
        brief_of_the_case: "",
        corrective_action_taken: "",
      },
    ];

    this.details_of_beneficiaries_of_csr_projects = this.data
      ?.leadership_indicators?.details_of_beneficiaries_of_csr_projects || [
      {
        csr_project: "",
        no_of_persons_benefitted_from_csr_project: "",
        percentage_of_beneficiaries_from_vulnerable_and_marginalized_groups: "",
      },
    ];
  }
}
