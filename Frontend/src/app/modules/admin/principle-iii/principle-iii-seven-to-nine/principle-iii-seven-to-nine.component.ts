import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-iii-seven-to-nine",
  templateUrl: "./principle-iii-seven-to-nine.component.html",
  styleUrls: ["./principle-iii-seven-to-nine.component.scss"],
})
export class PrincipleIiiSevenToNineComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  membership_of_employees_and_worker_in_association: any = {
    current_financial_year: {
      year: this._utilities.selectedFinancialYear,
      total_permanent_employees: {
        total_employee_category_a: "",
        no_employee_or_workers_b: "",
        percentage_b_divided_by_a: "",
        male: {
          total_employee_category_a: "",
          no_employee_or_workers_b: "",
          percentage_b_divided_by_a: "",
        },
        female: {
          total_employee_category_a: "",
          no_employee_or_workers_b: "",
          percentage_b_divided_by_a: "",
        },
      },
      total_permanent_workers: {
        total_employee_category_a: "",
        no_employee_or_workers_b: "",
        percentage_b_divided_by_a: "",
        male: {
          total_employee_category_a: "",
          no_employee_or_workers_b: "",
          percentage_b_divided_by_a: "",
        },
        female: {
          total_employee_category_a: "",
          no_employee_or_workers_b: "",
          percentage_b_divided_by_a: "",
        },
      },
    },
    previous_financial_year: {
      year: this._utilities.previousFinancialYear,
      total_permanent_employees: {
        total_employee_category_c: "",
        no_employee_or_workers_d: "",
        percentage_d_divided_by_c: "",
        male: {
          total_employee_category_c: "",
          no_employee_or_workers_d: "",
          percentage_d_divided_by_c: "",
        },
        female: {
          total_employee_category_c: "",
          no_employee_or_workers_d: "",
          percentage_d_divided_by_c: "",
        },
      },
      total_permanent_workers: {
        total_employee_category_c: "",
        no_employee_or_workers_d: "",
        percentage_d_divided_by_c: "",
        male: {
          total_employee_category_c: "",
          no_employee_or_workers_d: "",
          percentage_d_divided_by_c: "",
        },
        female: {
          total_employee_category_c: "",
          no_employee_or_workers_d: "",
          percentage_d_divided_by_c: "",
        },
      },
    },
  };
  details_of_training_given_to_employees_and_workers: any = {
    current_financial_year: {
      year: this._utilities.selectedFinancialYear,
      employees: {
        total: {
          total_a: "",
          on_health_and_safety_measures: {
            no_b: "",
            percentage_b_divided_by_a: "",
          },
          on_skill_upgrade: {
            no_c: "",
            percentage_c_divided_by_a: "",
          },
        },
        male: {
          total_a: "",
          on_health_and_safety_measures: {
            no_b: "",
            percentage_b_divided_by_a: "",
          },
          on_skill_upgrade: {
            no_c: "",
            percentage_c_divided_by_a: "",
          },
        },
        female: {
          total_a: "",
          on_health_and_safety_measures: {
            no_b: "",
            percentage_b_divided_by_a: "",
          },
          on_skill_upgrade: {
            no_c: "",
            percentage_c_divided_by_a: "",
          },
        },
      },
      workers: {
        total: {
          total_a: "",
          on_health_and_safety_measures: {
            no_b: "",
            percentage_b_divided_by_a: "",
          },
          on_skill_upgrade: {
            no_c: "",
            percentage_c_divided_by_a: "",
          },
        },
        male: {
          total_a: "",
          on_health_and_safety_measures: {
            no_b: "",
            percentage_b_divided_by_a: "",
          },
          on_skill_upgrade: {
            no_c: "",
            percentage_c_divided_by_a: "",
          },
        },
        female: {
          total_a: "",
          on_health_and_safety_measures: {
            no_b: "",
            percentage_b_divided_by_a: "",
          },
          on_skill_upgrade: {
            no_c: "",
            percentage_c_divided_by_a: "",
          },
        },
      },
    },
    previous_financial_year: {
      year: this._utilities.previousFinancialYear,
      employees: {
        total: {
          total_d: "",
          on_health_and_safety_measures: {
            no_e: "",
            percentage_e_divided_by_d: "",
          },
          on_skill_upgrade: {
            no_f: "",
            percentage_f_divided_by_d: "",
          },
        },
        male: {
          total_d: "",
          on_health_and_safety_measures: {
            no_e: "",
            percentage_e_divided_by_d: "",
          },
          on_skill_upgrade: {
            no_f: "",
            percentage_f_divided_by_d: "",
          },
        },
        female: {
          total_d: "",
          on_health_and_safety_measures: {
            no_e: "",
            percentage_e_divided_by_d: "",
          },
          on_skill_upgrade: {
            no_f: "",
            percentage_f_divided_by_d: "",
          },
        },
      },
      workers: {
        total: {
          total_d: "",
          on_health_and_safety_measures: {
            no_e: "",
            percentage_e_divided_by_d: "",
          },
          on_skill_upgrade: {
            no_f: "",
            percentage_f_divided_by_d: "",
          },
        },
        male: {
          total_d: "",
          on_health_and_safety_measures: {
            no_e: "",
            percentage_e_divided_by_d: "",
          },
          on_skill_upgrade: {
            no_f: "",
            percentage_f_divided_by_d: "",
          },
        },
        female: {
          total_d: "",
          on_health_and_safety_measures: {
            no_e: "",
            percentage_e_divided_by_d: "",
          },
          on_skill_upgrade: {
            no_f: "",
            percentage_f_divided_by_d: "",
          },
        },
      },
    },
  };
  details_of_performance_and_career_development_reviews_of_employees_and_worker: any = {
    current_financial_year: {
      year: this._utilities.selectedFinancialYear,
      employees: {
        total_a: "",
        no_b: "",
        percentage_b_divided_by_a: "",
        male: {
          total_a: "",
          no_b: "",
          percentage_b_divided_by_a: "",
        },
        female: {
          total_a: "",
          no_b: "",
          percentage_b_divided_by_a: "",
        },
      },
      workers: {
        total_c: "",
        no_d: "",
        percentage_d_divided_by_c: "",
        male: {
          total_c: "",
          no_d: "",
          percentage_d_divided_by_c: "",
        },
        female: {
          total_c: "",
          no_d: "",
          percentage_d_divided_by_c: "",
        },
      },
    },
    previous_financial_year: {
      year: this._utilities.previousFinancialYear,
      employees: {
        total_a: "",
        no_b: "",
        percentage_b_divided_by_a: "",
        male: {
          total_a: "",
          no_b: "",
          percentage_b_divided_by_a: "",
        },
        female: {
          total_a: "",
          no_b: "",
          percentage_b_divided_by_a: "",
        },
      },
      workers: {
        total_c: "",
        no_d: "",
        percentage_d_divided_by_c: "",
        male: {
          total_c: "",
          no_d: "",
          percentage_d_divided_by_c: "",
        },
        female: {
          total_c: "",
          no_d: "",
          percentage_d_divided_by_c: "",
        },
      },
    },
  };
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  ngOnChanges(): void {
    if (this.response?.essential_indicators) {
      this.membership_of_employees_and_worker_in_association = this._utilities.nullToString(
        this.response?.essential_indicators
          ?.membership_of_employees_and_worker_in_association
      );
      this.details_of_training_given_to_employees_and_workers = this._utilities.nullToString(
        this.response?.essential_indicators
          ?.details_of_training_given_to_employees_and_workers
      );
      this.details_of_performance_and_career_development_reviews_of_employees_and_worker = this._utilities.nullToString(
        this.response?.essential_indicators
          ?.details_of_performance_and_career_development_reviews_of_employees_and_worker
      );
    } else {
      this.membership_of_employees_and_worker_in_association = {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          total_permanent_employees: {
            total_employee_category_a: "",
            no_employee_or_workers_b: "",
            percentage_b_divided_by_a: "",
            male: {
              total_employee_category_a: "",
              no_employee_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
            female: {
              total_employee_category_a: "",
              no_employee_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
          },
          total_permanent_workers: {
            total_employee_category_a: "",
            no_employee_or_workers_b: "",
            percentage_b_divided_by_a: "",
            male: {
              total_employee_category_a: "",
              no_employee_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
            female: {
              total_employee_category_a: "",
              no_employee_or_workers_b: "",
              percentage_b_divided_by_a: "",
            },
          },
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          total_permanent_employees: {
            total_employee_category_c: "",
            no_employee_or_workers_d: "",
            percentage_d_divided_by_c: "",
            male: {
              total_employee_category_c: "",
              no_employee_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
            female: {
              total_employee_category_c: "",
              no_employee_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
          },
          total_permanent_workers: {
            total_employee_category_c: "",
            no_employee_or_workers_d: "",
            percentage_d_divided_by_c: "",
            male: {
              total_employee_category_c: "",
              no_employee_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
            female: {
              total_employee_category_c: "",
              no_employee_or_workers_d: "",
              percentage_d_divided_by_c: "",
            },
          },
        },
      };

      this.details_of_training_given_to_employees_and_workers = {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          employees: {
            total: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
            male: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
            female: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
          },
          workers: {
            total: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
            male: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
            female: {
              total_a: "",
              on_health_and_safety_measures: {
                no_b: "",
                percentage_b_divided_by_a: "",
              },
              on_skill_upgrade: {
                no_c: "",
                percentage_c_divided_by_a: "",
              },
            },
          },
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          employees: {
            total: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
            male: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
            female: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
          },
          workers: {
            total: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
            male: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
            female: {
              total_d: "",
              on_health_and_safety_measures: {
                no_e: "",
                percentage_e_divided_by_d: "",
              },
              on_skill_upgrade: {
                no_f: "",
                percentage_f_divided_by_d: "",
              },
            },
          },
        },
      };

      this.details_of_performance_and_career_development_reviews_of_employees_and_worker = {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          employees: {
            total_a: "",
            no_b: "",
            percentage_b_divided_by_a: "",
            male: {
              total_a: "",
              no_b: "",
              percentage_b_divided_by_a: "",
            },
            female: {
              total_a: "",
              no_b: "",
              percentage_b_divided_by_a: "",
            },
          },
          workers: {
            total_c: "",
            no_d: "",
            percentage_d_divided_by_c: "",
            male: {
              total_c: "",
              no_d: "",
              percentage_d_divided_by_c: "",
            },
            female: {
              total_c: "",
              no_d: "",
              percentage_d_divided_by_c: "",
            },
          },
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          employees: {
            total_a: "",
            no_b: "",
            percentage_b_divided_by_a: "",
            male: {
              total_a: "",
              no_b: "",
              percentage_b_divided_by_a: "",
            },
            female: {
              total_a: "",
              no_b: "",
              percentage_b_divided_by_a: "",
            },
          },
          workers: {
            total_c: "",
            no_d: "",
            percentage_d_divided_by_c: "",
            male: {
              total_c: "",
              no_d: "",
              percentage_d_divided_by_c: "",
            },
            female: {
              total_c: "",
              no_d: "",
              percentage_d_divided_by_c: "",
            },
          },
        },
      };
    }
  }
  initialize() {
    this._emitter.emit({
      from: "seven_to_nine",
      data: {
        membership_of_employees_and_worker_in_association: this
          .membership_of_employees_and_worker_in_association,
        details_of_training_given_to_employees_and_workers: this
          .details_of_training_given_to_employees_and_workers,
        details_of_performance_and_career_development_reviews_of_employees_and_worker: this
          .details_of_performance_and_career_development_reviews_of_employees_and_worker,
      },
    });
  }
  setMonthlyData(res, isCurrent) {
    if (isCurrent) {
      this.details_of_training_given_to_employees_and_workers.current_financial_year =
        res.details_of_training_given_to_employees_and_workers.current_financial_year;
    } else {
      this.details_of_training_given_to_employees_and_workers.previous_financial_year =
        res.details_of_training_given_to_employees_and_workers.current_financial_year;
    }
  }
  sumUp(mode, key1, key2, key3, key4?) {
    let val1 = "0",
      val2 = "0",
      val3 = "0",
      val4 = "0";
    if (mode == "3") {
      val1 =
        this.membership_of_employees_and_worker_in_association[key1][key2][
          "male"
        ][key4] || "0";
      val2 =
        this.membership_of_employees_and_worker_in_association[key1][key2][
          "female"
        ][key4] || "0";
      this.membership_of_employees_and_worker_in_association[key1][key2][key4] =
        parseFloat(val1) + parseFloat(val2);

      //for percentage
      if (
        key4 == "total_employee_category_a" ||
        key4 == "no_employee_or_workers_b"
      ) {
        let tot1 =
          this.membership_of_employees_and_worker_in_association[key1][key2][
            key3
          ]?.total_employee_category_a || 0;

        val1 =
          this.membership_of_employees_and_worker_in_association[key1][key2][
            key3
          ]?.no_employee_or_workers_b || 0;
        this.membership_of_employees_and_worker_in_association[key1][key2][
          key3
        ]["percentage_b_divided_by_a"] = this._utilities.getPercent(tot1, val1);
        this.addPercentage(mode, key1, key2, "percentage_b_divided_by_a");
      } else if (
        key4 == "total_employee_category_c" ||
        key4 == "no_employee_or_workers_d"
      ) {
        let tot2 =
          this.membership_of_employees_and_worker_in_association[key1][key2][
            key3
          ]?.total_employee_category_c || 0;

        val2 =
          this.membership_of_employees_and_worker_in_association[key1][key2][
            key3
          ]?.no_employee_or_workers_d || 0;
        this.membership_of_employees_and_worker_in_association[key1][key2][
          key3
        ]["percentage_d_divided_by_c"] = this._utilities.getPercent(tot2, val2);
        this.addPercentage(mode, key1, key2, "percentage_d_divided_by_c");
      }
    } else if (mode == "4" || mode == "5") {
      let modeKey = mode == "4" ? "employees" : "workers";
      if (key4) {
        val1 =
          this.details_of_training_given_to_employees_and_workers[key1][
            modeKey
          ]["male"][key2][key4] || "0";
        val2 =
          this.details_of_training_given_to_employees_and_workers[key1][
            modeKey
          ]["female"][key2][key4] || "0";
        this.details_of_training_given_to_employees_and_workers[key1][modeKey][
          "total"
        ][key2][key4] = parseFloat(val1) + parseFloat(val2);
      } else {
        val1 =
          this.details_of_training_given_to_employees_and_workers[key1][
            modeKey
          ]["male"][key2] || "0";
        val2 =
          this.details_of_training_given_to_employees_and_workers[key1][
            modeKey
          ]["female"][key2] || "0";
        this.details_of_training_given_to_employees_and_workers[key1][modeKey][
          "total"
        ][key2] = parseFloat(val1) + parseFloat(val2);
      }

      //for percentage
      let tot1 =
        this.details_of_training_given_to_employees_and_workers[key1][modeKey][
          key3
        ]?.total_a || 0;

      val1 =
        this.details_of_training_given_to_employees_and_workers[key1][modeKey][
          key3
        ]?.on_health_and_safety_measures?.no_b || 0;
      this.details_of_training_given_to_employees_and_workers[key1][modeKey][
        key3
      ]["on_health_and_safety_measures"][
        "percentage_b_divided_by_a"
      ] = this._utilities.getPercent(tot1, val1);
      this.addPercentage(
        mode,
        key1,
        modeKey,
        "on_health_and_safety_measures",
        "percentage_b_divided_by_a"
      );

      val2 =
        this.details_of_training_given_to_employees_and_workers[key1][modeKey][
          key3
        ]?.on_skill_upgrade?.no_c || 0;
      this.details_of_training_given_to_employees_and_workers[key1][modeKey][
        key3
      ]["on_skill_upgrade"][
        "percentage_c_divided_by_a"
      ] = this._utilities.getPercent(tot1, val2);
      this.addPercentage(
        mode,
        key1,
        modeKey,
        "on_skill_upgrade",
        "percentage_c_divided_by_a"
      );

      let tot2 =
        this.details_of_training_given_to_employees_and_workers[key1][modeKey][
          key3
        ]?.total_d || 0;

      val3 =
        this.details_of_training_given_to_employees_and_workers[key1][modeKey][
          key3
        ]?.on_health_and_safety_measures?.no_e || 0;
      this.details_of_training_given_to_employees_and_workers[key1][modeKey][
        key3
      ]["on_health_and_safety_measures"][
        "percentage_e_divided_by_d"
      ] = this._utilities.getPercent(tot2, val3);
      this.addPercentage(
        mode,
        key1,
        modeKey,
        "on_health_and_safety_measures",
        "percentage_e_divided_by_d"
      );

      val4 =
        this.details_of_training_given_to_employees_and_workers[key1][modeKey][
          key3
        ]?.on_skill_upgrade?.no_f || 0;
      this.details_of_training_given_to_employees_and_workers[key1][modeKey][
        key3
      ]["on_skill_upgrade"][
        "percentage_f_divided_by_d"
      ] = this._utilities.getPercent(tot2, val4);
      this.addPercentage(
        mode,
        key1,
        modeKey,
        "on_skill_upgrade",
        "percentage_f_divided_by_d"
      );
    } else if (mode == "6" || mode == "7") {
      let modeKey = mode == "6" ? "employees" : "workers";
      val1 =
        this
          .details_of_performance_and_career_development_reviews_of_employees_and_worker[
          key1
        ][modeKey]["male"][key2] || "0";
      val2 =
        this
          .details_of_performance_and_career_development_reviews_of_employees_and_worker[
          key1
        ][modeKey]["female"][key2] || "0";
      this.details_of_performance_and_career_development_reviews_of_employees_and_worker[
        key1
      ][modeKey][key2] = parseFloat(val1) + parseFloat(val2);

      //for percentage
      let totalKey = "total_a",
        numKey = "no_b",
        divideKey = "percentage_b_divided_by_a";
      if (modeKey == "workers") {
        totalKey = "total_c";
        numKey = "no_d";
        divideKey = "percentage_d_divided_by_c";
      }
      let tot1 =
        this
          .details_of_performance_and_career_development_reviews_of_employees_and_worker[
          key1
        ][modeKey][key3][totalKey] || 0;

      val1 =
        this
          .details_of_performance_and_career_development_reviews_of_employees_and_worker[
          key1
        ][modeKey][key3][numKey] || 0;
      this.details_of_performance_and_career_development_reviews_of_employees_and_worker[
        key1
      ][modeKey][key3][divideKey] = this._utilities.getPercent(tot1, val1);
      this.addPercentage(mode, key1, modeKey, divideKey);
    }
  }

  addPercentage(mode, key1, key2, key3, key4?) {
    let val1 = 0,
      val2 = 0;
    if (mode == "3") {
      val1 =
        this.membership_of_employees_and_worker_in_association[key1][key2][
          "male"
        ][key3] || 0;
      val2 =
        this.membership_of_employees_and_worker_in_association[key1][key2][
          "female"
        ][key3] || 0;

      this.membership_of_employees_and_worker_in_association[key1][key2][
        key3
      ] = parseFloat((val1 + val2).toFixed(2));
    } else if (mode == "4" || mode == "5") {
      val1 =
        this.details_of_training_given_to_employees_and_workers[key1][key2][
          "male"
        ][key3][key4] || 0;
      val2 =
        this.details_of_training_given_to_employees_and_workers[key1][key2][
          "female"
        ][key3][key4] || 0;

      this.details_of_training_given_to_employees_and_workers[key1][key2][
        "total"
      ][key3][key4] = parseFloat((val1 + val2).toFixed(2));
    } else if (mode == "6" || mode == "7") {
      val1 =
        this
          .details_of_performance_and_career_development_reviews_of_employees_and_worker[
          key1
        ][key2]["male"][key3] || 0;
      val2 =
        this
          .details_of_performance_and_career_development_reviews_of_employees_and_worker[
          key1
        ][key2]["female"][key3] || 0;

      this.details_of_performance_and_career_development_reviews_of_employees_and_worker[
        key1
      ][key2][key3] = parseFloat((val1 + val2).toFixed(2));
    }
  }
}
