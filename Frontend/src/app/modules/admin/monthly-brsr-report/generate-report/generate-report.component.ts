import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Inject,
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { CompanyProfileService } from "../../../../providers/company-profile.service";
import { PrinciplesService } from "../../../../providers/principles.service";

import jsPDF from "jspdf";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from "html-to-pdfmake";

//Child component
import { ReportListedEntityComponent } from "../../generate-brsr-report/company-profile/report-listed-entity/report-listed-entity.component";
import { ProductServicesReportComponent } from "../../generate-brsr-report/company-profile/product-services-report/product-services-report.component";
import { OperationsToTransparencyComponent } from "../../generate-brsr-report/company-profile/operations-to-transparency/operations-to-transparency.component";
import { SectionBReportComponent } from "../../generate-brsr-report/section-b/section-b-report.component";
import { PrincipleOneComponent } from "../../generate-brsr-report/principle-one/principle-one.component";
import { PrincipleTwoComponent } from "../../generate-brsr-report/principle-two/principle-two.component";
import { PrincipleThreeOneToEightComponent } from "../../generate-brsr-report/principle-three/one-nine/principle-three-one-to-eight.component";
import { TenFifteenLeaderAllComponent } from "../../generate-brsr-report/principle-three/ten-fifteen-leader-all/ten-fifteen-leader-all.component";
import { PrincipleFourComponent } from "../../generate-brsr-report/principle-four/principle-four.component";
import { PrincipleFiveComponent } from "../../generate-brsr-report/principle-five/principle-five.component";
import { PrincipleViIToVComponent } from "../../generate-brsr-report/principle-six/principle-vi-i-to-v/principle-vi-i-to-v.component";
import { PrincipleViViToXComponent } from "../../generate-brsr-report/principle-six/principle-vi-vi-to-x/principle-vi-vi-to-x.component";
import { PrincipleSixElevenToAllComponent } from "../../generate-brsr-report/principle-six/principle-six-eleven-to-all/principle-six-eleven-to-all.component";
import { PrincipleSevenComponent } from "../../generate-brsr-report/principle-seven/principle-seven.component";
import { PrincipleEightComponent } from "../../generate-brsr-report/principle-eight/principle-eight.component";
import { PrincipleNineComponent } from "../../generate-brsr-report/principle-nine/principle-nine.component";
@Component({
  selector: "app-generate-report",
  templateUrl: "./generate-report.component.html",
  styleUrls: ["./generate-report.component.scss"],
})
export class GenerateReportComponent implements OnInit {
  @ViewChild(ReportListedEntityComponent)
  listedEntityComponent: ReportListedEntityComponent;
  @ViewChild(ProductServicesReportComponent)
  productServicesReportComponent: ProductServicesReportComponent;
  @ViewChild(OperationsToTransparencyComponent)
  operationsToTransparencyComponent: OperationsToTransparencyComponent;
  @ViewChild(SectionBReportComponent)
  sectionBReportComponent: SectionBReportComponent;
  @ViewChild(PrincipleOneComponent)
  principleOneComponent: PrincipleOneComponent;
  @ViewChild(PrincipleTwoComponent)
  principleTwoComponent: PrincipleTwoComponent;
  @ViewChild(PrincipleThreeOneToEightComponent)
  principleThreeComponent: PrincipleThreeOneToEightComponent;
  @ViewChild(TenFifteenLeaderAllComponent)
  tenFifteenComponent: TenFifteenLeaderAllComponent;
  @ViewChild(PrincipleFourComponent)
  principleFourComponent: PrincipleFourComponent;
  @ViewChild(PrincipleFiveComponent)
  principleFiveComponent: PrincipleFourComponent;
  @ViewChild(PrincipleViIToVComponent)
  principleViIToVComponent: PrincipleViIToVComponent;
  @ViewChild(PrincipleViViToXComponent)
  principleViViToXComponent: PrincipleViViToXComponent;
  @ViewChild(PrincipleSixElevenToAllComponent)
  principleSixElevenToAllComponent: PrincipleSixElevenToAllComponent;
  @ViewChild(PrincipleSevenComponent)
  principleSevenComponent: PrincipleSevenComponent;
  @ViewChild(PrincipleEightComponent)
  principleEightComponent: PrincipleEightComponent;
  @ViewChild(PrincipleNineComponent)
  principleNineComponent: PrincipleNineComponent;

  @ViewChild("pdfTable") pdfTable: ElementRef;
  report_year: string = "";
  disableBtn: boolean = false;
  financialStartDate: string = this._utilities.selectedFinancialYear + "-01-01";
  financialEndDate: string = this._utilities.previousFinancialYear + "-01-01";
  title = "BRSR Report";
  responseData: any = {};
  data: any = {};
  sectionBData: any = {};
  pOneData: any = {};
  pTwoData: any = {};
  pThreeData: any = {};
  pFourData: any = {};
  pFiveData: any = {};
  pSixData: any = {};
  pSevenData: any = {};
  pEightData: any = {};
  pNineData: any = {};
  selectedMonth: string = "2";
  allYears: any[] = [];
  error1: string = "";
  selectedYear: string = "2023";
  allMonths: any[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  error2: string = "";
  selectedForms: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private _changeDetectorRef: ChangeDetectorRef,
    public _utilities: CommonFunctionsService,
    private _companyProfileService: CompanyProfileService,
    private _principlesService: PrinciplesService,
    private _activatedRoute: ActivatedRoute
  ) {
    const d = new Date();
    let year = d.getFullYear();
    for (let i = year; i >= 1950; i--) this.allYears.push(i);
    this.selectedForms = this.modalData?.details?.selectedform;
  }

