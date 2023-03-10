import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { PrinciplesService } from "../../../../providers/principles.service";
@Component({
  selector: "app-monthly-principle-one",
  templateUrl: "./monthly-principle-one.component.html",
  styleUrls: ["./monthly-principle-one.component.scss"],
})
export class MonthlyPrincipleOneComponent implements OnInit {
  @Input() startDate: any = "";
  @Input() endDate: any = "";
  @Input() branch_id: any = "";

  alert: any = {};
  showAlert: boolean = false;
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
      year: this._utilities.selectedFinancialYear,
      directors: "",
      kmps: "",
      employees: "",
      workers: "",
    },
    previous_financial_yr: {
      year: this._utilities.previousFinancialYear,
      directors: "",
      kmps: "",
      employees: "",
      workers: "",
    },
  };
  details_of_complaints: any = {
    current_financial_yr: {
      year: this._utilities.selectedFinancialYear,
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
      year: this._utilities.previousFinancialYear,
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
  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  intervalId: any;
  reportYear: any = "";

  //aggregatedObject
  aggregatedObject: any = {
    principles_during_the_financial_year: {
      employees_other_than_bod_and_kmps: {
        percentage_of_person: 0,
        topics: "",
        total_number_of_training: 0,
      },
      key_managerial_personnel: {
        percentage_of_person: 0,
        topics: "",
        total_number_of_training: 0,
      },
      segment_board_of_director: {
        percentage_of_person: 0,
        topics: "",
        total_number_of_training: 0,
      },
      workers: {
        percentage_of_person: 0,
        topics: "",
        total_number_of_training: 0,
      },
    },
    awareness_programmes_conducted: [],
  };
  constructor(
    public _utilities: CommonFunctionsService,
    private _principlesService: PrinciplesService,
    private _activatedRoute: ActivatedRoute
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
  }

  getMonthData() {
    this._principlesService
      .getMonthlySurveyData({
        company_id: this._utilities.selectedCompany?.company_id,
        form: 1,
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
            response?.data.filter((e) => {
              for (const key in e?.essential_indicators
                ?.principles_during_the_financial_year) {
                if (
                  e?.essential_indicators?.principles_during_the_financial_year.hasOwnProperty(
                    key
                  )
                ) {
                  for (const finalKey in e?.essential_indicators
                    ?.principles_during_the_financial_year[key]) {
                    if (
                      e?.essential_indicators?.principles_during_the_financial_year[
                        key
                      ].hasOwnProperty(finalKey)
                    ) {
                      if (
                        typeof e?.essential_indicators
                          ?.principles_during_the_financial_year[key][
                          finalKey
                        ] == "number"
                      ) {
                        this.aggregatedObject.principles_during_the_financial_year[
                          key
                        ][finalKey] +=
                          e?.essential_indicators?.principles_during_the_financial_year[
                            key
                          ][finalKey];
                      } else {
                        this.aggregatedObject.principles_during_the_financial_year[
                          key
                        ][finalKey] +=
                          e?.essential_indicators
                            ?.principles_during_the_financial_year[key][
                            finalKey
                          ] + ", ";
                      }
                    }
                  }
                }
              }
              this.aggregatedObject.awareness_programmes_conducted = this.aggregatedObject.awareness_programmes_conducted.concat(
                e?.leadership_indicators?.awareness_programmes_conducted || []
              );
            });
            this.mapAggregatedValue();
          }
        },
        (err) => {
          this.resetData();
          console.log(err);
        }
      );
  }

  mapAggregatedValue() {
    this.principles_during_the_financial_year.segment_board_of_director.total_number_of_training =
      this.aggregatedObject?.principles_during_the_financial_year
        ?.segment_board_of_director?.total_number_of_training || 0;
    this.principles_during_the_financial_year.segment_board_of_director.percentage_of_person =
      this.aggregatedObject?.principles_during_the_financial_year
        ?.segment_board_of_director?.percentage_of_person || 0;
    this.principles_during_the_financial_year.segment_board_of_director.topics =
      this.aggregatedObject?.principles_during_the_financial_year?.segment_board_of_director?.topics.slice(
        0,
        -2
      ) || "";

    this.principles_during_the_financial_year.employees_other_than_bod_and_kmps.total_number_of_training =
      this.aggregatedObject?.principles_during_the_financial_year
        ?.employees_other_than_bod_and_kmps?.total_number_of_training || 0;
    this.principles_during_the_financial_year.employees_other_than_bod_and_kmps.percentage_of_person =
      this.aggregatedObject?.principles_during_the_financial_year
        ?.employees_other_than_bod_and_kmps?.percentage_of_person || 0;
    this.principles_during_the_financial_year.employees_other_than_bod_and_kmps.topics =
      this.aggregatedObject?.principles_during_the_financial_year?.employees_other_than_bod_and_kmps?.topics.slice(
        0,
        -2
      ) || "";

    this.principles_during_the_financial_year.key_managerial_personnel.total_number_of_training =
      this.aggregatedObject?.principles_during_the_financial_year
        ?.key_managerial_personnel?.total_number_of_training || 0;
    this.principles_during_the_financial_year.key_managerial_personnel.percentage_of_person =
      this.aggregatedObject?.principles_during_the_financial_year
        ?.key_managerial_personnel?.percentage_of_person || 0;
    this.principles_during_the_financial_year.key_managerial_personnel.topics =
      this.aggregatedObject?.principles_during_the_financial_year?.key_managerial_personnel?.topics.slice(
        0,
        -2
      ) || "";

    this.principles_during_the_financial_year.workers.total_number_of_training =
      this.aggregatedObject?.principles_during_the_financial_year?.workers
        ?.total_number_of_training || 0;
    this.principles_during_the_financial_year.workers.percentage_of_person =
      this.aggregatedObject?.principles_during_the_financial_year?.workers
        ?.percentage_of_person || 0;
    this.principles_during_the_financial_year.workers.topics =
      this.aggregatedObject?.principles_during_the_financial_year?.workers?.topics.slice(
        0,
        -2
      ) || "";

    this.awareness_programmes_conducted =
      this.aggregatedObject?.awareness_programmes_conducted || [];
  }

  resetData() {
    this.principles_during_the_financial_year = {
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
    this.details_of_fines_penalties = {
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
    this.monetary_or_non_monetary_action_appealed = [
      {
        case_details: "",
        judicial_institutions: "",
      },
    ];
    this.is_anti_corruption = "";
    this.anti_corruption_or_anti_bribery_policy = "";
    this.web_link_to_the_policy = "";
    this.number_of_directors = {
      current_financial_yr: {
        year: this._utilities.selectedFinancialYear,
        directors: "",
        kmps: "",
        employees: "",
        workers: "",
      },
      previous_financial_yr: {
        year: this._utilities.previousFinancialYear,
        directors: "",
        kmps: "",
        employees: "",
        workers: "",
      },
    };
    this.details_of_complaints = {
      current_financial_yr: {
        year: this._utilities.selectedFinancialYear,
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
        year: this._utilities.previousFinancialYear,
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
      "";
    this.awareness_programmes_conducted = [
      {
        total_number_of_awareness_programmes_held: "",
        principles_covered_under_the_training: "",
        percetage_of_age: "",
      },
    ];
    this.is_managing_conflict = "";
    this.manage_conflict_of_interests_involving_members_of_the_board = "";
  }

  onChangeSelect(mode) {
    if (mode == "is_anti_corruption") {
      this.anti_corruption_or_anti_bribery_policy =
        this.is_anti_corruption != "No" ? "" : "No";
    } else if (mode == "is_managing_conflict") {
      this.manage_conflict_of_interests_involving_members_of_the_board =
        this.is_managing_conflict != "No" ? "" : "No";
    }
  }

  addField(mode) {
    let flag = 1;
    if (mode == 1) {
      this.monetary_or_non_monetary_action_appealed.filter((e) => {
        if (
          e.case_details.trim().length == 0 ||
          e.judicial_institutions.trim().length == 0
        )
          flag = 0;
      });
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message:
            "Please fill all fields of holding / subsidiary / associate companies / joint ventures",
        };
        this.closeAlert();
        return;
      }
      if (this.monetary_or_non_monetary_action_appealed.length < 15)
        this.monetary_or_non_monetary_action_appealed.push({
          case_details: "",
          judicial_institutions: "",
        });
    } else {
      this.awareness_programmes_conducted.filter((e) => {
        if (
          e.total_number_of_awareness_programmes_held == 0 ||
          e.principles_covered_under_the_training.trim().length == 0 ||
          e.percetage_of_age == 0
        )
          flag = 0;
      });
      if (flag == 0) {
        this.showAlert = true;
        this.alert = {
          type: "error",
          message:
            "Please fill all fields of holding / subsidiary / associate companies / joint ventures",
        };
        this.closeAlert();
        return;
      }
      if (this.awareness_programmes_conducted.length < 15)
        this.awareness_programmes_conducted.push({
          total_number_of_awareness_programmes_held: "",
          principles_covered_under_the_training: "",
          percetage_of_age: "",
        });
    }
  }

  removeField(i, mode) {
    if (mode == 1 && this.monetary_or_non_monetary_action_appealed.length > 1) {
      this.monetary_or_non_monetary_action_appealed.splice(i, 1);
    } else {
      if (this.awareness_programmes_conducted.length > 1)
        this.awareness_programmes_conducted.splice(i, 1);
    }
  }

  submitForm() {
    const promise = new Promise((resolve, reject) => {
      let obj = {
        company_id: this._utilities.selectedCompany?.company_id,
        financial_start_date: this._utilities?.financialStartDate,
        financial_end_date: this._utilities?.financialEndDate,
        essential_indicators: {
          principles_during_the_financial_year: this
            .principles_during_the_financial_year,
          details_of_fines_penalties: this.details_of_fines_penalties,
          monetary_or_non_monetary_action_appealed: this.monetary_or_non_monetary_action_appealed.filter(
            (e) => e?.case_details.length > 0
          ),
          anti_corruption_or_anti_bribery_policy: this
            .anti_corruption_or_anti_bribery_policy,
          web_link_to_the_policy: this.web_link_to_the_policy,
          number_of_directors: this.number_of_directors,
          details_of_complaints: this.details_of_complaints,
          provide_details_of_any_corrective_action_taken_or_underway_on_issues_related_to_fines: this
            .provide_details_of_any_corrective_action_taken_or_underway_on_issues_related_to_fines,
        },
        leadership_indicators: {
          awareness_programmes_conducted: this.awareness_programmes_conducted.filter(
            (e) => e.principles_covered_under_the_training.length > 0
          ),
          manage_conflict_of_interests_involving_members_of_the_board: this
            .manage_conflict_of_interests_involving_members_of_the_board,
        },
      };
      let finalObj = this._utilities.removeBlankElements(obj);
      this._principlesService.addPrinciple1(finalObj, true).subscribe(
        (response) => {
          return resolve({ data: finalObj, formName: "Principle 1" });
        },
        (err) => {
          console.log(err);

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
