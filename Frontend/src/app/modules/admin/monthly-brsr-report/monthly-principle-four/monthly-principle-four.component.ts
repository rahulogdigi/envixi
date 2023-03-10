import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { PrinciplesService } from "../../../../providers/principles.service";
import { registerLocaleData } from "@angular/common";
@Component({
  selector: "app-monthly-principle-four",
  templateUrl: "./monthly-principle-four.component.html",
  styleUrls: ["./monthly-principle-four.component.scss"],
})
export class MonthlyPrincipleFourComponent implements OnInit {
  @Input() startDate: any = "";
  @Input() endDate: any = "";
  @Input() branch_id: any = "";

  alert: any = {};
  showAlert: boolean = false;
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
  aggregatedObject: any = {
    list_stakeholder_groups: [],
  };
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
    this.getMonthData();
  }

  getMonthData() {
    this._principlesService
      .getMonthlySurveyData({
        company_id: this._utilities.selectedCompany?.company_id,
        form: 4,
        from_date: this.startDate,
        to_date: this.endDate,
        limit: 10,
        offset: 0,
        location_id: this.branch_id,
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          if (response?.status == 200) {
            response?.data.filter((e, i) => {
              this.aggregatedObject.list_stakeholder_groups = this.aggregatedObject.list_stakeholder_groups.concat(
                e?.essential_indicators?.list_stakeholder_groups || []
              );
            });
            this.aggregatedObject?.list_stakeholder_groups?.map((e) => {
              if (!e?.frequency_of_the_engagement)
                e.frequency_of_the_engagement = "";
              if (!e?.whether_identified_as_vulnerable)
                e.whether_identified_as_vulnerable = "";
            });

            this.list_stakeholder_groups =
              this.aggregatedObject?.list_stakeholder_groups || [];
          }
        },
        (err) => {
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
    const promise = new Promise((resolve, reject) => {
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

      this._principlesService.addPrinciple4(finalObj, true).subscribe(
        (response) => {
          return resolve({ data: finalObj, formName: "Principle 4" });
        },
        (err) => {
          console.log(err);

          return reject(0);
        }
      );
    });
    return promise;
  }
  closeAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}
