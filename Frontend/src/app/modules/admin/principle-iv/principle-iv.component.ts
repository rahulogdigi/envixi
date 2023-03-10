import { Component, OnInit } from "@angular/core";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { PrinciplesService } from "../../../providers/principles.service";
import { registerLocaleData } from "@angular/common";
@Component({
  selector: "app-principle-iv",
  templateUrl: "./principle-iv.component.html",
  styleUrls: ["./principle-iv.component.scss"],
})
export class PrincipleIvComponent implements OnInit {
  alert: any = {};
  showAlert: boolean = false;
  moduleId: string = "63d55dc6164bb0415e42cf79";
  describe_the_processes_for_identifying_key_stakeholder_groups_of_the_entity: string =
    "";
  list_stakeholder_groups: any = [
    {
      stakeholder_group: "",
      whether_identified_as_vulnerable: "",
      channel_of_the_communication: "",
      frequency_of_the_engagement: "",
      purpose_and_scope_of_engagement_including_key: "",
    },
  ];
  provide_the_processes_for_consultation_between_stakeholders_and_the_board: string =
    "";
  is_whether_stakeholder_consultation_is_used_to_support_the_identification: any =
    "";
  whether_stakeholder_consultation_is_used_to_support_the_identification: string =
    "";
  provide_details_of_instances_of_engagement: string = "";

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
        form_type: "principal_four",
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          this.describe_the_processes_for_identifying_key_stakeholder_groups_of_the_entity =
            response?.data?.essential_indicators?.describe_the_processes_for_identifying_key_stakeholder_groups_of_the_entity;

          this.list_stakeholder_groups = this._utilities.arrayNullToString(
            response?.data?.essential_indicators?.list_stakeholder_groups
          );
          this.provide_the_processes_for_consultation_between_stakeholders_and_the_board =
            response?.data?.leadership_indicators?.provide_the_processes_for_consultation_between_stakeholders_and_the_board;

          this.whether_stakeholder_consultation_is_used_to_support_the_identification =
            response?.data?.leadership_indicators?.whether_stakeholder_consultation_is_used_to_support_the_identification;

          this.is_whether_stakeholder_consultation_is_used_to_support_the_identification =
            this
              .whether_stakeholder_consultation_is_used_to_support_the_identification ==
            "No"
              ? "No"
              : this
                  .whether_stakeholder_consultation_is_used_to_support_the_identification
                  .length
              ? "Yes"
              : "";

          this.provide_details_of_instances_of_engagement =
            response?.data?.leadership_indicators?.provide_details_of_instances_of_engagement;
          console.log(response);
        },
        (err) => {
          this.resetData();
          console.log(err);
        }
      );
  }

  resetData() {
    this.describe_the_processes_for_identifying_key_stakeholder_groups_of_the_entity =
      "";
    this.list_stakeholder_groups = [
      {
        stakeholder_group: "",
        whether_identified_as_vulnerable: "",
        channel_of_the_communication: "",
        frequency_of_the_engagement: "",
        purpose_and_scope_of_engagement_including_key: "",
      },
    ];
    this.provide_the_processes_for_consultation_between_stakeholders_and_the_board =
      "";
    this.is_whether_stakeholder_consultation_is_used_to_support_the_identification =
      "";
    this.whether_stakeholder_consultation_is_used_to_support_the_identification =
      "";
    this.provide_details_of_instances_of_engagement = "";
  }

  addField() {
    let flag = 1;
    this.list_stakeholder_groups.filter((e) => {
      if (
        e?.stakeholder_group.trim().length == 0 ||
        e?.whether_identified_as_vulnerable === "" ||
        e?.channel_of_the_communication.trim().length == 0 ||
        e?.frequency_of_the_engagement === "" ||
        e?.purpose_and_scope_of_engagement_including_key.trim().length == 0
      )
        flag = 0;
    });
    if (flag == 0) {
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: "Please fill all fields of Essential Indicators point 1",
      };
      this.closeAlert();
      return;
    }
    if (this.list_stakeholder_groups.length < 15)
      this.list_stakeholder_groups.push({
        stakeholder_group: "",
        whether_identified_as_vulnerable: "",
        channel_of_the_communication: "",
        frequency_of_the_engagement: "",
        purpose_and_scope_of_engagement_including_key: "",
      });
  }
  removeField(i) {
    if (this.list_stakeholder_groups.length > 1)
      this.list_stakeholder_groups.splice(i, 1);
  }
  onChangeSelect() {
    this.whether_stakeholder_consultation_is_used_to_support_the_identification =
      this
        .is_whether_stakeholder_consultation_is_used_to_support_the_identification !=
      "No"
        ? ""
        : "No";
  }
  submitForm() {
    let obj = {
      company_id: this._utilities.selectedCompany?.company_id,
      financial_start_date: this._utilities?.financialStartDate,
      financial_end_date: this._utilities?.financialEndDate,
      essential_indicators: {
        describe_the_processes_for_identifying_key_stakeholder_groups_of_the_entity: this
          .describe_the_processes_for_identifying_key_stakeholder_groups_of_the_entity,
        list_stakeholder_groups: this.list_stakeholder_groups.filter(
          (e) => e.stakeholder_group.length > 0
        ),
      },
      leadership_indicators: {
        provide_the_processes_for_consultation_between_stakeholders_and_the_board: this
          .provide_the_processes_for_consultation_between_stakeholders_and_the_board,
        whether_stakeholder_consultation_is_used_to_support_the_identification: this
          .whether_stakeholder_consultation_is_used_to_support_the_identification,
        provide_details_of_instances_of_engagement: this
          .provide_details_of_instances_of_engagement,
      },
    };
    let finalObj = this._utilities.removeBlankElements(obj);
    console.log(finalObj);
    this._utilities.loaderOn();
    this._principlesService.addPrinciple4(finalObj).subscribe(
      (response) => {
        this._utilities.loaderOff();
        console.log(response);
        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Principle 4 Form Submitted Successfully",
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
