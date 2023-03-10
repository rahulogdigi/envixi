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
import { MatChipInputEvent } from "@angular/material/chips";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "listed-entity",
  styleUrls: ["listed-entity.component.scss"],
  templateUrl: "./listed-entity.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListedEntityComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() data: any = {};
  @Input() isEdit: boolean = false;
  @Input() isMonthly: boolean = false;

  contact_number: any[] = [];
  website_url: any[] = [];
  contact_details: any[] = [{ contact_person: "", contact_number: [] }];
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  corporate_identity_number: string = "";
  company_name: string = "";
  incorporation_year: string = "";
  registered_office_address: string = "";
  corporate_office_address: string = "";
  financial_year: string = "";
  stock_exchange_name: string = "";
  paid_up_capital: string = "";
  reporting_boundary: string = "";
  emai_id: string = "";

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
    this.contact_number = this.data?.contact_number || [];
    this.website_url = this.data?.website_url || [];
    this.contact_details = this.data?.contact_details || [
      { contact_person: "", contact_number: [] },
    ];
    if (this.data?.contact_details && this.data?.contact_details.length == 0)
      this.contact_details = [{ contact_person: "", contact_number: [] }];
    this.corporate_identity_number = this.data?.corporate_identity_number || "";
    this.company_name = this.data?.company_name || "";
    this.incorporation_year = this.data?.incorporation_year || "";
    this.registered_office_address = this.data?.registered_office_address || "";
    this.corporate_office_address = this.data?.corporate_office_address || "";
    this.financial_year = this.data?.financial_year || "";
    this.stock_exchange_name = this.data?.stock_exchange_name || "";
    this.paid_up_capital = this.data?.paid_up_capital || "";
    this.reporting_boundary = this.data?.reporting_boundary || "";
    this.emai_id = this.data?.emai_id || "";
    console.log("inside child", this.isEdit);
    this._changeDetectorRef.detectChanges();
  }

  getObject() {
    return {
      contact_number: this.contact_number,
      website_url: this.website_url,
      contact_details: this.contact_details.filter(
        (e) => e?.contact_person && e?.contact_person.length > 0
      ),
      corporate_identity_number: this.corporate_identity_number,
      company_name: this.company_name,
      incorporation_year: this.incorporation_year,
      registered_office_address: this.registered_office_address,
      corporate_office_address: this.corporate_office_address,
      financial_year: this.financial_year,
      stock_exchange_name: this.stock_exchange_name,
      paid_up_capital: this.paid_up_capital,
      reporting_boundary: this.reporting_boundary,
      emai_id: this.emai_id,
    };
  }
  add(event: MatChipInputEvent, mode, index?): void {
    const value = (event.value || "").trim();

    // Add our fruit
    if (value) {
      if (mode == "contact_number") this.contact_number.push(value);
      else if (mode == "website_url") this.website_url.push(value);
      else if (mode == "detial_contact_number")
        this.contact_details[index].contact_number.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(selValue, mode, i?): void {
    let index;
    if (mode == "contact_number") index = this.contact_number.indexOf(selValue);
    else if (mode == "website_url") index = this.website_url.indexOf(selValue);
    else if (mode == "detial_contact_number")
      index = this.contact_details[i].contact_number.indexOf(selValue);

    if (index >= 0) {
      if (mode == "contact_number") this.contact_number.splice(index, 1);
      else if (mode == "website_url") this.website_url.splice(index, 1);
      else if (mode == "detial_contact_number")
        this.contact_details[i].contact_number.splice(index, 1);
    }
  }

  addContact() {
    let flag = 1;
    this.contact_details.filter((e) => {
      if (e.contact_person.trim().length == 0 || e.contact_number.length == 0)
        flag = 0;
    });
    if (flag == 0) {
      this._emitter.emit({
        type: "error",
        message: "Please fill all contact fields first",
      });
      return;
    }
    if (this.contact_details.length < 15)
      this.contact_details.push({ contact_person: "", contact_number: [] });
  }
  removeContact(i) {
    if (this.contact_details.length > 1) this.contact_details.splice(i, 1);
  }
  updateProfile() {
    this._emitter.emit({
      submit: 1,
      data: this.getObject(),
    });
  }
}
