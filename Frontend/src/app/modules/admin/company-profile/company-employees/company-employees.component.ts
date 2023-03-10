import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input,
  ChangeDetectorRef,
} from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "company-employees",
  styleUrls: ["company-employees.component.scss"],
  templateUrl: "./company-employees.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyEmployeesComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() data: any = {};
  @Input() isMonthly: boolean = false;

  employees_and_worker: any = {};
  diffrently_added_employees_and_worker: any = {};
  participation_or_representation_of_women: any = {};
  turnover_rate_for_permanent_employees_and_workers: any = {};
  /**
   * Constructor
   */
  constructor(
    public _utilities: CommonFunctionsService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.initialize();
  }
  ngOnDestroy(): void {
    this._emitter.emit({
      submit: 0,
      data: this.getObject(),
    });
  }
  initialize() {
    this.employees_and_worker = this.data?.employees_and_worker || {
      employees: {
        permanent_d: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
        other_than_permanent_e: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
      },
      workers: {
        permanent_f: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
        other_than_permanent_g: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
      },
    };
    this.diffrently_added_employees_and_worker = this.data
      ?.diffrently_added_employees_and_worker || {
      added_employees: {
        permanent_d: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
        other_than_permanent_e: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
      },
      added_workers: {
        permanent_f: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
        other_than_permanent_g: {
          total: "",
          male: {
            no_a: "",
            no_b_a: "",
          },
          female: {
            no_c: "",
            no_c_a: "",
          },
        },
      },
    };
    this.participation_or_representation_of_women = this.data
      ?.participation_or_representation_of_women || {
      bod: {
        total: "",
        no_a: "",
        no_a_b: "",
      },
      kmp: {
        total: "",
        no_a: "",
        no_a_b: "",
      },
    };
    this.turnover_rate_for_permanent_employees_and_workers = this.data
      ?.turnover_rate_for_permanent_employees_and_workers || {
      permanent_employees: {
        first_year: {
          fy_year: this._utilities.selectedFinancialYear,
          female: "",
          male: "",
          total: "",
        },
        second_year: {
          fy_year: this._utilities.previousFinancialYear,
          female: "",
          male: "",
          total: "",
        },
        third_year: {
          fy_year: this._utilities.previousToPreviousFinancialYear,
          female: "",
          male: "",
          total: "",
        },
      },
      permanent_workers: {
        first_year: {
          fy_year: this._utilities.selectedFinancialYear,
          female: "",
          male: "",
          total: "",
        },
        second_year: {
          fy_year: this._utilities.previousFinancialYear,
          female: "",
          male: "",
          total: "",
        },
        third_year: {
          fy_year: this._utilities.previousToPreviousFinancialYear,
          female: "",
          male: "",
          total: "",
        },
      },
    };
    this._changeDetectorRef.detectChanges();
  }

  getSum(val1, val2) {
    val1 = val1 ? parseFloat(val1) : 0;
    val2 = val2 ? parseFloat(val2) : 0;
    return (val1 + val2).toFixed(2);
  }

  calculateData(event, key1, key2) {
    let val1 = this.employees_and_worker[key1][key2]?.male?.no_a || 0;
    let val2 = this.employees_and_worker[key1][key2]?.female?.no_c || 0;
    let tot = this.employees_and_worker[key1][key2]?.total || 0;
    this.employees_and_worker[key1][key2]["male"][
      "no_b_a"
    ] = this._utilities.getPercent(tot, val1);
    this.employees_and_worker[key1][key2]["female"][
      "no_c_a"
    ] = this._utilities.getPercent(tot, val2);
  }

  calculateDataAbled(event, key1, key2) {
    let val1 =
      this.diffrently_added_employees_and_worker[key1][key2]?.male?.no_a || 0;
    let val2 =
      this.diffrently_added_employees_and_worker[key1][key2]?.female?.no_c || 0;
    let tot =
      this.diffrently_added_employees_and_worker[key1][key2]?.total || 0;
    this.diffrently_added_employees_and_worker[key1][key2]["male"][
      "no_b_a"
    ] = this._utilities.getPercent(tot, val1);
    this.diffrently_added_employees_and_worker[key1][key2]["female"][
      "no_c_a"
    ] = this._utilities.getPercent(tot, val2);
  }

  calculateDataRep(event, key1) {
    let val1 = this.participation_or_representation_of_women[key1]?.no_a || 0;
    let tot = this.participation_or_representation_of_women[key1]?.total || 0;
    this.participation_or_representation_of_women[key1][
      "no_a_b"
    ] = this._utilities.getPercent(tot, val1);
  }

  calculateDataTurn(event, key1, key2) {
    let val1 =
      this.turnover_rate_for_permanent_employees_and_workers[key1][key2]
        ?.male || 0;
    let val2 =
      this.turnover_rate_for_permanent_employees_and_workers[key1][key2]
        ?.female || 0;
    this.turnover_rate_for_permanent_employees_and_workers[key1][key2].total = (
      val1 + val2
    ).toFixed(2);
  }

  getObject() {
    return {
      employees_and_worker: this.employees_and_worker,
      diffrently_added_employees_and_worker: this
        .diffrently_added_employees_and_worker,
      participation_or_representation_of_women: this
        .participation_or_representation_of_women,
      turnover_rate_for_permanent_employees_and_workers: this
        .turnover_rate_for_permanent_employees_and_workers,
    };
  }
  updateProfile() {
    console.log(
      "this",
      this.employees_and_worker.employees.permanent_d.male.no_b_a
    );
    console.log(
      "thisfff",
      this.employees_and_worker.employees.other_than_permanent_e.male.no_b_a
    );
    this._emitter.emit({
      submit: 1,
      data: this.getObject(),
    });
  }
}
