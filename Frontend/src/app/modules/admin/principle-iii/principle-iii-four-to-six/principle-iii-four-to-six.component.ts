import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-iii-four-to-six",
  templateUrl: "./principle-iii-four-to-six.component.html",
  styleUrls: ["./principle-iii-four-to-six.component.scss"],
})
export class PrincipleIiiFourToSixComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  is_does_entity_have_an_equal_opportunity_policy: string = "";
  does_entity_have_an_equal_opportunity_policy: string = "";
  retention_rates_of_permanent_employees_and_workers: any = {
    permanent_employees: {
      male: {
        return_to_work_rate: "",
        retention_rate: "",
      },
      female: {
        return_to_work_rate: "",
        retention_rate: "",
      },
      total: {
        return_to_work_rate: "",
        retention_rate: "",
      },
    },
    permanent_workers: {
      male: {
        return_to_work_rate: "",
        retention_rate: "",
      },
      female: {
        return_to_work_rate: "",
        retention_rate: "",
      },
      total: {
        return_to_work_rate: "",
        retention_rate: "",
      },
    },
  };
  mechanism_available_to_receive_and_redress_grievances: any = {
    permanent_workers: "",
    other_than_permanent_workers: "",
    permanent_employees: "",
    other_than_permanent_employees: "",
  };
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }
  ngOnChanges(): void {
    if (this.response?.essential_indicators) {
      this.does_entity_have_an_equal_opportunity_policy =
        this.response?.essential_indicators
          ?.does_entity_have_an_equal_opportunity_policy || "";

      this.is_does_entity_have_an_equal_opportunity_policy =
        this.does_entity_have_an_equal_opportunity_policy == "No"
          ? "No"
          : this.does_entity_have_an_equal_opportunity_policy.length
          ? "Yes"
          : "";
      let obj = this._utilities.nullToString(
        this.response?.essential_indicators
          ?.retention_rates_of_permanent_employees_and_workers
      );
      this.retention_rates_of_permanent_employees_and_workers = obj;
      this.mechanism_available_to_receive_and_redress_grievances = this._utilities.nullToString(
        this.response?.essential_indicators
          ?.mechanism_available_to_receive_and_redress_grievances
      );
    } else {
      this.is_does_entity_have_an_equal_opportunity_policy = "";
      this.does_entity_have_an_equal_opportunity_policy = "";
      this.retention_rates_of_permanent_employees_and_workers = {
        permanent_employees: {
          male: {
            return_to_work_rate: "",
            retention_rate: "",
          },
          female: {
            return_to_work_rate: "",
            retention_rate: "",
          },
          total: {
            return_to_work_rate: "",
            retention_rate: "",
          },
        },
        permanent_workers: {
          male: {
            return_to_work_rate: "",
            retention_rate: "",
          },
          female: {
            return_to_work_rate: "",
            retention_rate: "",
          },
          total: {
            return_to_work_rate: "",
            retention_rate: "",
          },
        },
      };
      this.mechanism_available_to_receive_and_redress_grievances = {
        permanent_workers: "",
        other_than_permanent_workers: "",
        permanent_employees: "",
        other_than_permanent_employees: "",
      };
    }
  }
  initialize() {
    this._emitter.emit({
      from: "four_to_six",
      data: {
        does_entity_have_an_equal_opportunity_policy: this
          .does_entity_have_an_equal_opportunity_policy,
        retention_rates_of_permanent_employees_and_workers: this
          .retention_rates_of_permanent_employees_and_workers,
        mechanism_available_to_receive_and_redress_grievances: this
          .mechanism_available_to_receive_and_redress_grievances,
      },
    });
  }
  sumUp(mode, key1, key2, key3?) {
    if (mode == "2") {
      let val1 =
        this.retention_rates_of_permanent_employees_and_workers[key1]["male"][
          key2
        ] || "0";
      let val2 =
        this.retention_rates_of_permanent_employees_and_workers[key1]["female"][
          key2
        ] || "0";
      this.retention_rates_of_permanent_employees_and_workers[key1]["total"][
        key2
      ] = parseFloat(val1) + parseFloat(val2);
    }
  }
  setConditionValue(id) {
    if (
      id == "does_entity_have_an_equal_opportunity_policy" &&
      this.is_does_entity_have_an_equal_opportunity_policy == "No"
    ) {
      this.does_entity_have_an_equal_opportunity_policy = this.is_does_entity_have_an_equal_opportunity_policy;
    }
  }
}
