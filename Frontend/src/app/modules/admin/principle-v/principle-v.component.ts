import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { PrinciplesService } from "../../../providers/principles.service";
import { EssentialOneToFiveComponent } from "./essential-one-to-five/essential-one-to-five.component";
import { EssentialSixToTenComponent } from "./essential-six-to-ten/essential-six-to-ten.component";
import { PrincipleVLeadershipOneToFiveComponent } from "./principle-v-leadership-one-to-five/principle-v-leadership-one-to-five.component";
@Component({
  selector: "app-principle-v",
  templateUrl: "./principle-v.component.html",
  styleUrls: ["./principle-v.component.scss"],
})
export class PrincipleVComponent implements OnInit {
  @ViewChild(EssentialOneToFiveComponent)
  essentialOneToFiveComponent: EssentialOneToFiveComponent;
  @ViewChild(EssentialSixToTenComponent)
  essentialSixToTenComponent: EssentialSixToTenComponent;
  @ViewChild(PrincipleVLeadershipOneToFiveComponent)
  principleVLeadershipOneToFiveComponent: PrincipleVLeadershipOneToFiveComponent;

  alert: any = {};
  showAlert: boolean = false;
  moduleId: string = "63d55de9164bb0415e42cfa9";
  data: any = {
    one_to_five: {},
    six_to_ten: {},
    leadership_indicator: {},
  };
  response: any = {};

  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  intervalId: any;
  constructor(
    public _utilities: CommonFunctionsService,
    private _principlesService: PrinciplesService
  ) {
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
    this.getPrinciple();
  }

  getPrinciple() {
    this._utilities.loaderOn();
    this._principlesService
      .getPrinciple({
        company_id: this._utilities.selectedCompany?.company_id,
        form_type: "principal_five",
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          this.response = response?.data;
        },
        (err) => {
          this.response = {};
          console.log(err);
        }
      );
  }
  callBackFunction(e) {
    this.data[e.from] = e?.data;
  }
  submitForm() {
    this.essentialOneToFiveComponent.initialize();
    this.essentialSixToTenComponent.initialize();
    this.principleVLeadershipOneToFiveComponent.initialize();
    let obj = {
      company_id: this._utilities.selectedCompany?.company_id,
      financial_start_date: this._utilities?.financialStartDate,
      financial_end_date: this._utilities?.financialEndDate,
      essential_indicators: {
        ...this.data.one_to_five,
        ...this.data.six_to_ten,
      },
      leadership_indicators: {
        ...this.data.leadership_indicator,
      },
    };
    let finalObj = this._utilities.removeBlankElements(obj);
    console.log(finalObj);
    this._utilities.loaderOn();
    this._principlesService.addPrinciple5(finalObj).subscribe(
      (response) => {
        this._utilities.loaderOff();
        console.log(response);
        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Principle 5 Form Submitted Successfully",
        };
        this.closeAlert();
      },
      (err) => {
        console.log(err);
        this._utilities.loaderOff();
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: this._utilities.someThingWentWrong,
        };
        this.closeAlert();
      }
    );
  }
  closeAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}
