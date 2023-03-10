import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDrawer } from "@angular/material/sidenav";
import { Subject, takeUntil } from "rxjs";
import { fuseAnimations } from "@fuse/animations";
import { FuseMediaWatcherService } from "@fuse/services/media-watcher";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { CompanyProfileService } from "../../../../providers/company-profile.service";

//Child component
import { ListedEntityComponent } from "../../company-profile/listed-entity/listed-entity.component";
import { ProductServicesComponent } from "../../company-profile/product-services/product-services.component";
import { CompanyOperationComponent } from "../../company-profile/company-operation/company-operation.component";
import { CompanyEmployeesComponent } from "../../company-profile/company-employees/company-employees.component";
import { HoldingSubsidiaryComponent } from "../../company-profile/holding-subsidiary/holding-subsidiary.component";
import { CsrDetailsComponent } from "../../company-profile/csr-details/csr-details.component";
import { TransparencyCompliancesComponent } from "../../company-profile/transparency-compliances/transparency-compliances.component";
import { AuthService } from "app/core/auth/auth.service";

@Component({
  selector: "app-monthly-company-profile",
  templateUrl: "./monthly-company-profile.component.html",
  styleUrls: ["./monthly-company-profile.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthlyCompanyProfileComponent implements OnInit {
  @ViewChild(ListedEntityComponent)
  listedEntityComponent: ListedEntityComponent;
  @ViewChild(ProductServicesComponent)
  productServicesComponent: ProductServicesComponent;
  @ViewChild(CompanyOperationComponent)
  companyOperationComponent: CompanyOperationComponent;
  @ViewChild(CompanyEmployeesComponent)
  companyEmployeesComponent: CompanyEmployeesComponent;
  @ViewChild(HoldingSubsidiaryComponent)
  holdingSubsidiaryComponent: HoldingSubsidiaryComponent;
  @ViewChild(CsrDetailsComponent)
  csrDetailsComponent: CsrDetailsComponent;
  @ViewChild(TransparencyCompliancesComponent)
  transparencyCompliancesComponent: TransparencyCompliancesComponent;

  data: any = {};
  finalData: any = {};
  alert: any = {};
  showAlert: boolean = false;
  responseData: any = {};
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    public _utilities: CommonFunctionsService,
    private _companyProfileService: CompanyProfileService,
    private _router: Router,
    private route: ActivatedRoute,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getPrinciple();
  }

  getPrinciple() {
    this._utilities.loaderOn();
    this._companyProfileService
      .getSingleCompany({
        company_id: this._utilities.selectedCompany?.company_id,
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          this.responseData = response?.data;
          this.setData();
          console.log(this.data);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  setData() {
    this.data.company_name = this.responseData?.company_name || "";
    this.data.corporate_identity_number =
      this.responseData?.corporate_identity_number || "";
    this.data.contact_number = this.responseData?.contact_number || [];
    this.data.website_url = this.responseData?.website_url || [];
    this.data.contact_details = this.responseData?.contact_details || [];

    this.data.incorporation_year = this.responseData?.incorporation_year || "";
    this.data.registered_office_address =
      this.responseData?.registered_office_address || "";
    this.data.corporate_office_address =
      this.responseData?.corporate_office_address || "";
    this.data.financial_year = this.responseData?.financial_year || "";
    this.data.stock_exchange_name =
      this.responseData?.stock_exchange_name || "";
    this.data.paid_up_capital = this.responseData?.paid_up_capital || "";
    this.data.reporting_boundary = this.responseData?.reporting_boundary || "";
    this.data.emai_id = this.responseData?.emai_id || "";
    if (this.listedEntityComponent) this.listedEntityComponent.initialize();

    //product starts
    this.data.business_activity =
      this.responseData?.ii_products_and_services?.business_activity || [];
    this.data.products_services_sold_by_the_entity =
      this.responseData?.ii_products_and_services
        ?.products_services_sold_by_the_entity || [];
    if (this.productServicesComponent)
      this.productServicesComponent.initialize();
    //product ends

    //Operations starts
    this.data.location = this._utilities.nullToString(
      this.responseData?.iii_operations?.location || null
    );
    this.data.market_served_by_entity = this.responseData?.iii_operations
      ?.market_served_by_entity
      ? this._utilities.nullToString(
          this.responseData?.iii_operations?.market_served_by_entity
        )
      : this.responseData?.iii_operations?.market_served_by_entity;
    if (this.companyOperationComponent) {
      this.companyOperationComponent.initialize();
    }
    //Operations ends

    //Employees starts
    this.data.employees_and_worker = this._utilities.nullToString(
      this.responseData?.iv_employees?.financial_year?.employees_and_worker ||
        null
    );
    this.data.diffrently_added_employees_and_worker = this._utilities.nullToString(
      this.responseData?.iv_employees?.financial_year
        ?.diffrently_added_employees_and_worker || null
    );
    this.data.participation_or_representation_of_women = this._utilities.nullToString(
      this.responseData?.iv_employees
        ?.participation_or_representation_of_women || null
    );
    this.data.turnover_rate_for_permanent_employees_and_workers = this._utilities.nullToString(
      this.responseData?.iv_employees
        ?.turnover_rate_for_permanent_employees_and_workers || null
    );
    if (this.companyEmployeesComponent) {
      this.companyEmployeesComponent.initialize();
    }
    //Employees ends

    //Holding starts
    this.data.v_associate_companies =
      this.responseData?.v_associate_companies || [];

    if (this.holdingSubsidiaryComponent) {
      this.holdingSubsidiaryComponent.initialize();
    }
    //Holding ends

    //CSR starts
    this.data.is_csr_applicable =
      this.responseData?.vi_csr_details?.is_csr_applicable || "";

    this.data.turnover_in_rs =
      this.responseData?.vi_csr_details?.turnover_in_rs || "";

    this.data.net_worth = this.responseData?.vi_csr_details?.net_worth || "";

    if (this.csrDetailsComponent) this.csrDetailsComponent.initialize();
    //CSR ends

    //Transparency starts
    this.data.stakeholder_group = this._utilities.nullToString(
      this.responseData?.vii_transparency_and_disclosures_ompliances
        ?.national_guidelines_on_responsible_business_conduct?.stakeholder_group
    );

    this.data.business_conduct_issues =
      this.responseData?.vii_transparency_and_disclosures_ompliances
        ?.business_conduct_issues || [];

    if (this.transparencyCompliancesComponent)
      this.transparencyCompliancesComponent.initialize();
  }

  checkForInvalidNumbers(data) {
    let invalid = false;
    data.filter((n) => {
      if ((typeof n != "boolean" && isNaN(n)) || n.length != 10) {
        invalid = true;
      }
    });

    return invalid;
  }

  validateCompanyForm() {
    if (!this.data?.contact_number) {
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: "Please fill Contact Number",
      };
      return false;
    }
    if (!this.data?.company_name) {
      this.showAlert = true;

      this.alert = {
        type: "error",
        message: "Please fill Company Name",
      };
      return false;
    }
    if (!this.data?.emai_id) {
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: "Please fill Email",
      };
      return false;
    }
    if (!this.data?.corporate_identity_number) {
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: "Please fill Corporate Identity Number",
      };
      return false;
    }
    if (
      this.data?.registered_office_address &&
      this.data?.registered_office_address.length < 6
    ) {
      this.showAlert = true;

      this.alert = {
        type: "error",
        message:
          "Registered office address length must be at least 6 characters long",
      };
      return false;
    }
    if (
      this.data?.corporate_office_address &&
      this.data?.corporate_office_address.length < 6
    ) {
      this.showAlert = true;

      this.alert = {
        type: "error",
        message:
          "Corporate office address length must be at least 6 characters long",
      };
      return false;
    }
    if (
      this.data?.contact_number &&
      this.data?.contact_number.length > 0 &&
      this.checkForInvalidNumbers(this.data?.contact_number)
    ) {
      this.showAlert = true;

      this.alert = {
        type: "error",
        message: "Invalid Contact number(must be all numbers with 10 digits)",
      };
      return false;
    }
    if (
      this.data?.stock_exchange_name &&
      this.data?.stock_exchange_name.length < 3
    ) {
      this.showAlert = true;

      this.alert = {
        type: "error",
        message:
          "Stock office address length must be at least 3 characters long",
      };
      return false;
    }

    if (this.data?.contact_details && this.data?.contact_details.length > 0) {
      let invalidNumber = false;

      this.data?.contact_details.filter((e) => {
        if (
          e?.contact_number &&
          e?.contact_number.length &&
          this.checkForInvalidNumbers(e?.contact_number)
        )
          invalidNumber = true;
      });
      if (invalidNumber) {
        this.showAlert = true;

        this.alert = {
          type: "error",
          message:
            "Invalid Contact number in new contacts (must be all numbers with 10 digits)",
        };
        return false;
      }
    }
    return true;
  }

  calledFromParent() {
    const promise = new Promise((resolve, reject) => {
      let res;
      res = this.listedEntityComponent.getObject();
      this.data = {
        ...this.data,
        ...res,
      };
      this.finalData = { ...this.finalData, ...res };

      res = this.productServicesComponent.getObject();
      this.data = {
        ...this.data,
        ...res,
      };
      this.finalData = {
        ...this.finalData,
        ...{ ii_products_and_services: res },
      };

      res = this.companyOperationComponent.getObject();
      this.data = {
        ...this.data,
        ...res,
      };
      this.finalData = {
        ...this.finalData,
        ...{ iii_operations: res },
      };

      res = this.companyEmployeesComponent.getObject();
      this.data = {
        ...this.data,
        ...res,
      };
      this.finalData = {
        ...this.finalData,
        ...{
          iv_employees: {
            financial_year: {
              employees_and_worker: res?.employees_and_worker,
              diffrently_added_employees_and_worker:
                res?.diffrently_added_employees_and_worker,
            },
            participation_or_representation_of_women:
              res?.participation_or_representation_of_women,
            turnover_rate_for_permanent_employees_and_workers:
              res?.turnover_rate_for_permanent_employees_and_workers,
          },
        },
      };

      res = this.holdingSubsidiaryComponent.getObject();
      this.data = {
        ...this.data,
        ...res,
      };
      this.finalData = { ...this.finalData, ...res };

      res = this.csrDetailsComponent.getObject();
      this.data = {
        ...this.data,
        ...res,
      };
      this.finalData = {
        ...this.finalData,
        ...{ vi_csr_details: res },
      };

      res = this.transparencyCompliancesComponent.getObject();
      this.data = {
        ...this.data,
        ...res,
      };
      this.finalData = {
        ...this.finalData,
        ...{
          vii_transparency_and_disclosures_ompliances: {
            national_guidelines_on_responsible_business_conduct: {
              stakeholder_group: res?.stakeholder_group,
            },
            business_conduct_issues: res?.business_conduct_issues,
          },
        },
      };
      this.finalData = this._utilities.removeBlankElements(this.finalData);

      if (!this.validateCompanyForm()) {
        this.clearToast();
        return;
      }

      this.finalData[
        "financial_start_date"
      ] = this._utilities?.financialStartDate;
      this.finalData["financial_end_date"] = this._utilities?.financialEndDate;

      this._companyProfileService.addCompany(this.finalData).subscribe(
        (response) => {
          this._changeDetectorRef.detectChanges();
          return resolve({ data: this.finalData, formName: "Section A" });
        },
        (err) => {
          console.log(err);

          return reject(0);
        }
      );
    });
    return promise;
  }
  clearToast() {
    setTimeout(() => {
      this.showAlert = false;
      this._changeDetectorRef.detectChanges();
    }, 3000);
  }
  callBackFunction(e) {}
}
