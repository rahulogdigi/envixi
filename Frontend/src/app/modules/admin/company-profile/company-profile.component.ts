import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDrawer } from "@angular/material/sidenav";
import { Subject, takeUntil } from "rxjs";
import { fuseAnimations } from "@fuse/animations";
import { FuseMediaWatcherService } from "@fuse/services/media-watcher";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { CompanyProfileService } from "../../../providers/company-profile.service";

//Child component
import { ListedEntityComponent } from "./listed-entity/listed-entity.component";
import { ProductServicesComponent } from "./product-services/product-services.component";
import { CompanyOperationComponent } from "./company-operation/company-operation.component";
import { CompanyEmployeesComponent } from "./company-employees/company-employees.component";
import { HoldingSubsidiaryComponent } from "./holding-subsidiary/holding-subsidiary.component";
import { CsrDetailsComponent } from "./csr-details/csr-details.component";
import { TransparencyCompliancesComponent } from "./transparency-compliances/transparency-compliances.component";
import { AuthService } from "app/core/auth/auth.service";
@Component({
  selector: "company-profile",
  templateUrl: "./company-profile.component.html",
  styleUrls: ["company-profile.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: fuseAnimations,
})
export class CompanyProfileComponent implements OnInit, OnDestroy {
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

  @ViewChild("drawer") drawer: MatDrawer;
  moduleId: string = "63d5583d164bb0415e42c8ac";
  drawerMode: "over" | "side" = "side";
  drawerOpened: boolean = true;
  panels: any[] = [];
  selectedPanel: string = "listedEntity";
  previousPanel: string = "listedEntity";
  data: any = {};
  finalData: any = {};
  alert: any = {};
  showAlert: boolean = false;
  editId: string = "";
  responseData: any = {};
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseMediaWatcherService: FuseMediaWatcherService,
    public _utilities: CommonFunctionsService,
    private _companyProfileService: CompanyProfileService,
    private _router: Router,
    private route: ActivatedRoute,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    // Setup available panels
    let user = JSON.parse(this._authService.userData);
    if (user?.role == "Employee") this._router.navigateByUrl("/dashboard");
    this._utilities.callRedirectLoader();
    //this.getPrinciple();
    this.panels = [
      {
        id: "listedEntity",
        icon: "heroicons_outline:user-circle",
        title: "Details of the listed entity",
        description: "",
      },
      {
        id: "productServices",
        icon: "heroicons_outline:user-group",
        title: "Products/services",
        description: "",
      },
      {
        id: "operations",
        icon: "heroicons_outline:user-group",
        title: "Operations",
        description: "",
      },
      {
        id: "employees",
        icon: "heroicons_outline:user-group",
        title: "Employees",
        description: "",
      },
      {
        id: "holdingSubsidiary",
        icon: "heroicons_outline:user-group",
        title:
          "Holding, Subsidiary and Associate Companies (including joint ventures)",
        description: "",
      },
      {
        id: "csrDetails",
        icon: "heroicons_outline:user-group",
        title: "CSR Details",
        description: "",
      },
      {
        id: "transparencyCompliances",
        icon: "heroicons_outline:user-group",
        title: "Transparency and Disclosures Compliances",
        description: "",
      },
    ];

    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {
        // Set the drawerMode and drawerOpened
        if (matchingAliases.includes("lg")) {
          this.drawerMode = "side";
          this.drawerOpened = true;
        } else {
          this.drawerMode = "over";
          this.drawerOpened = false;
        }

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
    this.panels.filter((e) => {
      this.selectedPanel = e.id;
      this._changeDetectorRef.detectChanges();
    });
    this.selectedPanel = "listedEntity";
    this._changeDetectorRef.detectChanges();
    this.route.params.subscribe((params) => {
      this.editId = params?.id || "";
      if (this.editId) this.getPrinciple();
    });
  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  getPrinciple() {
    this._utilities.loaderOn();
    this._companyProfileService
      .getSingleCompany({
        company_id: this.editId,
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
    //entity starts
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
    //entity ends

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
    if (this.companyOperationComponent)
      this.companyOperationComponent.initialize();
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
    if (this.companyEmployeesComponent)
      this.companyEmployeesComponent.initialize();
    //Employees ends

    //Holding starts
    this.data.v_associate_companies =
      this.responseData?.v_associate_companies || [];

    if (this.holdingSubsidiaryComponent)
      this.holdingSubsidiaryComponent.initialize();
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
    //Transparency ends
    this.panels.filter((e) => {
      this.selectedPanel = e.id;
      this._changeDetectorRef.detectChanges();
    });
    this.selectedPanel = "listedEntity";
    this._changeDetectorRef.detectChanges();
  }
  goToPanel(panel: string): void {
    this.selectedPanel = panel;

    // Close the drawer on 'over' mode
    if (this.drawerMode === "over") {
      this.drawer.close();
    }
  }

  /**
   * Get the details of the panel
   *
   * @param id
   */
  getPanelInfo(id: string): any {
    return this.panels.find((panel) => panel.id === id);
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
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

  callBackFunction(e) {
    if (e?.type) {
      this.showMsg(e);
      return;
    }

    this.data = {
      ...this.data,
      ...e?.data,
    };
    if (this.previousPanel == "productServices") {
      this.finalData = {
        ...this.finalData,
        ...{ ii_products_and_services: e?.data },
      };
    } else if (this.previousPanel == "operations") {
      this.finalData = {
        ...this.finalData,
        ...{ iii_operations: e?.data },
      };
    } else if (this.previousPanel == "employees") {
      this.finalData = {
        ...this.finalData,
        ...{
          iv_employees: {
            financial_year: {
              employees_and_worker: e?.data?.employees_and_worker,
              diffrently_added_employees_and_worker:
                e?.data?.diffrently_added_employees_and_worker,
            },
            participation_or_representation_of_women:
              e?.data?.participation_or_representation_of_women,
            turnover_rate_for_permanent_employees_and_workers:
              e?.data?.turnover_rate_for_permanent_employees_and_workers,
          },
        },
      };
    } else if (this.previousPanel == "transparencyCompliances") {
      this.finalData = {
        ...this.finalData,
        ...{
          vii_transparency_and_disclosures_ompliances: {
            national_guidelines_on_responsible_business_conduct: {
              stakeholder_group: e?.data?.stakeholder_group,
            },
            business_conduct_issues: e?.data?.business_conduct_issues,
          },
        },
      };
    } else if (this.previousPanel == "csrDetails") {
      this.finalData = {
        ...this.finalData,
        ...{ vi_csr_details: e?.data },
      };
    } else {
      this.finalData = { ...this.finalData, ...e?.data };
    }
    this.previousPanel = this.selectedPanel;

    if (e?.submit && !this.validateCompanyForm()) {
      this.clearToast();
    } else if (e?.submit) {
      this.finalData = this._utilities.removeBlankElements(this.finalData);
      this.finalData[
        "financial_start_date"
      ] = this._utilities?.financialStartDate;
      this.finalData["financial_end_date"] = this._utilities?.financialEndDate;

      this._utilities.loaderOn();
      this._companyProfileService.addCompany(this.finalData).subscribe(
        (response) => {
          this.showAlert = true;
          this.alert = {
            type: "success",
            message: "Company Created Successfully",
          };
          this._changeDetectorRef.detectChanges();
          this.clearToast();
          this.getAllCountry();
        },
        (err) => {
          this._utilities.loaderOff();
          console.log(err);
        }
      );
    }
  }
  clearToast() {
    setTimeout(() => {
      this.showAlert = false;
      this._changeDetectorRef.detectChanges();
    }, 3000);
  }
  showMsg(data) {
    this.showAlert = true;
    this.alert = {
      type: data?.type,
      message: data?.message,
    };
    this._changeDetectorRef.detectChanges();
    this.clearToast();
  }
  getAllCountry() {
    this._companyProfileService.getAllCompany().subscribe(
      (response) => {
        this._utilities.loaderOff();
        this._utilities.initialize();
        if (!this.editId) this._router.navigateByUrl("/dashboard");
      },
      (err) => {
        this._utilities.loaderOff();
        //this._router.navigateByUrl("/dashboard");
        console.log(err);
      }
    );
  }
}
