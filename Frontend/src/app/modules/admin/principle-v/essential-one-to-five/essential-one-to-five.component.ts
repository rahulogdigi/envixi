import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-essential-one-to-five",
  templateUrl: "./essential-one-to-five.component.html",
  styleUrls: ["./essential-one-to-five.component.scss"],
})
export class EssentialOneToFiveComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  employees_and_workers_who_have_been_provided_training_on_human_rights: any = {
    current_financial_year: {
      employees: {
        permanent: {
          total_a: "",
          no_of_employees_or_workers_b: "",
          percentage_b_divided_by_a: "",
        },
        other_permanent: {
          total_a: "",
          no_of_employees_or_workers_b: "",
          percentage_b_divided_by_a: "",
        },
        total_employees: {
          total_a: "",
          no_of_employees_or_workers_b: "",
          percentage_b_divided_by_a: "",
        },
      },
      workers: {
        permanent: {
          total_a: "",
          no_of_employees_or_workers_b: "",
          percentage_b_divided_by_a: "",
        },
        other_permanent: {
          total_a: "",
          no_of_employees_or_workers_b: "",
          percentage_b_divided_by_a: "",
        },
        total_workers: {
          total_a: "",
          no_of_employees_or_workers_b: "",
          percentage_b_divided_by_a: "",
        },
      },
    },
    previous_financial_year: {
      employees: {
        permanent: {
          total_c: "",
          no_of_employees_or_workers_d: "",
          percentage_d_divided_by_c: "",
        },
        other_permanent: {
          total_c: "",
          no_of_employees_or_workers_d: "",
          percentage_d_divided_by_c: "",
        },
        total_employees: {
          total_c: "",
          no_of_employees_or_workers_d: "",
          percentage_d_divided_by_c: "",
        },
      },
      workers: {
        permanent: {
          total_c: "",
          no_of_employees_or_workers_d: "",
          percentage_d_divided_by_c: "",
        },
        other_permanent: {
          total_c: "",
          no_of_employees_or_workers_d: "",
          percentage_d_divided_by_c: "",
        },
        total_workers: {
          total_c: "",
          no_of_employees_or_workers_d: "",
          percentage_d_divided_by_c: "",
        },
      },
    },
  };
  details_of_minimum_wages_paid_to_employees: any = {
    current_financial_year: {
      employees: {
        permanent_male: {
          total_a: "",
          equal_to_minimum_wage_no_b: "",
          equal_to_minimum_wage_no_b_divided_by_a: "",
          more_than_minimum_wage_no_c: "",
          more_than_minimum_wage_no_c_divided_by_a: "",
        },
        permanent_female: {
          total_a: "",
          equal_to_minimum_wage_no_b: "",
          equal_to_minimum_wage_no_b_divided_by_a: "",
          more_than_minimum_wage_no_c: "",
          more_than_minimum_wage_no_c_divided_by_a: "",
        },
        other_than_permanent_male: {
          total_a: "",
          equal_to_minimum_wage_no_b: "",
          equal_to_minimum_wage_no_b_divided_by_a: "",
          more_than_minimum_wage_no_c: "",
          more_than_minimum_wage_no_c_divided_by_a: "",
        },
        other_than_permanent_female: {
          total_a: "",
          equal_to_minimum_wage_no_b: "",
          equal_to_minimum_wage_no_b_divided_by_a: "",
          more_than_minimum_wage_no_c: "",
          more_than_minimum_wage_no_c_divided_by_a: "",
        },
      },
      workers: {
        permanent_male: {
          total_a: "",
          equal_to_minimum_wage_no_b: "",
          equal_to_minimum_wage_no_b_divided_by_a: "",
          more_than_minimum_wage_no_c: "",
          more_than_minimum_wage_no_c_divided_by_a: "",
        },
        permanent_female: {
          total_a: "",
          equal_to_minimum_wage_no_b: "",
          equal_to_minimum_wage_no_b_divided_by_a: "",
          more_than_minimum_wage_no_c: "",
          more_than_minimum_wage_no_c_divided_by_a: "",
        },
        other_than_permanent_male: {
          total_a: "",
          equal_to_minimum_wage_no_b: "",
          equal_to_minimum_wage_no_b_divided_by_a: "",
          more_than_minimum_wage_no_c: "",
          more_than_minimum_wage_no_c_divided_by_a: "",
        },
        other_than_permanent_female: {
          total_a: "",
          equal_to_minimum_wage_no_b: "",
          equal_to_minimum_wage_no_b_divided_by_a: "",
          more_than_minimum_wage_no_c: "",
          more_than_minimum_wage_no_c_divided_by_a: "",
        },
      },
    },
    previous_financial_year: {
      employees: {
        permanent_male: {
          total_d: "",
          equal_to_minimum_wage_no_e: "",
          equal_to_minimum_wage_no_e_divided_by_d: "",
          more_than_minimum_wage_no_f: "",
          more_than_minimum_wage_no_f_divided_by_d: "",
        },
        permanent_female: {
          total_d: "",
          equal_to_minimum_wage_no_e: "",
          equal_to_minimum_wage_no_e_divided_by_d: "",
          more_than_minimum_wage_no_f: "",
          more_than_minimum_wage_no_f_divided_by_d: "",
        },
        other_than_permanent_male: {
          total_d: "",
          equal_to_minimum_wage_no_e: "",
          equal_to_minimum_wage_no_e_divided_by_d: "",
          more_than_minimum_wage_no_f: "",
          more_than_minimum_wage_no_f_divided_by_d: "",
        },
        other_than_permanent_female: {
          total_d: "",
          equal_to_minimum_wage_no_e: "",
          equal_to_minimum_wage_no_e_divided_by_d: "",
          more_than_minimum_wage_no_f: "",
          more_than_minimum_wage_no_f_divided_by_d: "",
        },
      },
      workers: {
        permanent_male: {
          total_d: "",
          equal_to_minimum_wage_no_e: "",
          equal_to_minimum_wage_no_e_divided_by_d: "",
          more_than_minimum_wage_no_f: "",
          more_than_minimum_wage_no_f_divided_by_d: "",
        },
        permanent_female: {
          total_d: "",
          equal_to_minimum_wage_no_e: "",
          equal_to_minimum_wage_no_e_divided_by_d: "",
          more_than_minimum_wage_no_f: "",
          more_than_minimum_wage_no_f_divided_by_d: "",
        },
        other_than_permanent_male: {
          total_d: "",
          equal_to_minimum_wage_no_e: "",
          equal_to_minimum_wage_no_e_divided_by_d: "",
          more_than_minimum_wage_no_f: "",
          more_than_minimum_wage_no_f_divided_by_d: "",
        },
        other_than_permanent_female: {
          total_d: "",
          equal_to_minimum_wage_no_e: "",
          equal_to_minimum_wage_no_e_divided_by_d: "",
          more_than_minimum_wage_no_f: "",
          more_than_minimum_wage_no_f_divided_by_d: "",
        },
      },
    },
  };
  details_of_remuneration: any = {
    boards_of_directors: {
      male: {
        number: "",
        median_remuneration: "",
      },
      female: {
        number: "",
        median_remuneration: "",
      },
    },
    key_managerial: {
      male: {
        number: "",
        median_remuneration: "",
      },
      female: {
        number: "",
        median_remuneration: "",
      },
    },
    other_than_bod_and_kmp: {
      male: {
        number: "",
        median_remuneration: "",
      },
      female: {
        number: "",
        median_remuneration: "",
      },
    },
    workers: {
      male: {
        number: "",
        median_remuneration: "",
      },
      female: {
        number: "",
        median_remuneration: "",
      },
    },
  };
  do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business: any =
    "";
  describe_the_internal_mechanisms_in_place_to_redress_grievances: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  ngOnChanges(): void {
    if (this.response?.essential_indicators) {
      let obj = this._utilities.nullToString(
        this.response?.essential_indicators
          ?.employees_and_workers_who_have_been_provided_training_on_human_rights
      );
      this.employees_and_workers_who_have_been_provided_training_on_human_rights = obj;

      this.details_of_minimum_wages_paid_to_employees = this._utilities.nullToString(
        this.response?.essential_indicators
          ?.details_of_minimum_wages_paid_to_employees
      );

      this.details_of_remuneration = this._utilities.nullToString(
        this.response?.essential_indicators?.details_of_remuneration
      );

      this.do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business =
        this.response?.essential_indicators
          ?.do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business ==
        true
          ? "Yes"
          : this.response?.essential_indicators
              ?.do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business ==
            false
          ? "No"
          : "";

      this.describe_the_internal_mechanisms_in_place_to_redress_grievances =
        this.response?.essential_indicators
          ?.describe_the_internal_mechanisms_in_place_to_redress_grievances ||
        "";
    } else {
      this.employees_and_workers_who_have_been_provided_training_on_human_rights = {
        current_financial_year: {
          employees: {
            permanent: {
              total_a: "",
              no_of_employees_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
            other_permanent: {
              total_a: "",
              no_of_employees_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
            total_employees: {
              total_a: "",
              no_of_employees_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
          },
          workers: {
            permanent: {
              total_a: "",
              no_of_employees_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
            other_permanent: {
              total_a: "",
              no_of_employees_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
            total_workers: {
              total_a: "",
              no_of_employees_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
          },
        },
        previous_financial_year: {
          employees: {
            permanent: {
              total_c: "",
              no_of_employees_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
            other_permanent: {
              total_c: "",
              no_of_employees_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
            total_employees: {
              total_c: "",
              no_of_employees_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
          },
          workers: {
            permanent: {
              total_c: "",
              no_of_employees_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
            other_permanent: {
              total_c: "",
              no_of_employees_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
            total_workers: {
              total_c: "",
              no_of_employees_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
          },
        },
      };

      this.details_of_minimum_wages_paid_to_employees = {
        current_financial_year: {
          employees: {
            permanent_male: {
              total_a: "",
              equal_to_minimum_wage_no_b: "",
              equal_to_minimum_wage_no_b_divided_by_a: "",
              more_than_minimum_wage_no_c: "",
              more_than_minimum_wage_no_c_divided_by_a: "",
            },
            permanent_female: {
              total_a: "",
              equal_to_minimum_wage_no_b: "",
              equal_to_minimum_wage_no_b_divided_by_a: "",
              more_than_minimum_wage_no_c: "",
              more_than_minimum_wage_no_c_divided_by_a: "",
            },
            other_than_permanent_male: {
              total_a: "",
              equal_to_minimum_wage_no_b: "",
              equal_to_minimum_wage_no_b_divided_by_a: "",
              more_than_minimum_wage_no_c: "",
              more_than_minimum_wage_no_c_divided_by_a: "",
            },
            other_than_permanent_female: {
              total_a: "",
              equal_to_minimum_wage_no_b: "",
              equal_to_minimum_wage_no_b_divided_by_a: "",
              more_than_minimum_wage_no_c: "",
              more_than_minimum_wage_no_c_divided_by_a: "",
            },
          },
          workers: {
            permanent_male: {
              total_a: "",
              equal_to_minimum_wage_no_b: "",
              equal_to_minimum_wage_no_b_divided_by_a: "",
              more_than_minimum_wage_no_c: "",
              more_than_minimum_wage_no_c_divided_by_a: "",
            },
            permanent_female: {
              total_a: "",
              equal_to_minimum_wage_no_b: "",
              equal_to_minimum_wage_no_b_divided_by_a: "",
              more_than_minimum_wage_no_c: "",
              more_than_minimum_wage_no_c_divided_by_a: "",
            },
            other_than_permanent_male: {
              total_a: "",
              equal_to_minimum_wage_no_b: "",
              equal_to_minimum_wage_no_b_divided_by_a: "",
              more_than_minimum_wage_no_c: "",
              more_than_minimum_wage_no_c_divided_by_a: "",
            },
            other_than_permanent_female: {
              total_a: "",
              equal_to_minimum_wage_no_b: "",
              equal_to_minimum_wage_no_b_divided_by_a: "",
              more_than_minimum_wage_no_c: "",
              more_than_minimum_wage_no_c_divided_by_a: "",
            },
          },
        },
        previous_financial_year: {
          employees: {
            permanent_male: {
              total_d: "",
              equal_to_minimum_wage_no_e: "",
              equal_to_minimum_wage_no_e_divided_by_d: "",
              more_than_minimum_wage_no_f: "",
              more_than_minimum_wage_no_f_divided_by_d: "",
            },
            permanent_female: {
              total_d: "",
              equal_to_minimum_wage_no_e: "",
              equal_to_minimum_wage_no_e_divided_by_d: "",
              more_than_minimum_wage_no_f: "",
              more_than_minimum_wage_no_f_divided_by_d: "",
            },
            other_than_permanent_male: {
              total_d: "",
              equal_to_minimum_wage_no_e: "",
              equal_to_minimum_wage_no_e_divided_by_d: "",
              more_than_minimum_wage_no_f: "",
              more_than_minimum_wage_no_f_divided_by_d: "",
            },
            other_than_permanent_female: {
              total_d: "",
              equal_to_minimum_wage_no_e: "",
              equal_to_minimum_wage_no_e_divided_by_d: "",
              more_than_minimum_wage_no_f: "",
              more_than_minimum_wage_no_f_divided_by_d: "",
            },
          },
          workers: {
            permanent_male: {
              total_d: "",
              equal_to_minimum_wage_no_e: "",
              equal_to_minimum_wage_no_e_divided_by_d: "",
              more_than_minimum_wage_no_f: "",
              more_than_minimum_wage_no_f_divided_by_d: "",
            },
            permanent_female: {
              total_d: "",
              equal_to_minimum_wage_no_e: "",
              equal_to_minimum_wage_no_e_divided_by_d: "",
              more_than_minimum_wage_no_f: "",
              more_than_minimum_wage_no_f_divided_by_d: "",
            },
            other_than_permanent_male: {
              total_d: "",
              equal_to_minimum_wage_no_e: "",
              equal_to_minimum_wage_no_e_divided_by_d: "",
              more_than_minimum_wage_no_f: "",
              more_than_minimum_wage_no_f_divided_by_d: "",
            },
            other_than_permanent_female: {
              total_d: "",
              equal_to_minimum_wage_no_e: "",
              equal_to_minimum_wage_no_e_divided_by_d: "",
              more_than_minimum_wage_no_f: "",
              more_than_minimum_wage_no_f_divided_by_d: "",
            },
          },
        },
      };

      this.details_of_remuneration = {
        boards_of_directors: {
          male: {
            number: "",
            median_remuneration: "",
          },
          female: {
            number: "",
            median_remuneration: "",
          },
        },
        key_managerial: {
          male: {
            number: "",
            median_remuneration: "",
          },
          female: {
            number: "",
            median_remuneration: "",
          },
        },
        other_than_bod_and_kmp: {
          male: {
            number: "",
            median_remuneration: "",
          },
          female: {
            number: "",
            median_remuneration: "",
          },
        },
        workers: {
          male: {
            number: "",
            median_remuneration: "",
          },
          female: {
            number: "",
            median_remuneration: "",
          },
        },
      };
      this.do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business =
        "";
      this.describe_the_internal_mechanisms_in_place_to_redress_grievances = "";
    }
  }
  initialize() {
    this._emitter.emit({
      from: "one_to_five",
      data: {
        employees_and_workers_who_have_been_provided_training_on_human_rights: this
          .employees_and_workers_who_have_been_provided_training_on_human_rights,
        details_of_minimum_wages_paid_to_employees: this
          .details_of_minimum_wages_paid_to_employees,
        details_of_remuneration: this.details_of_remuneration,
        do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business:
          this
            .do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business ==
          "Yes"
            ? true
            : this
                .do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business ==
              "No"
            ? false
            : "",
        describe_the_internal_mechanisms_in_place_to_redress_grievances: this
          .describe_the_internal_mechanisms_in_place_to_redress_grievances,
      },
    });
  }

  setMonthlyData(aggregatedObject, isCurrent) {
    if (isCurrent) {
      this.employees_and_workers_who_have_been_provided_training_on_human_rights.current_financial_year =
        aggregatedObject?.employees_and_workers_who_have_been_provided_training_on_human_rights?.current_financial_year;
    } else {
      this.employees_and_workers_who_have_been_provided_training_on_human_rights.previous_financial_year =
        aggregatedObject?.employees_and_workers_who_have_been_provided_training_on_human_rights?.current_financial_year;
    }
  }

  sumUp(mode, key1, key2, key3, key4?) {
    let val1 = "0",
      val2 = "0",
      val3 = "0",
      val4 = "0";
    if (mode == "1") {
      let catType = key2 == "workers" ? "total_workers" : "total_employees";
      val1 =
        this
          .employees_and_workers_who_have_been_provided_training_on_human_rights[
          key1
        ][key2]["permanent"][key4] || "0";
      val2 =
        this
          .employees_and_workers_who_have_been_provided_training_on_human_rights[
          key1
        ][key2]["other_permanent"][key4] || "0";
      this.employees_and_workers_who_have_been_provided_training_on_human_rights[
        key1
      ][key2][catType][key4] = parseFloat(val1) + parseFloat(val2);

      //for percentage
      if (key4 == "total_a" || key4 == "no_of_employees_or_workers_b") {
        let tot1 =
          this
            .employees_and_workers_who_have_been_provided_training_on_human_rights[
            key1
          ][key2][key3]?.total_a || 0;

        val1 =
          this
            .employees_and_workers_who_have_been_provided_training_on_human_rights[
            key1
          ][key2][key3]?.no_of_employees_or_workers_b || 0;
        this.employees_and_workers_who_have_been_provided_training_on_human_rights[
          key1
        ][key2][key3]["percentage_b_divided_by_a"] = this._utilities.getPercent(
          tot1,
          val1
        );
        this.addPercentage(mode, key1, key2, "percentage_b_divided_by_a");
      } else if (key4 == "total_c" || key4 == "no_of_employees_or_workers_d") {
        let tot2 =
          this
            .employees_and_workers_who_have_been_provided_training_on_human_rights[
            key1
          ][key2][key3]?.total_c || 0;

        val2 =
          this
            .employees_and_workers_who_have_been_provided_training_on_human_rights[
            key1
          ][key2][key3]?.no_of_employees_or_workers_d || 0;
        this.employees_and_workers_who_have_been_provided_training_on_human_rights[
          key1
        ][key2][key3]["percentage_d_divided_by_c"] = this._utilities.getPercent(
          tot2,
          val2
        );
        this.addPercentage(mode, key1, key2, "percentage_d_divided_by_c");
      }
    }

    if (mode == "2") {
      let totalKey = "total_a",
        val1Key = "equal_to_minimum_wage_no_b",
        divideKey1 = "equal_to_minimum_wage_no_b_divided_by_a",
        val2Key = "more_than_minimum_wage_no_c",
        divideKey2 = "more_than_minimum_wage_no_c_divided_by_a";
      if (key1 == "previous_financial_year") {
        totalKey = "total_d";
        (val1Key = "equal_to_minimum_wage_no_e"),
          (divideKey1 = "equal_to_minimum_wage_no_e_divided_by_d"),
          (val2Key = "more_than_minimum_wage_no_f"),
          (divideKey2 = "more_than_minimum_wage_no_f_divided_by_d");
      }
      let totalVal =
        this.details_of_minimum_wages_paid_to_employees[key1][key2][key3][
          totalKey
        ] || 0;
      val1 =
        this.details_of_minimum_wages_paid_to_employees[key1][key2][key3][
          val1Key
        ] || 0;
      this.details_of_minimum_wages_paid_to_employees[key1][key2][key3][
        divideKey1
      ] = this._utilities.getPercent(totalVal, val1);
      val2 =
        this.details_of_minimum_wages_paid_to_employees[key1][key2][key3][
          val2Key
        ] || 0;
      this.details_of_minimum_wages_paid_to_employees[key1][key2][key3][
        divideKey2
      ] = this._utilities.getPercent(totalVal, val2);
    }
  }

  addPercentage(mode, key1, key2, key3, key4?) {
    let val1 = 0,
      val2 = 0;
    if (mode == "1") {
      val1 =
        this
          .employees_and_workers_who_have_been_provided_training_on_human_rights[
          key1
        ][key2]["permanent"][key3] || 0;
      val2 =
        this
          .employees_and_workers_who_have_been_provided_training_on_human_rights[
          key1
        ][key2]["other_permanent"][key3] || 0;
      let totalKey = key2 == "workers" ? "total_workers" : "total_employees";
      this.employees_and_workers_who_have_been_provided_training_on_human_rights[
        key1
      ][key2][totalKey][key3] = parseFloat((val1 + val2).toFixed(2));
    }
  }
}
