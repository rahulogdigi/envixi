import { Component, OnInit } from "@angular/core";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { PrinciplesService } from "../../../providers/principles.service";
@Component({
  selector: "app-principle-viii",
  templateUrl: "./principle-viii.component.html",
  styleUrls: ["./principle-viii.component.scss"],
})
export class PrincipleViiiComponent implements OnInit {
  alert: any = {};
  showAlert: boolean = false;
  moduleId: string = "63d55e49164bb0415e42d022";
  sia: any[] = [
    {
      name_and_breif_details_of_project: "",
      sia_notification_no: "",
      date_of_notofication: "",
      whether_conducted_by_independent_external_agency: "",
      results_communicated_in_public_domain: "",
      weh_url: "",
    },
  ];
  r_and_r: any[] = [
    {
      name_of_project_for_which_r_and_r_is_going: "",
      state: "",
      district: "",
      no_of_project_affected: "",
      percentage_of_pafs: "",
      amounts_paid_to_pafs_in_inr: "",
    },
  ];
  describe_the_mechanisms_to_receive_and_redress_grievances_of_the_community: "";
  percentage_of_input_material: any = {
    current_financial_year: {
      year: this._utilities.selectedFinancialYear,
      directly_sourced_from_msmes: "",
      sourced_directly_from_within_the_district_and_neighbouring_districts: "",
    },
    previous_financial_year: {
      year: this._utilities.previousFinancialYear,
      directly_sourced_from_msmes: "",
      sourced_directly_from_within_the_district_and_neighbouring_districts: "",
    },
  };
  provide_details_of_actions_taken_to_mitigate: any[] = [
    {
      details_of_negative_social_impact_identified: "",
      corrective_action_taken: "",
    },
  ];
  provide_the_following_information_on_csr_projects: any[] = [
    {
      state: "",
      aspirational_district: "",
      amount_spent_in_inr: "",
    },
  ];
  three_a: any = "";
  three_b: string = "";
  three_c: string = "";
  details_of_the_benefits_derived_and_shared_from_the_intellectual_properties: any[] = [
    {
      intellectual_property_based_on_traditional_knowledge: "",
      owned_acquired: "",
      benefit_shared: "",
      basis_of_calculating_benefit_share: "",
    },
  ];
  details_of_corrective_actions_taken_or_underway_based_on_any_adverse: any[] = [
    {
      name_of_authority: "",
      brief_of_the_case: "",
      corrective_action_taken: "",
    },
  ];
  details_of_beneficiaries_of_csr_projects: any[] = [
    {
      csr_project: "",
      no_of_persons_benefitted_from_csr_project: "",
      percentage_of_beneficiaries_from_vulnerable_and_marginalized_groups: "",
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
        form_type: "principal_eight",
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();

          this.describe_the_mechanisms_to_receive_and_redress_grievances_of_the_community =
            response?.data?.essential_indicators?.describe_the_mechanisms_to_receive_and_redress_grievances_of_the_community;

          this.sia = this._utilities.arrayNullToString(
            response?.data?.essential_indicators?.sia
          );
          if (!this.sia.length) {
            this.sia = [
              {
                name_and_breif_details_of_project: "",
                sia_notification_no: "",
                date_of_notofication: "",
                whether_conducted_by_independent_external_agency: "",
                results_communicated_in_public_domain: "",
                weh_url: "",
              },
            ];
          }
          this.r_and_r = this._utilities.arrayNullToString(
            response?.data?.essential_indicators?.r_and_r
          );
          if (!this.r_and_r.length) {
            this.r_and_r = [
              {
                name_of_project_for_which_r_and_r_is_going: "",
                state: "",
                district: "",
                no_of_project_affected: "",
                percentage_of_pafs: "",
                amounts_paid_to_pafs_in_inr: "",
              },
            ];
          }
          this.percentage_of_input_material = this._utilities.nullToString(
            response?.data?.essential_indicators?.percentage_of_input_material
          );

          this.provide_details_of_actions_taken_to_mitigate = this._utilities.arrayNullToString(
            response?.data?.leadership_indicators
              ?.provide_details_of_actions_taken_to_mitigate
          );
          if (!this.provide_details_of_actions_taken_to_mitigate.length) {
            this.provide_details_of_actions_taken_to_mitigate = [
              {
                details_of_negative_social_impact_identified: "",
                corrective_action_taken: "",
              },
            ];
          }
          this.provide_the_following_information_on_csr_projects = this._utilities.arrayNullToString(
            response?.data?.leadership_indicators
              ?.provide_the_following_information_on_csr_projects
          );
          if (!this.provide_the_following_information_on_csr_projects.length) {
            this.provide_the_following_information_on_csr_projects = [
              {
                state: "",
                aspirational_district: "",
                amount_spent_in_inr: "",
              },
            ];
          }
          this.three_a = response?.data?.leadership_indicators?.three_a || "";
          this.three_b = response?.data?.leadership_indicators?.three_b || "";
          this.three_c = response?.data?.leadership_indicators?.three_c || "";

          this.details_of_the_benefits_derived_and_shared_from_the_intellectual_properties = this._utilities.arrayNullToString(
            response?.data?.leadership_indicators
              ?.details_of_the_benefits_derived_and_shared_from_the_intellectual_properties
          );

          this.details_of_corrective_actions_taken_or_underway_based_on_any_adverse = this._utilities.arrayNullToString(
            response?.data?.leadership_indicators
              ?.details_of_corrective_actions_taken_or_underway_based_on_any_adverse
          );
          if (
            !this
              .details_of_corrective_actions_taken_or_underway_based_on_any_adverse
              .length
          ) {
            this.details_of_corrective_actions_taken_or_underway_based_on_any_adverse = [
              {
                name_of_authority: "",
                brief_of_the_case: "",
                corrective_action_taken: "",
              },
            ];
          }
          this.details_of_beneficiaries_of_csr_projects = this._utilities.arrayNullToString(
            response?.data?.leadership_indicators
              ?.details_of_beneficiaries_of_csr_projects
          );
          if (!this.details_of_beneficiaries_of_csr_projects.length) {
            this.details_of_beneficiaries_of_csr_projects = [
              {
                csr_project: "",
                no_of_persons_benefitted_from_csr_project: "",
                percentage_of_beneficiaries_from_vulnerable_and_marginalized_groups:
                  "",
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
    this.sia = [
      {
        name_and_breif_details_of_project: "",
        sia_notification_no: "",
        date_of_notofication: "",
        whether_conducted_by_independent_external_agency: "",
        results_communicated_in_public_domain: "",
        weh_url: "",
      },
    ];
    this.r_and_r = [
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
      "";
    this.percentage_of_input_material = {
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
    this.provide_details_of_actions_taken_to_mitigate = [
      {
        details_of_negative_social_impact_identified: "",
        corrective_action_taken: "",
      },
    ];
    this.provide_the_following_information_on_csr_projects = [
      {
        state: "",
        aspirational_district: "",
        amount_spent_in_inr: "",
      },
    ];
    this.three_a = "";
    this.three_b = "";
    this.three_c = "";
    this.details_of_the_benefits_derived_and_shared_from_the_intellectual_properties = [
      {
        intellectual_property_based_on_traditional_knowledge: "",
        owned_acquired: "",
        benefit_shared: "",
        basis_of_calculating_benefit_share: "",
      },
    ];
    this.details_of_corrective_actions_taken_or_underway_based_on_any_adverse = [
      {
        name_of_authority: "",
        brief_of_the_case: "",
        corrective_action_taken: "",
      },
    ];
    this.details_of_beneficiaries_of_csr_projects = [
      {
        csr_project: "",
        no_of_persons_benefitted_from_csr_project: "",
        percentage_of_beneficiaries_from_vulnerable_and_marginalized_groups: "",
      },
    ];
  }
  addField(mode) {
    let flag = 1;
    if (mode == 1) {
      this.sia.filter((e) => {
        if (
          e?.name_and_breif_details_of_project.trim().length == 0 ||
          e?.sia_notification_no.trim().length == 0 ||
          e?.date_of_notofication.trim().length == 0 ||
          e?.whether_conducted_by_independent_external_agency === "" ||
          e?.results_communicated_in_public_domain === "" ||
          e?.weh_url.trim().length == 0
        )
          flag = 0;
      });
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Essential Indicators point 1",
        };
        this.closeAlert();
        return;
      }
      if (this.sia.length < 15)
        this.sia.push({
          name_and_breif_details_of_project: "",
          sia_notification_no: "",
          date_of_notofication: "",
          whether_conducted_by_independent_external_agency: true,
          results_communicated_in_public_domain: false,
          weh_url: "",
        });
    } else if (mode == 2) {
      this.r_and_r.filter((e) => {
        if (
          e?.name_of_project_for_which_r_and_r_is_going.trim().length == 0 ||
          e?.state.trim().length == 0 ||
          e?.district.trim().length == 0 ||
          e?.no_of_project_affected === "" ||
          e?.percentage_of_pafs === "" ||
          e?.amounts_paid_to_pafs_in_inr === ""
        )
          flag = 0;
      });
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Essential Indicators point 2",
        };
        this.closeAlert();
        return;
      }
      if (this.r_and_r.length < 15)
        this.r_and_r.push({
          name_of_project_for_which_r_and_r_is_going: "",
          state: "",
          district: "",
          no_of_project_affected: 0,
          percentage_of_pafs: 0,
          amounts_paid_to_pafs_in_inr: 0,
        });
    } else if (mode == 3) {
      this.provide_details_of_actions_taken_to_mitigate.filter((e) => {
        if (
          e?.details_of_negative_social_impact_identified.trim().length == 0 ||
          e?.corrective_action_taken.trim().length == 0
        )
          flag = 0;
      });
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Leadership Indicators point 1",
        };
        this.closeAlert();
        return;
      }
      if (this.provide_details_of_actions_taken_to_mitigate.length < 15)
        this.provide_details_of_actions_taken_to_mitigate.push({
          details_of_negative_social_impact_identified: "",
          corrective_action_taken: "",
        });
    } else if (mode == 4) {
      this.provide_the_following_information_on_csr_projects.filter((e) => {
        if (
          e?.state.trim().length == 0 ||
          e?.aspirational_district.trim().length == 0 ||
          e?.amount_spent_in_inr === ""
        )
          flag = 0;
      });
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Leadership Indicators point 2",
        };
        this.closeAlert();
        return;
      }
      if (this.provide_the_following_information_on_csr_projects.length < 15)
        this.provide_the_following_information_on_csr_projects.push({
          state: "",
          aspirational_district: "",
          amount_spent_in_inr: 0,
        });
    } else if (mode == 5) {
      this.details_of_the_benefits_derived_and_shared_from_the_intellectual_properties.filter(
        (e) => {
          if (
            e?.intellectual_property_based_on_traditional_knowledge.trim()
              .length == 0 ||
            e?.basis_of_calculating_benefit_share.trim().length == 0 ||
            e?.owned_acquired === "" ||
            e?.benefit_shared === ""
          )
            flag = 0;
        }
      );
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Leadership Indicators point 4",
        };
        this.closeAlert();
        return;
      }
      if (
        this
          .details_of_the_benefits_derived_and_shared_from_the_intellectual_properties
          .length < 15
      )
        this.details_of_the_benefits_derived_and_shared_from_the_intellectual_properties.push(
          {
            intellectual_property_based_on_traditional_knowledge: "",
            owned_acquired: true,
            benefit_shared: true,
            basis_of_calculating_benefit_share: "",
          }
        );
    } else if (mode == 6) {
      this.details_of_corrective_actions_taken_or_underway_based_on_any_adverse.filter(
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
          message: "Please fill all fields of Leadership Indicators point 5",
        };
        this.closeAlert();
        return;
      }
      if (
        this
          .details_of_corrective_actions_taken_or_underway_based_on_any_adverse
          .length < 15
      )
        this.details_of_corrective_actions_taken_or_underway_based_on_any_adverse.push(
          {
            name_of_authority: "",
            brief_of_the_case: "",
            corrective_action_taken: "",
          }
        );
    } else if (mode == 7) {
      this.details_of_beneficiaries_of_csr_projects.filter((e) => {
        if (
          e?.csr_project.trim().length == 0 ||
          e?.no_of_persons_benefitted_from_csr_project === "" ||
          e?.percentage_of_beneficiaries_from_vulnerable_and_marginalized_groups.trim()
            .length == 0
        )
          flag = 0;
      });
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: "Please fill all fields of Leadership Indicators point 6",
        };
        this.closeAlert();
        return;
      }
      if (this.details_of_beneficiaries_of_csr_projects.length < 15)
        this.details_of_beneficiaries_of_csr_projects.push({
          csr_project: "",
          no_of_persons_benefitted_from_csr_project: "",
          percentage_of_beneficiaries_from_vulnerable_and_marginalized_groups:
            "",
        });
    }
  }
  removeField(mode, i) {
    if (mode == 1 && this.sia.length > 1) this.sia.splice(i, 1);
    else if (mode == 2 && this.r_and_r.length > 1) this.r_and_r.splice(i, 1);
    else if (
      mode == 3 &&
      this.provide_details_of_actions_taken_to_mitigate.length > 1
    )
      this.provide_details_of_actions_taken_to_mitigate.splice(i, 1);
    else if (
      mode == 4 &&
      this.provide_the_following_information_on_csr_projects.length > 1
    )
      this.provide_the_following_information_on_csr_projects.splice(i, 1);
    else if (
      mode == 5 &&
      this
        .details_of_the_benefits_derived_and_shared_from_the_intellectual_properties
        .length > 1
    )
      this.details_of_the_benefits_derived_and_shared_from_the_intellectual_properties.splice(
        i,
        1
      );
    else if (
      mode == 6 &&
      this.details_of_corrective_actions_taken_or_underway_based_on_any_adverse
        .length > 1
    )
      this.details_of_corrective_actions_taken_or_underway_based_on_any_adverse.splice(
        i,
        1
      );
    else if (
      mode == 7 &&
      this.details_of_beneficiaries_of_csr_projects.length > 1
    )
      this.details_of_beneficiaries_of_csr_projects.splice(i, 1);
  }
  submitForm() {
    let obj = {
      company_id: this._utilities.selectedCompany?.company_id,
      financial_start_date: this._utilities?.financialStartDate,
      financial_end_date: this._utilities?.financialEndDate,
      essential_indicators: {
        sia: this.sia.filter(
          (e) => e.name_and_breif_details_of_project.length > 0
        ),
        r_and_r: this.r_and_r.filter(
          (e) => e.name_of_project_for_which_r_and_r_is_going.length > 0
        ),
        describe_the_mechanisms_to_receive_and_redress_grievances_of_the_community: this
          .describe_the_mechanisms_to_receive_and_redress_grievances_of_the_community,
        percentage_of_input_material: this.percentage_of_input_material,
      },
      leadership_indicators: {
        provide_details_of_actions_taken_to_mitigate: this.provide_details_of_actions_taken_to_mitigate.filter(
          (e) => e.details_of_negative_social_impact_identified.length > 0
        ),
        provide_the_following_information_on_csr_projects: this.provide_the_following_information_on_csr_projects.filter(
          (e) => e.state.length > 0
        ),
        three_a: this.three_a,
        three_b: this.three_b,
        three_c: this.three_c,
        details_of_the_benefits_derived_and_shared_from_the_intellectual_properties: this.details_of_the_benefits_derived_and_shared_from_the_intellectual_properties.filter(
          (e) =>
            e.intellectual_property_based_on_traditional_knowledge.length > 0
        ),
        details_of_corrective_actions_taken_or_underway_based_on_any_adverse: this.details_of_corrective_actions_taken_or_underway_based_on_any_adverse.filter(
          (e) => e.name_of_authority.length > 0
        ),
        details_of_beneficiaries_of_csr_projects: this.details_of_beneficiaries_of_csr_projects.filter(
          (e) => e.csr_project.length > 0
        ),
      },
    };
    let finalObj = this._utilities.removeBlankElements(obj);
    this._utilities.loaderOn();
    this._principlesService.addPrinciple8(finalObj).subscribe(
      (response) => {
        this._utilities.loaderOff();
        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Principle 8 Form Submitted Successfully",
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
