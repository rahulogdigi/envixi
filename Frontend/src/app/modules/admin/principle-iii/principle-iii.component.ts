import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { PrinciplesService } from "../../../providers/principles.service";
import { PrincipleIiiOneToThreeComponent } from "./principle-iii-one-to-three/principle-iii-one-to-three.component";
import { PrincipleIiiFourToSixComponent } from "./principle-iii-four-to-six/principle-iii-four-to-six.component";
import { PrincipleIiiSevenToNineComponent } from "./principle-iii-seven-to-nine/principle-iii-seven-to-nine.component";
import { PrincipleIiiTenToTwelveComponent } from "./principle-iii-ten-to-twelve/principle-iii-ten-to-twelve.component";
import { PrincipleIiiThirteenToFifteenComponent } from "./principle-iii-thirteen-to-fifteen/principle-iii-thirteen-to-fifteen.component";
import { PrincipleIiiLeaderhipIndicatorComponent } from "./principle-iii-leaderhip-indicator/principle-iii-leaderhip-indicator.component";
@Component({
  selector: "app-principle-iii",
  templateUrl: "./principle-iii.component.html",
  styleUrls: ["./principle-iii.component.scss"],
})
export class PrincipleIiiComponent implements OnInit {
  @ViewChild(PrincipleIiiOneToThreeComponent)
  principleIiiOneToThreeComponent: PrincipleIiiOneToThreeComponent;
  @ViewChild(PrincipleIiiFourToSixComponent)
  principleIiiFourToSixComponent: PrincipleIiiFourToSixComponent;
  @ViewChild(PrincipleIiiSevenToNineComponent)
  principleIiiSevenToNineComponent: PrincipleIiiSevenToNineComponent;
  @ViewChild(PrincipleIiiTenToTwelveComponent)
  principleIiiTenToTwelveComponent: PrincipleIiiTenToTwelveComponent;
  @ViewChild(PrincipleIiiThirteenToFifteenComponent)
  principleIiiThirteenToFifteenComponent: PrincipleIiiThirteenToFifteenComponent;
  @ViewChild(PrincipleIiiLeaderhipIndicatorComponent)
  principleIiiLeaderhipIndicatorComponent: PrincipleIiiLeaderhipIndicatorComponent;

  alert: any = {};
  showAlert: boolean = false;
  moduleId: string = "63d55da2164bb0415e42cf4d";
  data: any = {
    one_to_three: {},
    four_to_six: {},
    seven_to_nine: {},
    ten_to_twelve: {},
    thirteen_to_fifteen: {},
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
        form_type: "principal_three",
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          this.response = response?.data;
          console.log(response);
        },
        (err) => {
          this.response = {};
          console.log(err);
        }
      );
  }

  callBackFunction(e) {
    this.data[e.from] = e?.data;
    console.log("this.data", this.data);
  }
  submitForm() {
    this.principleIiiOneToThreeComponent.initialize();
    this.principleIiiFourToSixComponent.initialize();
    this.principleIiiSevenToNineComponent.initialize();
    this.principleIiiTenToTwelveComponent.initialize();
    this.principleIiiThirteenToFifteenComponent.initialize();
    this.principleIiiLeaderhipIndicatorComponent.initialize();
    let obj = {
      company_id: this._utilities.selectedCompany?.company_id,
      financial_start_date: this._utilities?.financialStartDate,
      financial_end_date: this._utilities?.financialEndDate,
      essential_indicators: {
        ...this.data.one_to_three,
        ...this.data.four_to_six,
        ...this.data.seven_to_nine,
        ...this.data.ten_to_twelve,
        ...this.data.thirteen_to_fifteen,
      },
      leadership_indicators: {
        ...this.data.leadership_indicator,
      },
    };
    let finalObj = this._utilities.removeBlankElements(obj);
    console.log(finalObj);
    this._utilities.loaderOn();
    this._principlesService.addPrinciple3(finalObj).subscribe(
      (response) => {
        this._utilities.loaderOff();
        console.log(response);
        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Principle 3 Form Submitted Successfully",
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
