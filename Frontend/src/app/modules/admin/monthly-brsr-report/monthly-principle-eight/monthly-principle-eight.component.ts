import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { PrinciplesService } from "../../../../providers/principles.service";
@Component({
  selector: "app-monthly-principle-eight",
  templateUrl: "./monthly-principle-eight.component.html",
  styleUrls: ["./monthly-principle-eight.component.scss"],
})
export class MonthlyPrincipleEightComponent implements OnInit {
  @Input() startDate: any = "";
  @Input() endDate: any = "";
  @Input() branch_id: any = "";
  alert: any = {};
  showAlert: boolean = false;
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
  aggregatedObject: any = {
    details_of_beneficiaries_of_CSR_Projects: [],
    percentage_of_input_material_inputs_to_total_inputs_by_value_sourced_from_suppliers: {
      current_financial_year: {
        directly_sourced_from_msmes: 0,
        sourced_directly_from_within_the_district_and_neighbouring_districts: 0,
      },
    },
  };

  aggregatedObjectPrev: any = {
    details_of_beneficiaries_of_CSR_Projects: [],
    percentage_of_input_material_inputs_to_total_inputs_by_value_sourced_from_suppliers: {
      current_financial_year: {
        directly_sourced_from_msmes: 0,
        sourced_directly_from_within_the_district_and_neighbouring_districts: 0,
      },
    },
  };
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
    this.getMonthData();
    this.getMonthDataPrev();
  }

  getMonthData() {
    this._principlesService
      .getMonthlySurveyData({
        company_id: this._utilities.selectedCompany?.company_id,
        form: 8,
        from_date: this.startDate,
        to_date: this.endDate,
        limit: 10,
        offset: 0,
        location_id: this.branch_id,
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          if (response?.status == 200) {
            response?.data.filter((e, i) => {
              for (const key in e?.essential_indicators) {
                if (e?.essential_indicators?.hasOwnProperty(key)) {
                  if (key == "details_of_beneficiaries_of_CSR_Projects") {
                    this.aggregatedObject.details_of_beneficiaries_of_CSR_Projects = this.aggregatedObject.details_of_beneficiaries_of_CSR_Projects.concat(
                      e?.essential_indicators
                        ?.details_of_beneficiaries_of_CSR_Projects || []
                    );
                  } else {
                    for (const secondKey in e?.essential_indicators[key]) {
                      if (
                        e?.essential_indicators[key].hasOwnProperty(secondKey)
                      ) {
                        if (
                          typeof e?.essential_indicators[key][secondKey] ==
                          "number"
                        ) {
                          this.aggregatedObject[key][secondKey] +=
                            e?.essential_indicators[key][secondKey];
                        } else if (
                          typeof e?.essential_indicators[key][secondKey] ==
                          "string"
                        ) {
                          this.aggregatedObject[key][secondKey] +=
                            e?.essential_indicators[key][secondKey];
                          if (response?.data.length > i + 1) {
                            this.aggregatedObject[key][secondKey] += ", ";
                          }
                        } else {
                          for (const thirdKey in e?.essential_indicators[key][
                            secondKey
                          ]) {
                            if (
                              e?.essential_indicators[key][
                                secondKey
                              ].hasOwnProperty(thirdKey)
                            ) {
                              if (
                                typeof e?.essential_indicators[key][secondKey][
                                  thirdKey
                                ] == "number"
                              ) {
                                this.aggregatedObject[key][secondKey][
                                  thirdKey
                                ] +=
                                  e?.essential_indicators[key][secondKey][
                                    thirdKey
                                  ];
                              } else if (
                                typeof e?.essential_indicators[key][secondKey][
                                  thirdKey
                                ] == "string"
                              ) {
                                this.aggregatedObject[key][secondKey][
                                  thirdKey
                                ] +=
                                  e?.essential_indicators[key][secondKey][
                                    thirdKey
                                  ];
                                if (response?.data.length > i + 1) {
                                  this.aggregatedObject[key][secondKey][
                                    thirdKey
                                  ] += ", ";
                                }
                              } else {
                                for (const fourthKey in e?.essential_indicators[
                                  key
                                ][secondKey][thirdKey]) {
                                  if (
                                    e?.essential_indicators[key][secondKey][
                                      thirdKey
                                    ].hasOwnProperty(fourthKey)
                                  ) {
                                    if (
                                      typeof e?.essential_indicators[key][
                                        secondKey
                                      ][thirdKey][fourthKey] == "number"
                                    ) {
                                      this.aggregatedObject[key][secondKey][
                                        thirdKey
                                      ][fourthKey] +=
                                        e?.essential_indicators[key][secondKey][
                                          thirdKey
                                        ][fourthKey];
                                    } else if (
                                      typeof e?.essential_indicators[key][
                                        secondKey
                                      ][thirdKey][fourthKey] == "string"
                                    ) {
                                      this.aggregatedObject[key][secondKey][
                                        thirdKey
                                      ][fourthKey] +=
                                        e?.essential_indicators[key][secondKey][
                                          thirdKey
                                        ][fourthKey];
                                      if (response?.data.length > i + 1) {
                                        this.aggregatedObject[key][secondKey][
                                          thirdKey
                                        ][fourthKey] += ", ";
                                      }
                                    } else {
                                      for (const fifthKey in e
                                        ?.essential_indicators[key][secondKey][
                                        thirdKey
                                      ][fourthKey]) {
                                        if (
                                          e?.essential_indicators[key][
                                            secondKey
                                          ][thirdKey][fourthKey].hasOwnProperty(
                                            fifthKey
                                          )
                                        ) {
                                          if (
                                            typeof e?.essential_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] ==
                                            "number"
                                          ) {
                                            this.aggregatedObject[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] +=
                                              e?.essential_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey];
                                          } else if (
                                            typeof e?.essential_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] ==
                                            "string"
                                          ) {
                                            this.aggregatedObject[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] +=
                                              e?.essential_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey];
                                            if (response?.data.length > i + 1) {
                                              this.aggregatedObject[key][
                                                secondKey
                                              ][thirdKey][fourthKey][
                                                fifthKey
                                              ] += ", ";
                                            }
                                          } else {
                                            for (const sixthKey in e
                                              ?.essential_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey]) {
                                              if (
                                                typeof e?.essential_indicators[
                                                  key
                                                ][secondKey][thirdKey][
                                                  fourthKey
                                                ][fifthKey][sixthKey] ==
                                                "number"
                                              ) {
                                                this.aggregatedObject[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey] +=
                                                  e?.essential_indicators[key][
                                                    secondKey
                                                  ][thirdKey][fourthKey][
                                                    fifthKey
                                                  ][sixthKey];
                                              } else if (
                                                typeof e?.essential_indicators[
                                                  key
                                                ][secondKey][thirdKey][
                                                  fourthKey
                                                ][fifthKey][sixthKey] ==
                                                "string"
                                              ) {
                                                this.aggregatedObject[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey] +=
                                                  e?.essential_indicators[key][
                                                    secondKey
                                                  ][thirdKey][fourthKey][
                                                    fifthKey
                                                  ][sixthKey];
                                                if (
                                                  response?.data.length >
                                                  i + 1
                                                ) {
                                                  this.aggregatedObject[key][
                                                    secondKey
                                                  ][thirdKey][fourthKey][
                                                    fifthKey
                                                  ][sixthKey] += ", ";
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
            this.mapAggregatedValue();
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  mapAggregatedValue() {
    this.details_of_beneficiaries_of_csr_projects = this.aggregatedObject?.details_of_beneficiaries_of_CSR_Projects;
    this.percentage_of_input_material.current_financial_year.directly_sourced_from_msmes = this.aggregatedObject?.percentage_of_input_material_inputs_to_total_inputs_by_value_sourced_from_suppliers?.current_financial_year?.directly_sourced_from_msmes;
    this.percentage_of_input_material.current_financial_year.sourced_directly_from_within_the_district_and_neighbouring_districts = this.aggregatedObject?.percentage_of_input_material_inputs_to_total_inputs_by_value_sourced_from_suppliers?.current_financial_year?.sourced_directly_from_within_the_district_and_neighbouring_districts;
  }

  getMonthDataPrev() {
    let prevStartYearAr = this.startDate.split("-");
    let prevEndYearAr = this.endDate.split("-");
    this._principlesService
      .getMonthlySurveyData({
        company_id: this._utilities.selectedCompany?.company_id,
        form: 5,
        from_date: parseInt(prevStartYearAr[0]) - 1 + "-" + prevStartYearAr[1],
        to_date: parseInt(prevEndYearAr[0]) - 1 + "-" + prevEndYearAr[1],
        limit: 10,
        offset: 0,
        location_id: this.branch_id,
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          if (response?.status == 200) {
            response?.data.filter((e, i) => {
              for (const key in e?.essential_indicators) {
                if (e?.essential_indicators?.hasOwnProperty(key)) {
                  if (key == "details_of_beneficiaries_of_CSR_Projects") {
                    this.aggregatedObjectPrev.details_of_beneficiaries_of_CSR_Projects = this.aggregatedObjectPrev.details_of_beneficiaries_of_CSR_Projects.concat(
                      e?.essential_indicators
                        ?.details_of_beneficiaries_of_CSR_Projects || []
                    );
                  } else {
                    for (const secondKey in e?.essential_indicators[key]) {
                      if (
                        e?.essential_indicators[key].hasOwnProperty(secondKey)
                      ) {
                        if (
                          typeof e?.essential_indicators[key][secondKey] ==
                          "number"
                        ) {
                          this.aggregatedObjectPrev[key][secondKey] +=
                            e?.essential_indicators[key][secondKey];
                        } else if (
                          typeof e?.essential_indicators[key][secondKey] ==
                          "string"
                        ) {
                          this.aggregatedObjectPrev[key][secondKey] +=
                            e?.essential_indicators[key][secondKey];
                          if (response?.data.length > i + 1) {
                            this.aggregatedObjectPrev[key][secondKey] += ", ";
                          }
                        } else {
                          for (const thirdKey in e?.essential_indicators[key][
                            secondKey
                          ]) {
                            if (
                              e?.essential_indicators[key][
                                secondKey
                              ].hasOwnProperty(thirdKey)
                            ) {
                              if (
                                typeof e?.essential_indicators[key][secondKey][
                                  thirdKey
                                ] == "number"
                              ) {
                                this.aggregatedObjectPrev[key][secondKey][
                                  thirdKey
                                ] +=
                                  e?.essential_indicators[key][secondKey][
                                    thirdKey
                                  ];
                              } else if (
                                typeof e?.essential_indicators[key][secondKey][
                                  thirdKey
                                ] == "string"
                              ) {
                                this.aggregatedObjectPrev[key][secondKey][
                                  thirdKey
                                ] +=
                                  e?.essential_indicators[key][secondKey][
                                    thirdKey
                                  ];
                                if (response?.data.length > i + 1) {
                                  this.aggregatedObjectPrev[key][secondKey][
                                    thirdKey
                                  ] += ", ";
                                }
                              } else {
                                for (const fourthKey in e?.essential_indicators[
                                  key
                                ][secondKey][thirdKey]) {
                                  if (
                                    e?.essential_indicators[key][secondKey][
                                      thirdKey
                                    ].hasOwnProperty(fourthKey)
                                  ) {
                                    if (
                                      typeof e?.essential_indicators[key][
                                        secondKey
                                      ][thirdKey][fourthKey] == "number"
                                    ) {
                                      this.aggregatedObjectPrev[key][secondKey][
                                        thirdKey
                                      ][fourthKey] +=
                                        e?.essential_indicators[key][secondKey][
                                          thirdKey
                                        ][fourthKey];
                                    } else if (
                                      typeof e?.essential_indicators[key][
                                        secondKey
                                      ][thirdKey][fourthKey] == "string"
                                    ) {
                                      this.aggregatedObjectPrev[key][secondKey][
                                        thirdKey
                                      ][fourthKey] +=
                                        e?.essential_indicators[key][secondKey][
                                          thirdKey
                                        ][fourthKey];
                                      if (response?.data.length > i + 1) {
                                        this.aggregatedObjectPrev[key][
                                          secondKey
                                        ][thirdKey][fourthKey] += ", ";
                                      }
                                    } else {
                                      for (const fifthKey in e
                                        ?.essential_indicators[key][secondKey][
                                        thirdKey
                                      ][fourthKey]) {
                                        if (
                                          e?.essential_indicators[key][
                                            secondKey
                                          ][thirdKey][fourthKey].hasOwnProperty(
                                            fifthKey
                                          )
                                        ) {
                                          if (
                                            typeof e?.essential_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] ==
                                            "number"
                                          ) {
                                            this.aggregatedObjectPrev[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] +=
                                              e?.essential_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey];
                                          } else if (
                                            typeof e?.essential_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] ==
                                            "string"
                                          ) {
                                            this.aggregatedObjectPrev[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey] +=
                                              e?.essential_indicators[key][
                                                secondKey
                                              ][thirdKey][fourthKey][fifthKey];
                                            if (response?.data.length > i + 1) {
                                              this.aggregatedObjectPrev[key][
                                                secondKey
                                              ][thirdKey][fourthKey][
                                                fifthKey
                                              ] += ", ";
                                            }
                                          } else {
                                            for (const sixthKey in e
                                              ?.essential_indicators[key][
                                              secondKey
                                            ][thirdKey][fourthKey][fifthKey]) {
                                              if (
                                                typeof e?.essential_indicators[
                                                  key
                                                ][secondKey][thirdKey][
                                                  fourthKey
                                                ][fifthKey][sixthKey] ==
                                                "number"
                                              ) {
                                                this.aggregatedObjectPrev[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey] +=
                                                  e?.essential_indicators[key][
                                                    secondKey
                                                  ][thirdKey][fourthKey][
                                                    fifthKey
                                                  ][sixthKey];
                                              } else if (
                                                typeof e?.essential_indicators[
                                                  key
                                                ][secondKey][thirdKey][
                                                  fourthKey
                                                ][fifthKey][sixthKey] ==
                                                "string"
                                              ) {
                                                this.aggregatedObjectPrev[key][
                                                  secondKey
                                                ][thirdKey][fourthKey][
                                                  fifthKey
                                                ][sixthKey] +=
                                                  e?.essential_indicators[key][
                                                    secondKey
                                                  ][thirdKey][fourthKey][
                                                    fifthKey
                                                  ][sixthKey];
                                                if (
                                                  response?.data.length >
                                                  i + 1
                                                ) {
                                                  this.aggregatedObjectPrev[
                                                    key
                                                  ][secondKey][thirdKey][
                                                    fourthKey
                                                  ][fifthKey][sixthKey] += ", ";
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
            this.mapAggregatedValuePrev();
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  mapAggregatedValuePrev() {
    this.percentage_of_input_material.previous_financial_year.directly_sourced_from_msmes = this.aggregatedObjectPrev?.percentage_of_input_material_inputs_to_total_inputs_by_value_sourced_from_suppliers?.current_financial_year?.directly_sourced_from_msmes;
    this.percentage_of_input_material.previous_financial_year.sourced_directly_from_within_the_district_and_neighbouring_districts = this.aggregatedObjectPrev?.percentage_of_input_material_inputs_to_total_inputs_by_value_sourced_from_suppliers?.current_financial_year?.sourced_directly_from_within_the_district_and_neighbouring_districts;
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
    const promise = new Promise((resolve, reject) => {
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

      this._principlesService.addPrinciple8(finalObj, true).subscribe(
        (response) => {
          return resolve({ data: finalObj, formName: "Principle 8" });
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
