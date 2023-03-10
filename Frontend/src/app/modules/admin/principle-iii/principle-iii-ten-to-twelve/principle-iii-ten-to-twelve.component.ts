import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-iii-ten-to-twelve",
  templateUrl: "./principle-iii-ten-to-twelve.component.html",
  styleUrls: ["./principle-iii-ten-to-twelve.component.scss"],
})
export class PrincipleIiiTenToTwelveComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  health_and_safety_management_system: any = {
    a: "",
    b: "",
    c: "",
    d: "",
  };

  safety_incident_number: any = {
    ltifr: {
      employees: {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          numbers: "",
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          numbers: "",
        },
      },
      workers: {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          numbers: "",
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          numbers: "",
        },
      },
    },
    total_recordable_work_related_injuries: {
      employees: {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          numbers: "",
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          numbers: "",
        },
      },
      workers: {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          numbers: "",
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          numbers: "",
        },
      },
    },
    no_of_fatalities: {
      employees: {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          numbers: "",
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          numbers: "",
        },
      },
      workers: {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          numbers: "",
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          numbers: "",
        },
      },
    },
    high_consequence_work_related_injury: {
      employees: {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          numbers: "",
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          numbers: "",
        },
      },
      workers: {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          numbers: "",
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          numbers: "",
        },
      },
    },
  };
  measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place: any =
    "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  ngOnChanges(): void {
    if (this.response?.essential_indicators) {
      this.health_and_safety_management_system = this._utilities.nullToString(
        this.response?.essential_indicators?.health_and_safety_management_system
      );
      this.safety_incident_number = this._utilities.nullToString(
        this.response?.essential_indicators?.details_of_safety_related_incidents
          ?.safety_incident_number
      );
      this.measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place =
        this.response?.essential_indicators
          ?.measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place ||
        "";
    } else {
      this.health_and_safety_management_system = {
        a: "",
        b: "",
        c: "",
        d: "",
      };

      this.safety_incident_number = {
        ltifr: {
          employees: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
          workers: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
        },
        total_recordable_work_related_injuries: {
          employees: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
          workers: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
        },
        no_of_fatalities: {
          employees: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
          workers: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
        },
        high_consequence_work_related_injury: {
          employees: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
          workers: {
            current_financial_year: {
              year: this._utilities.selectedFinancialYear,
              numbers: "",
            },
            previous_financial_year: {
              year: this._utilities.previousFinancialYear,
              numbers: "",
            },
          },
        },
      };
      this.measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place =
        "";
    }
  }
  initialize() {
    console.log(
      this.measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place
    );
    this._emitter.emit({
      from: "ten_to_twelve",
      data: {
        health_and_safety_management_system: this
          .health_and_safety_management_system,
        details_of_safety_related_incidents: {
          safety_incident_number: this.safety_incident_number,
        },
        measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place: this
          .measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place,
      },
    });
  }

  setMonthlyData(res, isCurrent) {
    if (isCurrent) {
      this.safety_incident_number.ltifr.employees.current_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.ltifr.employees.current_financial_year;
      this.safety_incident_number.ltifr.workers.current_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.ltifr.workers.current_financial_year;

      this.safety_incident_number.high_consequence_work_related_injury.employees.current_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.high_consequence_work_related_injury.employees.current_financial_year;
      this.safety_incident_number.high_consequence_work_related_injury.workers.current_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.high_consequence_work_related_injury.workers.current_financial_year;

      this.safety_incident_number.no_of_fatalities.employees.current_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.no_of_fatalities.employees.current_financial_year;
      this.safety_incident_number.no_of_fatalities.workers.current_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.no_of_fatalities.workers.current_financial_year;

      this.safety_incident_number.total_recordable_work_related_injuries.employees.current_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.total_recordable_work_related_injuries.employees.current_financial_year;
      this.safety_incident_number.total_recordable_work_related_injuries.workers.current_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.total_recordable_work_related_injuries.workers.current_financial_year;
    } else {
      this.safety_incident_number.ltifr.employees.previous_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.ltifr.employees.current_financial_year;
      this.safety_incident_number.ltifr.workers.previous_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.ltifr.workers.current_financial_year;

      this.safety_incident_number.high_consequence_work_related_injury.employees.previous_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.high_consequence_work_related_injury.employees.current_financial_year;
      this.safety_incident_number.high_consequence_work_related_injury.workers.previous_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.high_consequence_work_related_injury.workers.current_financial_year;

      this.safety_incident_number.no_of_fatalities.employees.previous_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.no_of_fatalities.employees.current_financial_year;
      this.safety_incident_number.no_of_fatalities.workers.previous_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.no_of_fatalities.workers.current_financial_year;

      this.safety_incident_number.total_recordable_work_related_injuries.employees.previous_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.total_recordable_work_related_injuries.employees.current_financial_year;
      this.safety_incident_number.total_recordable_work_related_injuries.workers.previous_financial_year =
        res.details_of_safety_related_incidents.safety_incident_number.total_recordable_work_related_injuries.workers.current_financial_year;
    }
  }
}
