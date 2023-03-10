import {
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output,
  Input,
} from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-iii-thirteen-to-fifteen",
  templateUrl: "./principle-iii-thirteen-to-fifteen.component.html",
  styleUrls: ["./principle-iii-thirteen-to-fifteen.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PrincipleIiiThirteenToFifteenComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  number_of_complaints: any = {
    current_financial_year: {
      year: this._utilities.selectedFinancialYear,
      working_conditions: {
        filed_during_the_year: "",
        pending_resolution_at_the_year_end: "",
        remarks: "",
      },
      healthy_and_safety: {
        filed_during_the_year: "",
        pending_resolution_at_the_year_end: "",
        remarks: "",
      },
    },
    previous_financial_year: {
      year: this._utilities.previousFinancialYear,
      working_conditions: {
        filed_during_the_year: "",
        pending_resolution_at_the_year_end: "",
        remarks: "",
      },
      healthy_and_safety: {
        filed_during_the_year: "",
        pending_resolution_at_the_year_end: "",
        remarks: "",
      },
    },
  };
  assessment_of_the_year: any = {
    health_and_safety_practices: {
      percentage_of_your_plants: "",
    },
    working_conditions: {
      percentage_of_your_plants: "",
    },
  };
  details_of_any_corrective_action_taken: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    if (this.response?.essential_indicators) {
      this.number_of_complaints = this._utilities.nullToString(
        this.response?.essential_indicators?.number_of_complaints
      );
      this.assessment_of_the_year = this._utilities.nullToString(
        this.response?.essential_indicators?.assessment_of_the_year
      );
      this.details_of_any_corrective_action_taken = this.response?.essential_indicators?.details_of_any_corrective_action_taken;
    } else {
      this.number_of_complaints = {
        current_financial_year: {
          year: this._utilities.selectedFinancialYear,
          working_conditions: {
            filed_during_the_year: "",
            pending_resolution_at_the_year_end: "",
            remarks: "",
          },
          healthy_and_safety: {
            filed_during_the_year: "",
            pending_resolution_at_the_year_end: "",
            remarks: "",
          },
        },
        previous_financial_year: {
          year: this._utilities.previousFinancialYear,
          working_conditions: {
            filed_during_the_year: "",
            pending_resolution_at_the_year_end: "",
            remarks: "",
          },
          healthy_and_safety: {
            filed_during_the_year: "",
            pending_resolution_at_the_year_end: "",
            remarks: "",
          },
        },
      };
      this.assessment_of_the_year = {
        health_and_safety_practices: {
          percentage_of_your_plants: "",
        },
        working_conditions: {
          percentage_of_your_plants: "",
        },
      };
      this.details_of_any_corrective_action_taken = "";
    }
  }

  setMonthlyData(res, isCurrent) {
    if (isCurrent) {
      this.number_of_complaints.current_financial_year =
        res.number_of_complaints.current_financial_year;
    } else {
      this.number_of_complaints.previous_financial_year =
        res.number_of_complaints.current_financial_year;
    }
  }

  initialize() {
    this._emitter.emit({
      from: "thirteen_to_fifteen",
      data: {
        number_of_complaints: this.number_of_complaints,
        assessment_of_the_year: this.assessment_of_the_year,
        details_of_any_corrective_action_taken: this
          .details_of_any_corrective_action_taken,
      },
    });
  }
}
