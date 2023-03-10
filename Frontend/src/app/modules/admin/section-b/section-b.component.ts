import { Component, ViewEncapsulation } from "@angular/core";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { CompanyProfileService } from "../../../providers/company-profile.service";
import { PrinciplesService } from "../../../providers/principles.service";
@Component({
  selector: "section-b",
  styleUrls: ["section-b.component.scss"],
  templateUrl: "./section-b.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class SectionBComponent {
  alert: any = {};
  showAlert: boolean = false;
  moduleId: string = "63d55bf4164bb0415e42cd34";
  policy_and_management_process: any = {
    one_a: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
    one_b: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
    one_c: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
    two: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
    three: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
    four: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
    five: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
    six: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
  };
  conditionCheck: string = "";
  seven: string = "";
  eight: string = "";
  nine: string = "";
  ten: any = {
    performance_against_above_policies_and_follow_up_action: {
      indicate_whether_review_was_undertaken_by_director: {
        p1: "",
        p1_other: "",
        p2: "",
        p2_other: "",
        p3: "",
        p3_other: "",
        p4: "",
        p4_other: "",
        p5: "",
        p5_other: "",
        p6: "",
        p6_other: "",
        p7: "",
        p7_other: "",
        p8: "",
        p8_other: "",
        p9: "",
        p9_other: "",
      },
      frequency: {
        p1: "",
        p1_other: "",
        p2: "",
        p2_other: "",
        p3: "",
        p3_other: "",
        p4: "",
        p4_other: "",
        p5: "",
        p5_other: "",
        p6: "",
        p6_other: "",
        p7: "",
        p7_other: "",
        p8: "",
        p8_other: "",
        p9: "",
        p9_other: "",
      },
    },
    compliance_with_statutory_requirements: {
      indicate_whether_review_was_undertaken_by_director: {
        p1: "",
        p1_other: "",
        p2: "",
        p2_other: "",
        p3: "",
        p3_other: "",
        p4: "",
        p4_other: "",
        p5: "",
        p5_other: "",
        p6: "",
        p6_other: "",
        p7: "",
        p7_other: "",
        p8: "",
        p8_other: "",
        p9: "",
        p9_other: "",
      },
      frequency: {
        p1: "",
        p1_other: "",
        p2: "",
        p2_other: "",
        p3: "",
        p3_other: "",
        p4: "",
        p4_other: "",
        p5: "",
        p5_other: "",
        p6: "",
        p6_other: "",
        p7: "",
        p7_other: "",
        p8: "",
        p8_other: "",
        p9: "",
        p9_other: "",
      },
    },
  };
  eleven: any = {
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: "",
    p9: "",
    name_of_agency_p1: "",
    name_of_agency_p2: "",
    name_of_agency_p3: "",
    name_of_agency_p4: "",
    name_of_agency_p5: "",
    name_of_agency_p6: "",
    name_of_agency_p7: "",
    name_of_agency_p8: "",
    name_of_agency_p9: "",
  };
  tweleve: any = {
    the_entity_does_not_consider_the_principles_material_to_its_business: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
    position_to_formulate_and_implement_the_policies_on_specified_principles: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
    human_and_technical_resources_available_for_the_task: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
    it_is_planned_to_be_done_in_the_next_financial_year: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    },
    any_other_reason: "",
  };

  /**
   * Constructor
   */
  prevCompanyId: any = this._utilities.selectedCompany?.company_id;
  intervalId: any;
  constructor(
    public _utilities: CommonFunctionsService,
    private _companyProfileService: CompanyProfileService,
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
        form_type: "section_b",
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          let obj = {};
          obj = this._utilities.nullToString(
            response?.data?.policy_and_management_process
          );
          this.policy_and_management_process = obj;
          this.seven =
            response?.data?.governance_leadership_and_oversight?.seven || "";
          this.eight =
            response?.data?.governance_leadership_and_oversight?.eight || "";
          this.nine =
            response?.data?.governance_leadership_and_oversight?.nine || "";
          this.conditionCheck =
            this.nine == "No" ? "No" : this.nine.length ? "Yes" : "";
          //Details of Review of NGRBCs by the Company
          obj = this._utilities.nullToString(
            response?.data?.governance_leadership_and_oversight
          );
          this.ten = obj["ten"];
          this.eleven = obj["eleven"];
          this.tweleve = obj["tweleve"];
        },
        (err) => {
          this.resetData();
          console.log(err);
        }
      );
  }
  resetData() {
    this.policy_and_management_process = {
      one_a: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
      one_b: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
      one_c: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
      two: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
      three: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
      four: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
      five: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
      six: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
    };
    this.conditionCheck = "";
    this.seven = "";
    this.eight = "";
    this.nine = "";
    this.ten = {
      performance_against_above_policies_and_follow_up_action: {
        indicate_whether_review_was_undertaken_by_director: {
          p1: "",
          p1_other: "",
          p2: "",
          p2_other: "",
          p3: "",
          p3_other: "",
          p4: "",
          p4_other: "",
          p5: "",
          p5_other: "",
          p6: "",
          p6_other: "",
          p7: "",
          p7_other: "",
          p8: "",
          p8_other: "",
          p9: "",
          p9_other: "",
        },
        frequency: {
          p1: "",
          p1_other: "",
          p2: "",
          p2_other: "",
          p3: "",
          p3_other: "",
          p4: "",
          p4_other: "",
          p5: "",
          p5_other: "",
          p6: "",
          p6_other: "",
          p7: "",
          p7_other: "",
          p8: "",
          p8_other: "",
          p9: "",
          p9_other: "",
        },
      },
      compliance_with_statutory_requirements: {
        indicate_whether_review_was_undertaken_by_director: {
          p1: "",
          p1_other: "",
          p2: "",
          p2_other: "",
          p3: "",
          p3_other: "",
          p4: "",
          p4_other: "",
          p5: "",
          p5_other: "",
          p6: "",
          p6_other: "",
          p7: "",
          p7_other: "",
          p8: "",
          p8_other: "",
          p9: "",
          p9_other: "",
        },
        frequency: {
          p1: "",
          p1_other: "",
          p2: "",
          p2_other: "",
          p3: "",
          p3_other: "",
          p4: "",
          p4_other: "",
          p5: "",
          p5_other: "",
          p6: "",
          p6_other: "",
          p7: "",
          p7_other: "",
          p8: "",
          p8_other: "",
          p9: "",
          p9_other: "",
        },
      },
    };
    this.eleven = {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
      name_of_agency_p1: "",
      name_of_agency_p2: "",
      name_of_agency_p3: "",
      name_of_agency_p4: "",
      name_of_agency_p5: "",
      name_of_agency_p6: "",
      name_of_agency_p7: "",
      name_of_agency_p8: "",
      name_of_agency_p9: "",
    };
    this.tweleve = {
      the_entity_does_not_consider_the_principles_material_to_its_business: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
      position_to_formulate_and_implement_the_policies_on_specified_principles: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
      human_and_technical_resources_available_for_the_task: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
      it_is_planned_to_be_done_in_the_next_financial_year: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
      },
      any_other_reason: "",
    };
  }
  showTable() {
    let flag = false;
    if (
      this.policy_and_management_process.one_a.p1 === false &&
      this.policy_and_management_process.one_a.p2 === false &&
      this.policy_and_management_process.one_a.p3 === false &&
      this.policy_and_management_process.one_a.p4 === false &&
      this.policy_and_management_process.one_a.p5 === false &&
      this.policy_and_management_process.one_a.p6 === false &&
      this.policy_and_management_process.one_a.p7 === false &&
      this.policy_and_management_process.one_a.p8 === false &&
      this.policy_and_management_process.one_a.p9 === false
    ) {
      flag = true;
    }
    return flag;
  }

  onChangeSelect(mode) {
    if (mode == "nine") {
      this.nine = this.conditionCheck != "No" ? "" : "No";
    }
  }

  submitFormB() {
    let obj = {
      company_id: this._utilities.selectedCompany?.company_id,
      financial_start_date: this._utilities?.financialStartDate,
      financial_end_date: this._utilities?.financialEndDate,
      policy_and_management_process: this.policy_and_management_process,
      governance_leadership_and_oversight: {
        seven: this.seven,
        eight: this.eight,
        nine: this.nine,
        ten: this.ten,
        eleven: this.eleven,
        tweleve: this.tweleve,
      },
    };
    let finalObj = this._utilities.removeBlankElements(obj);
    this._utilities.loaderOn();
    this._companyProfileService.addSectionB(finalObj).subscribe(
      (response) => {
        this._utilities.loaderOff();
        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Section B Form Submitted Successfully",
        };
        this.closeAlert();
      },
      (err) => {
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
