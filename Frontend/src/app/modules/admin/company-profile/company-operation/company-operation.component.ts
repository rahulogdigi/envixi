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
  selector: "company-operation",
  styleUrls: ["company-operation.component.scss"],
  templateUrl: "./company-operation.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyOperationComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() data: any = {};
  @Input() isMonthly: boolean = false;

  location: any = {};
  market_served_by_entity: any = {};
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
    this.location = this.data?.location || {
      national_operations: {
        number_of_plants: "",
        number_of_office: "",
      },
      international_operations: {
        number_of_plants: "",
        number_of_office: "",
      },
    };
    this.market_served_by_entity = this.data?.market_served_by_entity || {
      number_of_location: {
        number_of_states: "",
        number_of_countries: "",
      },
      seventeen_b: "",
      seventeen_c: "",
    };
    this._changeDetectorRef.detectChanges();
  }
  getSum(val1, val2) {
    val1 = val1 ? parseFloat(val1) : 0;
    val2 = val2 ? parseFloat(val2) : 0;
    return val1 + val2;
  }
  getObject() {
    return {
      location: this.location,
      market_served_by_entity: this.market_served_by_entity,
    };
  }
  updateProfile() {
    this._emitter.emit({
      submit: 1,
      data: this.getObject(),
    });
  }
}
