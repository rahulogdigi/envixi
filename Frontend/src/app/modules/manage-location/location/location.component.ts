import { Component, OnInit } from "@angular/core";
import { CompanyProfileService } from "../../../providers/company-profile.service";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
})
export class LocationComponent implements OnInit {
  alert: any = {};
  showAlert: boolean = false;

  disableBtn: boolean = false;
  isSubmit: boolean = false;
  error1: string = "";
  error2: string = "";

  locationName: string = "";
  locationAddress: string = "";
  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  intervalId: any;
  displayedColumns: string[] = ["snum", "location_name", "address"];
  dataSource: any[] = [];
  constructor(
    private _companyProfileService: CompanyProfileService,
    public _utilities: CommonFunctionsService
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
    this.getAllLocation();
  }

  getAllLocation() {
    this._utilities.loaderOn();
    this._companyProfileService
      .getAllLocation({
        company_id: this._utilities.selectedCompany?.company_id,
      })
      .subscribe(
        (response) => {
          if (response?.status == 200) {
            this.dataSource = response?.data || [];
            this.dataSource.map((e, i) => {
              e["snum"] = i + 1;
            });
            this._utilities.loaderOff();
          }
        },
        (err) => {
          this._utilities.loaderOff();
        }
      );
  }

  createLocation() {
    this.error1 = "";
    this.error2 = "";
    if (this.locationName.trim().length == 0) {
      this.error1 = "Please Enter Location Name";
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: "Please Enter Location Name",
      };
      this.closeAlert();
      return;
    } else if (this.locationAddress.trim().length == 0) {
      this.error2 = "Please Enter Location Address";
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: "Please Enter Location Address",
      };
      this.closeAlert();
      return;
    }

    this._utilities.loaderOn();
    this._companyProfileService
      .addLocation({
        company_id: this._utilities.selectedCompany?.company_id,
        address: this.locationAddress,
        location_name: this.locationName,
      })
      .subscribe(
        (response) => {
          if (response?.status == 200) {
            this.showAlert = true;
            this.alert = {
              type: "success",
              message: "Location Added Successfully",
            };
            this.closeAlert();
            this.getAllLocation();
            this.locationAddress = "";
            this.locationName = "";
            this._utilities.loaderOff();
          }
        },
        (err) => {
          this._utilities.loaderOff();
        }
      );
  }

  closeAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}
