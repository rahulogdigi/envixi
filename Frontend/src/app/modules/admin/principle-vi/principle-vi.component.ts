import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { PrinciplesService } from "../../../providers/principles.service";
import { PrincipleViOneToThreeComponent } from "./principle-vi-one-to-three/principle-vi-one-to-three.component";
import { PrincipleViFourToSixComponent } from "./principle-vi-four-to-six/principle-vi-four-to-six.component";
import { PrincipleViSevenToNineComponent } from "./principle-vi-seven-to-nine/principle-vi-seven-to-nine.component";
import { PrincipleViTenToTwelveComponent } from "./principle-vi-ten-to-twelve/principle-vi-ten-to-twelve.component";
import { PrincipleViThirteenToFiftenComponent } from "./principle-vi-thirteen-to-fiften/principle-vi-thirteen-to-fiften.component";
import { PrincipleViSixteenToTwentyoneComponent } from "./principle-vi-sixteen-to-twentyone/principle-vi-sixteen-to-twentyone.component";
@Component({
  selector: "app-principle-vi",
  templateUrl: "./principle-vi.component.html",
  styleUrls: ["./principle-vi.component.scss"],
})
export class PrincipleViComponent implements OnInit {
  @ViewChild(PrincipleViOneToThreeComponent)
  principleViOneToThreeComponent: PrincipleViOneToThreeComponent;
  @ViewChild(PrincipleViFourToSixComponent)
  principleViFourToSixComponent: PrincipleViFourToSixComponent;
  @ViewChild(PrincipleViSevenToNineComponent)
  principleViSevenToNineComponent: PrincipleViSevenToNineComponent;
  @ViewChild(PrincipleViTenToTwelveComponent)
  principleViTenToTwelveComponent: PrincipleViTenToTwelveComponent;
  @ViewChild(PrincipleViThirteenToFiftenComponent)
  principleViThirteenToFiftenComponent: PrincipleViThirteenToFiftenComponent;
  @ViewChild(PrincipleViSixteenToTwentyoneComponent)
  principleViSixteenToTwentyoneComponent: PrincipleViSixteenToTwentyoneComponent;
  alert: any = {};
  showAlert: boolean = false;
  moduleId: string = "63d55e19164bb0415e42cfe6";
  data: any = {
    one_to_three: {},
    four_to_six: {},
    seven_to_nine: {},
    ten_to_twelve: {},
    thirteen_to_fifteen: {},
    sixteen_to_twentyone: {},
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
        form_type: "principal_six",
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
    if (e?.data) this.data[e.from] = e?.data;
    else {
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: e?.msg,
      };
      this.closeAlert();
    }
    console.log("this.data", this.data);
  }
  submitForm() {
    this.principleViOneToThreeComponent.initialize();
    this.principleViFourToSixComponent.initialize();
    this.principleViSevenToNineComponent.initialize();
    this.principleViTenToTwelveComponent.initialize();
    this.principleViThirteenToFiftenComponent.initialize();
    this.principleViSixteenToTwentyoneComponent.initialize();
    let obj = {
      company_id: this._utilities.selectedCompany?.company_id,
      financial_start_date: this._utilities?.financialStartDate,
      financial_end_date: this._utilities?.financialEndDate,
      essential_indicators: {
        ...this.data.one_to_three,
        ...this.data.four_to_six,
        ...this.data.seven_to_nine,
        ...this.data.ten_to_twelve,
      },
      leadership_indicators: {
        ...this.data.thirteen_to_fifteen,
        ...this.data.sixteen_to_twentyone,
      },
    };
    let finalObj = this._utilities.removeBlankElements(obj);
    console.log(finalObj);
    this._utilities.loaderOn();
    this._principlesService.addPrinciple6(finalObj).subscribe(
      (response) => {
        this._utilities.loaderOff();
        console.log(response);
        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Principle 6 Form Submitted Successfully",
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
