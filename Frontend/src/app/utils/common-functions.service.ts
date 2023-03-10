import { Injectable, ComponentRef } from "@angular/core";
// import * as moment from "moment-timezone";
import * as _ from "lodash";
import { FormGroup } from "@angular/forms";
import { CompanyProfileService } from "app/providers/company-profile.service";
import { AuthService } from "app/core/auth/auth.service";
@Injectable({
  providedIn: "root",
})
export class CommonFunctionsService {
  public showLoader: boolean = true;
  public selectedFinancialYear: string;
  public previousFinancialYear: string;
  public someThingWentWrong: string =
    "Something Went Wrong. Please refresh and try again.";

  public previousToPreviousFinancialYear: string;
  public allCompanies: any[] = [];
  public selectedCompany: any = {};
  allFinancialYears: any[] = [
    "2021-2022",
    "2020-2021",
    "2019-2020",
    "2018-2019",
    "2017-2018",
    "2017-2018",
    "2016-2017",
    "2015-2016",
    "2014-2015",
    "2013-2014",
    "2012-2013",
    "2011-2012",
    "2010-2011",
  ];
  public financialStartDate: string;
  public financialEndDate: string;
  public accessModuleList: any[] = [];
  public loggedUserRole: string = "";
  public allModulesForEmployer: any[] = [
    "63d55bf4164bb0415e42cd34", //section b
    "63d55e62164bb0415e42d040", // principle 9
    "63d55e49164bb0415e42d022", // principle 8
    "63d55e38164bb0415e42d00c", // principle 7
    "63d55e19164bb0415e42cfe6", //principle 6
    "63d55de9164bb0415e42cfa9", //principle 5
    "63d55dc6164bb0415e42cf79", //principle 4
    "63d55da2164bb0415e42cf4d", //principle 3
    "63d55d5b164bb0415e42cef2", //principle 2
    "63d55d34164bb0415e42cec0", //principle 1
    "63e4ecac164bb0415e46b31d", //monthly survey
    "63e4ee3b164bb0415e46b375", //monthly report
    "63d55e9e164bb0415e42d089", //generate BRSR report
    "63d55b9d164bb0415e42ccca", // dashboard S
    "63d55bc7164bb0415e42ccfe", //dashboard G
    "63d55a36164bb0415e42cb11", //dashboard E
  ];
  constructor(private _companyProfileService: CompanyProfileService) {
    var d = new Date();
    var curYear = d.getFullYear();
    let previous_years = curYear - 1;
    let previous_previous_years = previous_years - 1;
    this.selectedFinancialYear = previous_years + "-" + curYear;
    this.previousFinancialYear = previous_years - 1 + "-" + previous_years;
    this.previousToPreviousFinancialYear =
      previous_previous_years - 1 + "-" + previous_previous_years;
    this.financialStartDate = previous_years + "-04-01";
    this.financialEndDate = curYear + "-03-01";
    this.initialize();
  }

  reset() {
    this.allCompanies = [];
    this.selectedCompany = {};
  }

  initialize() {
    if (this._companyProfileService?.allCompany)
      this.allCompanies = JSON.parse(this._companyProfileService.allCompany);
    if (this.allCompanies.length) {
      this.selectedCompany = this.allCompanies[this.allCompanies.length - 1];
    }
  }

