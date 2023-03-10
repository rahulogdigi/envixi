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
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "csr-details",
  templateUrl: "./csr-details.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CsrDetailsComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() data: any = {};
  @Input() isMonthly: boolean = false;

  is_csr_applicable: any = "";
  turnover_in_rs: any = "";
  net_worth: any = "";

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
    // Create the form
    this.initialize();
  }

  ngOnDestroy(): void {
    this._emitter.emit({
      submit: 0,
      data: this.getObject(),
    });
  }

  initialize() {
    this.is_csr_applicable = this.data?.is_csr_applicable
      ? "Yes"
      : this.data?.is_csr_applicable == false
      ? "No"
      : "";
    this.turnover_in_rs = this.data?.turnover_in_rs || "";
    this.net_worth = this.data?.net_worth || "";
    this._changeDetectorRef.detectChanges();
  }

  getObject() {
    return {
      is_csr_applicable:
        this.is_csr_applicable == "Yes"
          ? true
          : this.is_csr_applicable == "No"
          ? false
          : "",
      turnover_in_rs: this.turnover_in_rs,
      net_worth: this.net_worth,
    };
  }

  updateProfile() {
    this._emitter.emit({
      submit: 1,
      data: this.getObject(),
    });
  }
}
