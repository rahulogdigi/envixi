import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import { MatDialog } from "@angular/material/dialog";
import * as _moment from "moment";
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from "moment";
import { MatDatepicker } from "@angular/material/datepicker";

import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { CompanyProfileService } from "../../../providers/company-profile.service";
import { PrinciplesService } from "../../../providers/principles.service";

import { MonthlyPrincipleOneComponent } from "./monthly-principle-one/monthly-principle-one.component";
import { MonthlyPrincipleTwoComponent } from "./monthly-principle-two/monthly-principle-two.component";
import { MonthlyPrincipleThreeComponent } from "./monthly-principle-three/monthly-principle-three.component";
import { MonthlyPrincipleFourComponent } from "./monthly-principle-four/monthly-principle-four.component";
import { MonthlyPrincipleFiveComponent } from "./monthly-principle-five/monthly-principle-five.component";
import { MonthlyPrincipleSixComponent } from "./monthly-principle-six/monthly-principle-six.component";
import { MonthlyPrincipleSevenComponent } from "./monthly-principle-seven/monthly-principle-seven.component";
import { MonthlyPrincipleEightComponent } from "./monthly-principle-eight/monthly-principle-eight.component";
import { MonthlyPrincipleNineComponent } from "./monthly-principle-nine/monthly-principle-nine.component";
import { MonthlyCompanyProfileComponent } from "./monthly-company-profile/monthly-company-profile.component";
import { MonthlySectionBComponent } from "./monthly-section-b/monthly-section-b.component";
import { GenerateReportComponent } from "./generate-report/generate-report.component";

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: "MM/YYYY",
  },
  display: {
    dateInput: "MM/YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};
@Component({
  selector: "app-monthly-brsr-report",
  templateUrl: "./monthly-brsr-report.component.html",
  styleUrls: ["./monthly-brsr-report.component.scss"],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class MonthlyBrsrReportComponent implements OnInit {
  @ViewChild(MonthlyPrincipleOneComponent)
  monthlyPrincipleOneComponent: MonthlyPrincipleOneComponent;
  @ViewChild(MonthlyPrincipleTwoComponent)
  monthlyPrincipleTwoComponent: MonthlyPrincipleTwoComponent;
  @ViewChild(MonthlyPrincipleThreeComponent)
  monthlyPrincipleThreeComponent: MonthlyPrincipleThreeComponent;
  @ViewChild(MonthlyPrincipleFourComponent)
  monthlyPrincipleFourComponent: MonthlyPrincipleFourComponent;
  @ViewChild(MonthlyPrincipleFiveComponent)
  monthlyPrincipleFiveComponent: MonthlyPrincipleFiveComponent;
  @ViewChild(MonthlyPrincipleSixComponent)
  monthlyPrincipleSixComponent: MonthlyPrincipleSixComponent;
  @ViewChild(MonthlyPrincipleSevenComponent)
  monthlyPrincipleSevenComponent: MonthlyPrincipleSevenComponent;
  @ViewChild(MonthlyPrincipleEightComponent)
  monthlyPrincipleEightComponent: MonthlyPrincipleEightComponent;
  @ViewChild(MonthlyPrincipleNineComponent)
  monthlyPrincipleNineComponent: MonthlyPrincipleNineComponent;
  @ViewChild(MonthlyCompanyProfileComponent)
  monthlyCompanyProfileComponent: MonthlyCompanyProfileComponent;
  @ViewChild(MonthlySectionBComponent)
  monthlySectionBComponent: MonthlySectionBComponent;

  alert: any = {};
  showAlert: boolean = false;
  selectedLocation: string = "";
  allLocation: any[] = [];
  allYears: any[] = [];
  error1: string = "";
  error2: string = "";
  error3: string = "";
  error4: string = "";

  disableBtn: boolean = false;
  fromDateValue: any = new FormControl(moment());
  toDateValue: any = new FormControl(moment());
  startDate: any = "";
  endDate: any = "";
  selectedForms: any = [];
  allForms: string[] = [
    "Section A",
    "Section B",
    "Principle 1",
    "Principle 2",
    "Principle 3",
    "Principle 4",
    "Principle 5",
    "Principle 6",
    "Principle 7",
    "Principle 8",
    "Principle 9",
  ];
  isSubmit: boolean = false;
  promises: any;
  dialogRef: any;
  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  intervalId: any;
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    public _utilities: CommonFunctionsService,
    private _companyProfileService: CompanyProfileService,
    private _principlesService: PrinciplesService,
    private _router: Router,
    private dialog: MatDialog
  ) {
    const d = new Date();
    let year = d.getFullYear();
    for (let i = year; i >= 1950; i--) this.allYears.push(i);
    this.intervalId = setInterval(() => {
      if (this.prevCompanyId != this._utilities.selectedCompany?.company_id) {
        this.prevCompanyId = this._utilities.selectedCompany?.company_id;
        this.firstLoadFunction();
      }
    }, 1000);
  }

  ngOnInit(): void {
    this.firstLoadFunction();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  firstLoadFunction() {
    this._utilities.callRedirectLoader();
    const ctrlValue = this.fromDateValue.value!;
    ctrlValue.month(0);
    this.fromDateValue.setValue(ctrlValue);
    this.getAllLocation();
  }

  getAllLocation() {
    this._companyProfileService
      .getAllLocation({
        company_id: this._utilities.selectedCompany?.company_id,
      })
      .subscribe(
        (response) => {
          if (response?.status == 200) {
            this.allLocation = response?.data || [];
          }
        },
        (err) => {}
      );
  }

  generateReport() {
    this.error1 = "";
    this.error2 = "";
    this.error3 = "";
    this.error4 = "";
    this.isSubmit = false;
    let normalDate1: Moment = this.fromDateValue.value;
    let normalDate2: Moment = this.toDateValue.value;

    //console.log(this.toDateValue);
    if (!this.selectedLocation) {
      this.error1 = "Please Select Location";
      return;
    }
    if (!normalDate1) {
      this.error2 = "Please Select From Date";
      return;
    }
    if (!normalDate2) {
      this.error3 = "Please Select To Location";
      return;
    }
    let actualMonth1 = normalDate1.month() + 1;
    let actualMonth2 = normalDate2.month() + 1;
    if (normalDate1.year() > normalDate2.year()) {
      this.error2 = "From year can't be more than To year";
      return;
    } else if (
      normalDate1.year() > normalDate2.year() &&
      actualMonth1 > actualMonth2
    ) {
      this.error2 = "From month can't be more than To month";
      return;
    }
    this.startDate =
      normalDate1.year() +
      "-" +
      (actualMonth1 < 9 ? String(actualMonth1).padStart(2, "0") : actualMonth1);
    this.endDate =
      normalDate2.year() +
      "-" +
      (actualMonth2 < 9 ? String(actualMonth2).padStart(2, "0") : actualMonth2);

    this.isSubmit = true;

    // this.disableBtn = true;
    // this._router.navigate([`/dashboard/principle-i`], {
    //   queryParams: {
    //     ["year"]: this.selectedLocation,
    //   },
    // });
  }

  isDisplay(formName) {
    return this.isSubmit && this.selectedForms.includes(formName);
  }

  setMonthAndYear(
    normalizedMonthAndYear: Moment,
    datepicker: MatDatepicker<Moment>,
    mode
  ) {
    if (mode == "1") {
      const ctrlValue = this.fromDateValue.value!;
      ctrlValue.month(normalizedMonthAndYear.month());
      ctrlValue.year(normalizedMonthAndYear.year());
      this.fromDateValue.setValue(ctrlValue);
      datepicker.close();
    } else {
      const ctrlValue = this.toDateValue.value!;
      ctrlValue.month(normalizedMonthAndYear.month());
      ctrlValue.year(normalizedMonthAndYear.year());
      this.toDateValue.setValue(ctrlValue);
      datepicker.close();
    }
  }

  submitForm() {
    this.promises = [];
    let selectedFormNum = "";
    this.selectedForms.filter((e) => {
      if (e == "Section A") {
        selectedFormNum += "a-";
        this.promises.push(
          this.monthlyCompanyProfileComponent.calledFromParent()
        );
      } else if (e == "Section B") {
        selectedFormNum += "b-";
        this.promises.push(this.monthlySectionBComponent.submitFormB());
      } else if (e == "Principle 1") {
        selectedFormNum += "1-";
        this.promises.push(this.monthlyPrincipleOneComponent.submitForm());
      } else if (e == "Principle 2") {
        selectedFormNum += "2-";
        this.promises.push(this.monthlyPrincipleTwoComponent.submitForm());
      } else if (e == "Principle 3") {
        selectedFormNum += "3-";
        this.promises.push(this.monthlyPrincipleThreeComponent.submitForm());
      } else if (e == "Principle 4") {
        selectedFormNum += "4-";
        this.promises.push(this.monthlyPrincipleFourComponent.submitForm());
      } else if (e == "Principle 5") {
        selectedFormNum += "5-";
        this.promises.push(this.monthlyPrincipleFiveComponent.submitForm());
      } else if (e == "Principle 6") {
        selectedFormNum += "6-";
        this.promises.push(this.monthlyPrincipleSixComponent.submitForm());
      } else if (e == "Principle 7") {
        selectedFormNum += "7-";
        this.promises.push(this.monthlyPrincipleSevenComponent.submitForm());
      } else if (e == "Principle 8") {
        selectedFormNum += "8-";
        this.promises.push(this.monthlyPrincipleEightComponent.submitForm());
      } else if (e == "Principle 9") {
        selectedFormNum += "9-";
        this.promises.push(this.monthlyPrincipleNineComponent.submitForm());
      }
    });
    selectedFormNum = selectedFormNum.slice(0, -1);

    this._utilities.loaderOn();
    Promise.all(this.promises)
      .then((result) => {
        let obj = {
          startDate: this.startDate,
          endDate: this.endDate,
          selectedform: this.selectedForms,
          formData: result,
        };
        this._utilities.loaderOff();
        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Monthly Form Submitted Successfully",
        };
        this.closeAlert();
        this.dialogRef = this.dialog.open(GenerateReportComponent, {
          data: {
            details: obj,
          },
          height: "auto",
          disableClose: false,
        });
        this.dialogRef.afterClosed().subscribe((result) => {
          if (result?._id) {
          }
        });
      })
      .catch((err) => {
        this._utilities.loaderOff();
      });
  }

  closeAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}
