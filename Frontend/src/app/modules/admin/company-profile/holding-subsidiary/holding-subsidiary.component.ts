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
  selector: "holding-subsidiary",
  styleUrls: ["holding-subsidiary.component.scss"],
  templateUrl: "./holding-subsidiary.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoldingSubsidiaryComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() data: any = {};
  @Input() isMonthly: boolean = false;

  v_associate_companies: any[] = [];
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
    this.v_associate_companies = this.data?.v_associate_companies || [
      {
        name_of_holding_or_associate_companies: "",
        indicate_whether_holding_or_subsidiary_or_associate_joint_venture: "",
        percentage_of_shares_held_by_listed_entity: "",
        does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity:
          "",
      },
    ];
    this.v_associate_companies.map((e) => {
      e.does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity = e.does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity
        ? "Yes"
        : e.does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity ==
          false
        ? "No"
        : "";
    });
    if (
      this.data?.v_associate_companies &&
      this.data?.v_associate_companies.length == 0
    )
      this.v_associate_companies = [
        {
          name_of_holding_or_associate_companies: "",
          indicate_whether_holding_or_subsidiary_or_associate_joint_venture: "",
          percentage_of_shares_held_by_listed_entity: "",
          does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity:
            "",
        },
      ];
    this._changeDetectorRef.detectChanges();
  }

  getObject() {
    this.v_associate_companies.map((e) => {
      e.does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity =
        e.does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity ==
        "Yes"
          ? true
          : e.does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity ==
            "No"
          ? false
          : "";
    });
    return {
      v_associate_companies: this.v_associate_companies.filter(
        (e) =>
          e?.name_of_holding_or_associate_companies &&
          e?.name_of_holding_or_associate_companies.length > 0
      ),
    };
  }

  addField() {
    let flag = 1;
    this.v_associate_companies.filter((e) => {
      if (
        e.name_of_holding_or_associate_companies.trim().length == 0 ||
        e.indicate_whether_holding_or_subsidiary_or_associate_joint_venture.trim()
          .length == 0 ||
        e
          .does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity
          .length == 0
      )
        flag = 0;
    });
    if (flag == 0) {
      this._emitter.emit({
        type: "error",
        message:
          "Please fill all fields of holding / subsidiary / associate companies / joint ventures",
      });
      return;
    }
    if (this.v_associate_companies.length < 15)
      this.v_associate_companies.push({
        name_of_holding_or_associate_companies: "",
        indicate_whether_holding_or_subsidiary_or_associate_joint_venture: "",
        percentage_of_shares_held_by_listed_entity: "",
        does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity:
          "",
      });
  }
  removeField(i) {
    if (this.v_associate_companies.length > 1)
      this.v_associate_companies.splice(i, 1);
  }
  updateProfile() {
    this._emitter.emit({
      submit: 1,
      data: this.getObject(),
    });
  }
}
