import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input,
} from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "product-services",
  templateUrl: "./product-services.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductServicesComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() data: any = {};
  @Input() isMonthly: boolean = false;

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  business_activity: any[] = [];
  products_services_sold_by_the_entity: any[] = [];
  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    public _utilities: CommonFunctionsService
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
    this.business_activity = this.data?.business_activity || [
      {
        description_of_main_activity: "",
        business_activity_description: "",
        total_turnover_percentage: "",
      },
    ];
    if (
      this.data?.business_activity &&
      this.data?.business_activity.length == 0
    )
      this.business_activity = [
        {
          description_of_main_activity: "",
          business_activity_description: "",
          total_turnover_percentage: "",
        },
      ];

    this.products_services_sold_by_the_entity = this.data
      ?.products_services_sold_by_the_entity || [
      {
        product_or_service: "",
        nic_code: "",
        total_turnover_percentage: "",
      },
    ];
    if (
      this.data?.products_services_sold_by_the_entity &&
      this.data?.products_services_sold_by_the_entity.length == 0
    )
      this.products_services_sold_by_the_entity = [
        {
          product_or_service: "",
          nic_code: "",
          total_turnover_percentage: "",
        },
      ];

    this._changeDetectorRef.detectChanges();
  }
  addField(mode) {
    let flag = 1;
    if (mode == "activity") {
      this.business_activity.filter((e) => {
        if (
          e.description_of_main_activity.trim().length == 0 ||
          e.business_activity_description.length == 0 ||
          e.total_turnover_percentage.length == 0
        )
          flag = 0;
      });
      if (flag == 0) {
        this._emitter.emit({
          type: "error",
          message: "Please fill all business activity fields first",
        });
        return;
      }
      if (this.business_activity.length < 15)
        this.business_activity.push({
          description_of_main_activity: "",
          business_activity_description: "",
          total_turnover_percentage: "",
        });
    } else if (mode == "sold") {
      this.products_services_sold_by_the_entity.filter((e) => {
        if (
          e.product_or_service.trim().length == 0 ||
          e.nic_code.length == 0 ||
          e.total_turnover_percentage.length == 0
        )
          flag = 0;
      });
      if (flag == 0) {
        this._emitter.emit({
          type: "error",
          message:
            "Please fill all fields of product/services sold by the entity",
        });
        return;
      }
      if (this.products_services_sold_by_the_entity.length < 15)
        this.products_services_sold_by_the_entity.push({
          product_or_service: "",
          nic_code: "",
          total_turnover_percentage: "",
        });
    }
  }
  removeField(mode, i) {
    if (mode == "activity" && this.business_activity.length > 1) {
      this.business_activity.splice(i, 1);
    } else if (
      mode == "sold" &&
      this.products_services_sold_by_the_entity.length > 1
    ) {
      this.products_services_sold_by_the_entity.splice(i, 1);
    }
  }
  updateProfile() {
    this._emitter.emit({
      submit: 1,
      data: this.getObject(),
    });
  }
  getObject() {
    return {
      business_activity: this.business_activity.filter(
        (e) =>
          e?.description_of_main_activity &&
          e?.description_of_main_activity.length > 0
      ),
      products_services_sold_by_the_entity: this.products_services_sold_by_the_entity.filter(
        (e) => e?.product_or_service && e?.product_or_service.length > 0
      ),
    };
  }
}
