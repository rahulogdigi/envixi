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
  selector: "transparency-compliances",
  styleUrls: ["transparency-compliances.component.scss"],
  templateUrl: "./transparency-compliances.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransparencyCompliancesComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() data: any = {};
  @Input() isMonthly: boolean = false;

  stakeholder_group: any = {};

  business_conduct_issues: any[] = [];

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
    this.stakeholder_group = this.data?.stakeholder_group || {
      communities: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      investors: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      shareholders: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      employee_and_workers: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      customers: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      value_chain_partner: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
      others: {
        grievance_redressal_mechanism_in_place: "",
        current_fy: {
          year: this._utilities.selectedFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
        previous_fy: {
          year: this._utilities.previousFinancialYear,
          number_of_complaints: "",
          number_of_complaints_pending_resolution_at_close: "",
          remarks: "",
        },
      },
    };

    this.business_conduct_issues = this.data?.business_conduct_issues || [
      {
        material_issue_identified: "",
        indicate_whether_risk_or_opportunity: "",
        rational_of_identifying: "",
        in_case_of_risk: "",
        financial_implications: "",
      },
    ];
    if (
      this.data?.business_conduct_issues &&
      this.data?.business_conduct_issues.length == 0
    )
      this.business_conduct_issues = [
        {
          material_issue_identified: "",
          indicate_whether_risk_or_opportunity: "",
          rational_of_identifying: "",
          in_case_of_risk: "",
          financial_implications: "",
        },
      ];
    this._changeDetectorRef.detectChanges();
  }
  addField() {
    let flag = 1;
    this.business_conduct_issues.filter((e) => {
      if (
        e.material_issue_identified.trim().length == 0 ||
        e.indicate_whether_risk_or_opportunity.trim().length == 0 ||
        e.rational_of_identifying.trim().length == 0 ||
        e.in_case_of_risk.trim().length == 0 ||
        e.financial_implications.trim().length == 0
      )
        flag = 0;
    });
    if (flag == 0) {
      this._emitter.emit({
        type: "error",
        message: "Please fill all fields of the issue",
      });
      return;
    }
    if (this.business_conduct_issues.length < 15)
      this.business_conduct_issues.push({
        material_issue_identified: "",
        indicate_whether_risk_or_opportunity: "",
        rational_of_identifying: "",
        in_case_of_risk: "",
        financial_implications: "",
      });
  }
  removeField(i) {
    if (this.business_conduct_issues.length > 1)
      this.business_conduct_issues.splice(i, 1);
  }
  getObject() {
    return {
      stakeholder_group: this.stakeholder_group,
      business_conduct_issues: this.business_conduct_issues.filter(
        (e) =>
          e?.material_issue_identified &&
          e?.material_issue_identified.length > 0
      ),
    };
  }
  updateProfile() {
    this._emitter.emit({
      submit: 1,
      data: this.getObject(),
    });
  }
}