  ngOnInit(): void {
    this._utilities.callRedirectLoader();
    this.modalData?.details?.formData.filter((e) => {
      this.setData(e);
    });
    this.downloadAsPDF();
  }

  isDisplay(formName) {
    return this.selectedForms.includes(formName);
  }

  setData(eachFormData) {
    this._utilities.loaderOn();
    if (eachFormData?.formName == "Section A") {
      this.responseData = eachFormData?.data || {};
      this.setSectionA();
    } else if (eachFormData?.formName == "Section B") {
      this.sectionBData = eachFormData?.data || {};
      this._changeDetectorRef.detectChanges();
      this.sectionBReportComponent.initialize();
    } else if (eachFormData?.formName == "Principle 1") {
      this.pOneData = eachFormData?.data || {};
      this._changeDetectorRef.detectChanges();
      this.principleOneComponent.initialize();
    } else if (eachFormData?.formName == "Principle 2") {
      this.pTwoData = eachFormData?.data || {};
      this._changeDetectorRef.detectChanges();
      this.principleTwoComponent.initialize();
    } else if (eachFormData?.formName == "Principle 3") {
      this.pThreeData = eachFormData?.data || {};
      this._changeDetectorRef.detectChanges();
      this.principleThreeComponent.initialize();
      this.tenFifteenComponent.initialize();
    } else if (eachFormData?.formName == "Principle 4") {
      this.pFourData = eachFormData?.data || {};
      this._changeDetectorRef.detectChanges();
      this.principleFourComponent.initialize();
    } else if (eachFormData?.formName == "Principle 5") {
      this.pFiveData = eachFormData?.data || {};
      this._changeDetectorRef.detectChanges();
      this.principleFiveComponent.initialize();
    } else if (eachFormData?.formName == "Principle 6") {
      this.pSixData = eachFormData?.data || {};
      this._changeDetectorRef.detectChanges();
      this.principleViIToVComponent.initialize();
      this.principleViViToXComponent.initialize();
      this.principleSixElevenToAllComponent.initialize();
    } else if (eachFormData?.formName == "Principle 7") {
      this.pSevenData = eachFormData?.data || {};
      this._changeDetectorRef.detectChanges();
      this.principleSevenComponent.initialize();
    } else if (eachFormData?.formName == "Principle 8") {
      this.pEightData = eachFormData?.data || {};
      this._changeDetectorRef.detectChanges();
      this.principleEightComponent.initialize();
    } else if (eachFormData?.formName == "Principle 9") {
      this.pNineData = eachFormData?.data || {};
      this._changeDetectorRef.detectChanges();
      this.principleNineComponent.initialize();
    }
    this._changeDetectorRef.detectChanges();
    this._utilities.loaderOff();

    this.disableBtn = false;
  }

  setSectionA() {
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

    //services starts
    this.data.business_activity =
      this.responseData?.ii_products_and_services?.business_activity || [];
    this.data.products_services_sold_by_the_entity =
      this.responseData?.ii_products_and_services
        ?.products_services_sold_by_the_entity || [];

    if (this.productServicesReportComponent)
      this.productServicesReportComponent.initialize();
    //services ends

    //operations to starts
    this.data.location = this.responseData?.iii_operations?.location || {};
    this.data.market_served_by_entity =
      this.responseData?.iii_operations?.market_served_by_entity || {};
    //operations to end

    //Employee to starts
    this.data.employees_and_worker =
      this.responseData?.iv_employees?.financial_year?.employees_and_worker ||
      {};
    this.data.diffrently_added_employees_and_worker =
      this.responseData?.iv_employees?.financial_year
        ?.diffrently_added_employees_and_worker || {};

    this.data.participation_or_representation_of_women =
      this.responseData?.iv_employees
        ?.participation_or_representation_of_women || {};
    this.data.turnover_rate_for_permanent_employees_and_workers =
      this.responseData?.iv_employees
        ?.turnover_rate_for_permanent_employees_and_workers || {};
    //Employee to ends

    //holdings
    this.data.v_associate_companies = this.responseData?.v_associate_companies;

    //csr
    this.data.is_csr_applicable =
      this.responseData?.vi_csr_details?.is_csr_applicable || "";
    this.data.turnover_in_rs =
      this.responseData?.vi_csr_details?.turnover_in_rs || "";
    this.data.net_worth = this.responseData?.vi_csr_details?.net_worth || "";

    //transparency
    this.data.stakeholder_group =
      this.responseData?.vii_transparency_and_disclosures_ompliances
        ?.national_guidelines_on_responsible_business_conduct
        ?.stakeholder_group || {};

    this.data.business_conduct_issues =
      this.responseData?.vii_transparency_and_disclosures_ompliances
        ?.business_conduct_issues || "";

    if (this.operationsToTransparencyComponent)
      this.operationsToTransparencyComponent.initialize();
  }

  getMonth(m) {
    if (!m) {
      return "";
    }
    return this.allMonths[m - 1];
  }

  downloadAsPDF() {
    const doc = new jsPDF();

    const pdfTable = this.pdfTable.nativeElement;

    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = {
      content: html,
      styles: {},
    };
    let pdfName =
      "brsr_report_" +
      this.getMonth(this.selectedMonth) +
      "_" +
      this.selectedYear +
      ".pdf";
    pdfMake.createPdf(documentDefinition).download(pdfName);
  }
}
