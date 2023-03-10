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

@Component({
  selector: "app-report-listed-entity",
  templateUrl: "./report-listed-entity.component.html",
  styleUrls: ["./report-listed-entity.component.scss"],
})
export class ReportListedEntityComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() data: any = {};
  @Input() isEdit: boolean = false;

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
  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.initialize();
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

    this._changeDetectorRef.detectChanges();
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
    this.contact_details.push({ contact_person: "", contact_number: [] });
  }
  removeContact(i) {
    this.contact_details.splice(i, 1);
  }
}
