import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { CompanyProfileService } from "../../../providers/company-profile.service";
@Component({
  selector: "app-manage-access",
  templateUrl: "./manage-access.component.html",
  styleUrls: ["./manage-access.component.scss"],
})
export class ManageAccessComponent implements OnInit {
  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  alert: any = {};
  showAlert: boolean = false;
  intervalId: any;
  error1: string = "";
  error2: string = "";

  selectedLocation: string = "";
  allLocation: any[] = [];

  selectedEmployee: string = "";
  allEmployee: any[] = [];
  allModules: any[] = [];
  moduleAccessData: any[] = [];
  disableBtn: boolean = false;
  isSubmit: boolean = false;

  constructor(
    public _utilities: CommonFunctionsService,
    private _companyProfileService: CompanyProfileService
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

  firstLoadFunction() {
    this._utilities.callRedirectLoader();
    this.getAllEmployees();
    this.getAllModuleList();
    this.getAllLocation();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
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

  getAllModuleList() {
    this._utilities.loaderOn();
    this._companyProfileService
      .getAllModuleList({
        company_id: this._utilities.selectedCompany?.company_id,
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          this.allModules = response?.data || [];
          this.allModules.map((e) => {
            if (e?.type == "group") e["hasAccess"] = true;
            else e["hasAccess"] = false;
          });
        },
        (err) => {
          this._utilities.loaderOff();
          console.log(err);
        }
      );
  }

  getAllEmployees() {
    this._companyProfileService
      .getAllEmployee({
        company_id: this._utilities.selectedCompany?.company_id,
      })
      .subscribe(
        (response) => {
          this.allEmployee = response?.data || [];
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getUserAccess() {
    if (!this.selectedEmployee.length || !this.selectedLocation.length) {
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: "Please select Location and Employee first",
      };
      this.closeAlert();
      return;
    }
    this._utilities.loaderOn();
    this._companyProfileService
      .getUserAccess({
        company_id: this._utilities.selectedCompany?.company_id,
        employee_id: this.selectedEmployee,
        location_id: this.selectedLocation,
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          console.log(response);
          this.isSubmit = true;
          this.moduleAccessData = response?.data || [];
          if (this.moduleAccessData.length) {
            this.allModules.map((e) => {
              e["hasAccess"] = this.moduleAccessData[0]?.module_list.includes(
                e?._id
              );
            });
          }
          console.log(this.allModules);
        },
        (err) => {
          this.moduleAccessData = [];
          this.isSubmit = true;
          this._utilities.loaderOff();
          console.log(err);
        }
      );
  }

  // updateModuleAccess(_id) {
  //   //console.log(_id);
  //   this.allModules.filter((e) => {
  //     if (e?._id == _id) console.log(e?.hasAccess);
  //   });

  // }

  addEditAccess() {
    let selectedModule = [];
    this.allModules.filter((e) => {
      if (e?.hasAccess) selectedModule.push(e?._id);
    });

    if (!selectedModule.length) {
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: "Please select atleast 1 module",
      };
      this.closeAlert();
      return;
    }
    this._utilities.loaderOn();
    this._companyProfileService
      .addEditAccess({
        company_id: this._utilities.selectedCompany?.company_id,
        employee_id: this.selectedEmployee,
        location_id: this.selectedLocation,
        module_list: selectedModule.join(),
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          console.log(response);
          this.showAlert = true;
          this.alert = {
            type: "success",
            message: "Module Access Submited Successfully",
          };
          this.closeAlert();
        },
        (err) => {
          this.moduleAccessData = [];
          this._utilities.loaderOff();
          console.log(err);
        }
      );
  }

  closeAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}
