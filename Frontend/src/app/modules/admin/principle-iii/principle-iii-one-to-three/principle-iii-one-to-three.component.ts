import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-iii-one-to-three",
  templateUrl: "./principle-iii-one-to-three.component.html",
  styleUrls: ["./principle-iii-one-to-three.component.scss"],
})
export class PrincipleIiiOneToThreeComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  is_accessibility_of_workplaces: string = "";
  accessibility_of_workplaces: string = "";
  percentage_of_employees_covered: any = {
    permanent_employees: {
      male: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
      female: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
      total: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
    },
    other_than_permanent_employees: {
      male: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
      female: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
      total: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
    },
  };
  percentage_of_workers_covered: any = {
    permanent_workers: {
      male: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
      female: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
      total: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
    },
    other_than_permanent_workers: {
      male: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
      female: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
      total: {
        total_a: "",
        health_insurance: {
          number_b: "",
          percent_of_b_divided_by_a: "",
        },
        accident_insurance: {
          number_c: "",
          percent_of_c_divided_by_a: "",
        },
        maternity_benifits: {
          number_d: "",
          percent_of_d_divided_by_a: "",
        },
        paternity_benifits: {
          number_e: "",
          percent_of_e_divided_by_a: "",
        },
        day_care_facilities: {
          number_f: "",
          percent_of_f_divided_by_a: "",
        },
      },
    },
  };
  details_of_retirement_benefits: any = {
    current_financial_year: {
      year: this._utilities.selectedFinancialYear,
      pf: {
        no_of_employees_covered_as_a_percentage_of_total_employees: "",
        no_of_workers_covered_as_a_percentage_of_total_workers: "",
        deducted_and_deposited_with_the_authority: "",
      },
      gratutity: {
        no_of_employees_covered_as_a_percentage_of_total_employees: "",
        no_of_workers_covered_as_a_percentage_of_total_workers: "",
        deducted_and_deposited_with_the_authority: "",
      },
      esi: {
        no_of_employees_covered_as_a_percentage_of_total_employees: "",
        no_of_workers_covered_as_a_percentage_of_total_workers: "",
        deducted_and_deposited_with_the_authority: "",
      },
      others: {
        no_of_employees_covered_as_a_percentage_of_total_employees: "",
        no_of_workers_covered_as_a_percentage_of_total_workers: "",
        deducted_and_deposited_with_the_authority: "",
      },
    },
    previous_financial_year: {
      fy: this._utilities.previousFinancialYear,
      pf: {
        no_of_employees_covered_as_a_percentage_of_total_employees: "",
        no_of_workers_covered_as_a_percentage_of_total_workers: "",
        deducted_and_deposited_with_the_authority: "",
      },
      gratutity: {
        no_of_employees_covered_as_a_percentage_of_total_employees: "",
        no_of_workers_covered_as_a_percentage_of_total_workers: "",
        deducted_and_deposited_with_the_authority: "",
      },
      esi: {
        no_of_employees_covered_as_a_percentage_of_total_employees: "",
        no_of_workers_covered_as_a_percentage_of_total_workers: "",
        deducted_and_deposited_with_the_authority: "",
      },
      others: {
        no_of_employees_covered_as_a_percentage_of_total_employees: "",
        no_of_workers_covered_as_a_percentage_of_total_workers: "",
        deducted_and_deposited_with_the_authority: "",
      },
    },
  };

  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    //this._utilities.callRedirectLoader();
    this.initialize();
  }

  ngOnChanges(): void {
    if (this.response?.essential_indicators) {
      this.accessibility_of_workplaces =
        this.response?.essential_indicators?.accessibility_of_workplaces || "";
      this.is_accessibility_of_workplaces =
        this.accessibility_of_workplaces == "No"
          ? "No"
          : this.accessibility_of_workplaces.length
          ? "Yes"
          : "";
      this.percentage_of_employees_covered = this._utilities.nullToString(
        this.response?.essential_indicators
          ?.a_details_of_measures_for_the_well_being_of_employees
          ?.percentage_of_employees_covered
      );
      this.percentage_of_workers_covered = this._utilities.nullToString(
        this.response?.essential_indicators
          ?.b_details_of_measures_for_the_well_being_of_workers
          ?.percentage_of_employees_covered
      );
      this.details_of_retirement_benefits = this._utilities.nullToString(
        this.response?.essential_indicators?.details_of_retirement_benefits
      );
    } else {
      this.is_accessibility_of_workplaces = "";
      this.accessibility_of_workplaces = "";
      this.percentage_of_employees_covered = {
        permanent_employees: {
          male: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          female: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          total: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
        },
        other_than_permanent_employees: {
          male: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          female: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          total: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
        },
      };
      this.percentage_of_workers_covered = {
        permanent_workers: {
          male: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          female: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          total: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
        },
        other_than_permanent_workers: {
          male: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          female: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
          total: {
            total_a: "",
            health_insurance: {
              number_b: "",
              percent_of_b_divided_by_a: "",
            },
            accident_insurance: {
              number_c: "",
              percent_of_c_divided_by_a: "",
            },
            maternity_benifits: {
              number_d: "",
              percent_of_d_divided_by_a: "",
            },
            paternity_benifits: {
              number_e: "",
              percent_of_e_divided_by_a: "",
            },
            day_care_facilities: {
              number_f: "",
              percent_of_f_divided_by_a: "",
            },
          },
        },
      };
      this.details_of_retirement_benefits = {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          pf: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          gratutity: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          esi: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          others: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
        },
        previous_financial_year: {
          fy: this._utilities.previousFinancialYear,
          pf: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          gratutity: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          esi: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
          others: {
            no_of_employees_covered_as_a_percentage_of_total_employees: "",
            no_of_workers_covered_as_a_percentage_of_total_workers: "",
            deducted_and_deposited_with_the_authority: "",
          },
        },
      };
    }
  }

  initialize() {
    this._emitter.emit({
      from: "one_to_three",
      data: {
        a_details_of_measures_for_the_well_being_of_employees: {
          percentage_of_employees_covered: this.percentage_of_employees_covered,
        },
        b_details_of_measures_for_the_well_being_of_workers: {
          percentage_of_employees_covered: this.percentage_of_workers_covered,
        },
        details_of_retirement_benefits: this.details_of_retirement_benefits,
        accessibility_of_workplaces: this.accessibility_of_workplaces,
      },
    });
  }
  sumUp(mode, key1, key2, key3, key4?) {
    let val1 = "0",
      val2 = "0",
      val3 = "0",
      val4 = "0",
      val5 = "0";
    if (mode == "1") {
      //for sum
      if (key4) {
        val1 =
          this.percentage_of_employees_covered[key1]["male"][key2][key4] || "0";
        val2 =
          this.percentage_of_employees_covered[key1]["female"][key2][key4] ||
          "0";
        this.percentage_of_employees_covered[key1]["total"][key2][key4] =
          parseFloat(val1) + parseFloat(val2);
      } else {
        val1 = this.percentage_of_employees_covered[key1]["male"][key2] || "0";
        val2 =
          this.percentage_of_employees_covered[key1]["female"][key2] || "0";
        this.percentage_of_employees_covered[key1]["total"][key2] =
          parseFloat(val1) + parseFloat(val2);
      }
      //for percentage
      let tot = this.percentage_of_employees_covered[key1][key3]?.total_a || 0;

      val1 =
        this.percentage_of_employees_covered[key1][key3]?.health_insurance
          ?.number_b || 0;
      this.percentage_of_employees_covered[key1][key3]["health_insurance"][
        "percent_of_b_divided_by_a"
      ] = this._utilities.getPercent(tot, val1);
      this.addPercentage(
        mode,
        key1,
        "health_insurance",
        "percent_of_b_divided_by_a"
      );

      val2 =
        this.percentage_of_employees_covered[key1][key3]?.accident_insurance
          ?.number_c || 0;
      this.percentage_of_employees_covered[key1][key3]["accident_insurance"][
        "percent_of_c_divided_by_a"
      ] = this._utilities.getPercent(tot, val2);
      this.addPercentage(
        mode,
        key1,
        "accident_insurance",
        "percent_of_c_divided_by_a"
      );

      val3 =
        this.percentage_of_employees_covered[key1][key3]?.maternity_benifits
          ?.number_d || 0;
      this.percentage_of_employees_covered[key1][key3]["maternity_benifits"][
        "percent_of_d_divided_by_a"
      ] = this._utilities.getPercent(tot, val3);
      this.addPercentage(
        mode,
        key1,
        "maternity_benifits",
        "percent_of_d_divided_by_a"
      );

      val4 =
        this.percentage_of_employees_covered[key1][key3]?.paternity_benifits
          ?.number_e || 0;
      this.percentage_of_employees_covered[key1][key3]["paternity_benifits"][
        "percent_of_e_divided_by_a"
      ] = this._utilities.getPercent(tot, val4);
      this.addPercentage(
        mode,
        key1,
        "paternity_benifits",
        "percent_of_e_divided_by_a"
      );

      val5 =
        this.percentage_of_employees_covered[key1][key3]?.day_care_facilities
          ?.number_f || 0;
      this.percentage_of_employees_covered[key1][key3]["day_care_facilities"][
        "percent_of_f_divided_by_a"
      ] = this._utilities.getPercent(tot, val5);
      this.addPercentage(
        mode,
        key1,
        "day_care_facilities",
        "percent_of_f_divided_by_a"
      );
    }
    if (mode == "2") {
      if (key4) {
        val1 =
          this.percentage_of_workers_covered[key1]["male"][key2][key4] || "0";
        val2 =
          this.percentage_of_workers_covered[key1]["female"][key2][key4] || "0";
        this.percentage_of_workers_covered[key1]["total"][key2][key4] =
          parseFloat(val1) + parseFloat(val2);
      } else {
        val1 = this.percentage_of_workers_covered[key1]["male"][key2] || "0";
        val2 = this.percentage_of_workers_covered[key1]["female"][key2] || "0";
        this.percentage_of_workers_covered[key1]["total"][key2] =
          parseFloat(val1) + parseFloat(val2);
      }
      //for percentage
      let tot = this.percentage_of_workers_covered[key1][key3]?.total_a || 0;

      val1 =
        this.percentage_of_workers_covered[key1][key3]?.health_insurance
          ?.number_b || 0;
      this.percentage_of_workers_covered[key1][key3]["health_insurance"][
        "percent_of_b_divided_by_a"
      ] = this._utilities.getPercent(tot, val1);
      this.addPercentage(
        mode,
        key1,
        "health_insurance",
        "percent_of_b_divided_by_a"
      );

      val2 =
        this.percentage_of_workers_covered[key1][key3]?.accident_insurance
          ?.number_c || 0;
      this.percentage_of_workers_covered[key1][key3]["accident_insurance"][
        "percent_of_c_divided_by_a"
      ] = this._utilities.getPercent(tot, val2);
      this.addPercentage(
        mode,
        key1,
        "accident_insurance",
        "percent_of_c_divided_by_a"
      );

      val3 =
        this.percentage_of_workers_covered[key1][key3]?.maternity_benifits
          ?.number_d || 0;
      this.percentage_of_workers_covered[key1][key3]["maternity_benifits"][
        "percent_of_d_divided_by_a"
      ] = this._utilities.getPercent(tot, val3);
      this.addPercentage(
        mode,
        key1,
        "maternity_benifits",
        "percent_of_d_divided_by_a"
      );

      val4 =
        this.percentage_of_workers_covered[key1][key3]?.paternity_benifits
          ?.number_e || 0;
      this.percentage_of_workers_covered[key1][key3]["paternity_benifits"][
        "percent_of_e_divided_by_a"
      ] = this._utilities.getPercent(tot, val4);
      this.addPercentage(
        mode,
        key1,
        "paternity_benifits",
        "percent_of_e_divided_by_a"
      );

      val5 =
        this.percentage_of_workers_covered[key1][key3]?.day_care_facilities
          ?.number_f || 0;
      this.percentage_of_workers_covered[key1][key3]["day_care_facilities"][
        "percent_of_f_divided_by_a"
      ] = this._utilities.getPercent(tot, val5);
      this.addPercentage(
        mode,
        key1,
        "day_care_facilities",
        "percent_of_f_divided_by_a"
      );
    }
  }

  addPercentage(mode, key1, key2, key3) {
    let val1 = 0,
      val2 = 0;
    if (mode == "1") {
      val1 =
        this.percentage_of_employees_covered[key1]["male"][key2][key3] || 0;
      val2 =
        this.percentage_of_employees_covered[key1]["female"][key2][key3] || 0;

      this.percentage_of_employees_covered[key1]["total"][key2][
        key3
      ] = parseFloat((val1 + val2).toFixed(2));
    }
    if (mode == "2") {
      val1 = this.percentage_of_workers_covered[key1]["male"][key2][key3] || 0;
      val2 =
        this.percentage_of_workers_covered[key1]["female"][key2][key3] || 0;

      this.percentage_of_workers_covered[key1]["total"][key2][
        key3
      ] = parseFloat((val1 + val2).toFixed(2));
    }
  }

  setConditionValue(id) {
    if (
      id == "accessibility_of_workplaces" &&
      this.is_accessibility_of_workplaces == "Yes"
    ) {
      this.accessibility_of_workplaces = this.is_accessibility_of_workplaces;
    }
  }
}
