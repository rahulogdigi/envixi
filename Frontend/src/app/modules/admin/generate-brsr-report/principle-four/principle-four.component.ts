import { Component, OnInit, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-four",
  templateUrl: "./principle-four.component.html",
  styleUrls: ["./principle-four.component.scss"],
})
export class PrincipleFourComponent implements OnInit {
  @Input() data: any = {};

  describe_the_processes_for_identifying_key_stakeholder_groups_of_the_entity: string =
    "";
  list_stakeholder_groups: any = [];
  provide_the_processes_for_consultation_between_stakeholders_and_the_board: string =
    "";

  whether_stakeholder_consultation_is_used_to_support_the_identification: string =
    "";
  provide_details_of_instances_of_engagement: string = "";
  constructor() {}

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.describe_the_processes_for_identifying_key_stakeholder_groups_of_the_entity =
      this.data?.essential_indicators
        ?.describe_the_processes_for_identifying_key_stakeholder_groups_of_the_entity ||
      "";

    this.list_stakeholder_groups = this.data?.essential_indicators
      ?.list_stakeholder_groups || [
      {
        stakeholder_group: "",
        whether_identified_as_vulnerable: "",
        channel_of_the_communication: "",
        frequency_of_the_engagement: "",
        purpose_and_scope_of_engagement_including_key: "",
      },
    ];

    this.provide_the_processes_for_consultation_between_stakeholders_and_the_board =
      this.data?.leadership_indicators
        ?.provide_the_processes_for_consultation_between_stakeholders_and_the_board ||
      "";

    this.whether_stakeholder_consultation_is_used_to_support_the_identification =
      this.data?.leadership_indicators
        ?.whether_stakeholder_consultation_is_used_to_support_the_identification ||
      "";

    this.provide_details_of_instances_of_engagement =
      this.data?.leadership_indicators
        ?.provide_details_of_instances_of_engagement || "";
  }
}