  callRedirectLoader() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 3000);
  }

  loaderOn() {
    this.showLoader = true;
  }

  loaderOff() {
    this.showLoader = false;
  }

  numberOnly(event, limit, noDecimal?): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (noDecimal && charCode == 46) return false;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    if (event.target.value.length > limit - 1) return false;
    return true;
  }

  textLimit(event, limit): boolean {
    if (event.target.value.length > limit - 1) return false;
    return true;
  }

  trimExtra(data, limit) {
    if (data.target.value.length > limit - 1) {
      data.target.value = data.target.value.substring(0, limit);
    }
  }

  getPercent(total, val) {
    if (total == 0) return 0;
    let perCent = (val / total) * 100;
    return parseFloat(perCent.toFixed(2));
  }

  removeBlankElements(data) {
    if (data == null) return null;
    let finalData = Object.assign({}, data);
    for (let key in finalData) {
      if (finalData.hasOwnProperty(key)) {
        if (Array.isArray(finalData[key])) {
          if (finalData[key] && !finalData[key].length) {
            finalData[key] = null;
          } else {
            finalData[key] = this.makeBlankObjectElementNull(finalData[key]);
          }
        } else if (typeof finalData[key] == "object") {
          finalData[key] = this.removeBlankElements(finalData[key]);
        } else {
          if (typeof finalData[key] === "string" && !finalData[key].length) {
            finalData[key] = null;
          }
        }
      }
    }
    return finalData;
  }
  makeBlankObjectElementNull(arrayOfObject) {
    arrayOfObject.map((obj) => {
      for (let objKey in obj) {
        if (typeof obj[objKey] === "string" && !obj[objKey].length) {
          obj[objKey] = null;
        }
      }
    });
    return arrayOfObject;
  }
  nullToString(obj) {
    if (obj == null) return "";
    let finalData = Object.assign({}, obj);
    for (let key in finalData) {
      if (finalData.hasOwnProperty(key)) {
        if (typeof finalData[key] == "object") {
          finalData[key] = this.nullToString(finalData[key]);
        }
        if (finalData[key] === null) finalData[key] = "";
      }
    }
    return finalData;
  }
  arrayNullToString(arr) {
    let finalData = Object.assign([], arr);
    finalData.map((e) => {
      for (let key in e) {
        if (e.hasOwnProperty(key)) {
          if (e[key] === null) e[key] = "";
        }
      }
    });

    return finalData;
  }

  getModuleChild(id, moduleArr) {
    let childData = [];
    moduleArr.filter((e) => {
      if (id == e?.parent) {
        childData.push({
          id: e?.id,
          title: e?.title,
          type: e?.type,
          icon: e?.icon,
          link: e?.link,
        });
      }
    });
    return childData;
  }

  numberToKMB(data) {
    if (data > 999 && data < 1000000) {
      return (data / 1000).toFixed(1) + "K";
    } else if (data > 999999 && data < 1000000000) {
      return (data / 1000000).toFixed(1) + "M";
    } else if (data > 999999999) {
      return (data / 1000000000).toFixed(1) + "B";
    }
    return data;
  }

  accessCheckForModules(moduleCode) {
    if (
      moduleCode == "p1" &&
      this.accessModuleList.includes("63d55d34164bb0415e42cec0")
    ) {
      //for principle 1
      return true;
    } else if (
      moduleCode == "p2" &&
      this.accessModuleList.includes("63d55d5b164bb0415e42cef2")
    ) {
      //for principle 2
      return true;
    } else if (
      moduleCode == "p3" &&
      this.accessModuleList.includes("63d55da2164bb0415e42cf4d")
    ) {
      //for principle 3
      return true;
    } else if (
      moduleCode == "p4" &&
      this.accessModuleList.includes("63d55dc6164bb0415e42cf79")
    ) {
      //for principle 4
      return true;
    } else if (
      moduleCode == "p5" &&
      this.accessModuleList.includes("63d55de9164bb0415e42cfa9")
    ) {
      //for principle 5
      return true;
    } else if (
      moduleCode == "p6" &&
      this.accessModuleList.includes("63d55e19164bb0415e42cfe6")
    ) {
      //for principle 6
      return true;
    } else if (
      moduleCode == "p7" &&
      this.accessModuleList.includes("63d55e38164bb0415e42d00c")
    ) {
      //for principle 7
      return true;
    } else if (
      moduleCode == "p8" &&
      this.accessModuleList.includes("63d55e49164bb0415e42d022")
    ) {
      //for principle 8
      return true;
    } else if (
      moduleCode == "p9" &&
      this.accessModuleList.includes("63d55e62164bb0415e42d040")
    ) {
      //for principle 8
      return true;
    } else if (
      moduleCode == "sA" &&
      this.accessModuleList.includes("63d55e62164bb0415e42d040")
    ) {
      //for principle 8
      return true;
    } else if (
      moduleCode == "sB" &&
      this.accessModuleList.includes("63d55bf4164bb0415e42cd34")
    ) {
      //for principle 8
      return true;
    }
    return false;
  }

  convertToFloat(
    obj,
    objKey1?,
    objKey2?,
    objKey3?,
    objKey4?,
    objKey5?,
    objKey6?,
    objKey7?,
    objKey8?,
    objKey9?,
    objKey10?,
    objKey11?
  ) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (
          typeof obj[key] === "object" &&
          !Array.isArray(obj[key]) &&
          obj[key] !== null
        ) {
          this.convertToFloat(
            obj[key],
            objKey1,
            objKey2,
            objKey3,
            objKey4,
            objKey5,
            objKey6,
            objKey7,
            objKey8,
            objKey9,
            objKey10,
            objKey11
          );
        } else if (Array.isArray(obj[key])) {
          obj[key].filter((e) => {
            this.convertToFloat(
              e,
              objKey1,
              objKey2,
              objKey3,
              objKey4,
              objKey5,
              objKey6,
              objKey7,
              objKey8,
              objKey9,
              objKey10,
              objKey11
            );
          });
        } else {
          if (objKey1 && key == objKey1) {
            obj[key] = parseFloat(obj[key]);
          } else if (objKey2 && key == objKey2) {
            obj[key] = parseFloat(obj[key]);
          } else if (objKey3 && key == objKey3) {
            obj[key] = parseFloat(obj[key]);
          } else if (objKey4 && key == objKey4) {
            obj[key] = parseFloat(obj[key]);
          } else if (objKey5 && key == objKey5) {
            obj[key] = parseFloat(obj[key]);
          } else if (objKey6 && key == objKey6) {
            obj[key] = parseFloat(obj[key]);
          } else if (objKey7 && key == objKey7) {
            obj[key] = parseFloat(obj[key]);
          } else if (objKey8 && key == objKey8) {
            obj[key] = parseFloat(obj[key]);
          } else if (objKey9 && key == objKey9) {
            obj[key] = parseFloat(obj[key]);
          } else if (objKey10 && key == objKey10) {
            obj[key] = parseFloat(obj[key]);
          } else if (objKey11 && key == objKey11) {
            obj[key] = parseFloat(obj[key]);
          }
        }
      }
    }
    return obj;
  }

  convertUnit(val, fromUnit, toUnit) {
    if (fromUnit == toUnit) return val;
    if (fromUnit == "kwh" && toUnit == "joule") {
      return 3600000 * val;
    } else if (fromUnit == "joule" && toUnit == "kwh") {
      return (val / 3600000).toFixed(2);
    }
  }
}
