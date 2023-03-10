import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input,
} from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";

@Component({
  selector: "app-section-b-report",
  templateUrl: "./section-b-report.component.html",
  styleUrls: ["./section-b-report.component.scss"],
})
export class SectionBReportComponent implements OnInit {
  @Input() data: any = {};
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
  constructor(public _utilities: CommonFunctionsService) {}
  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.policy_and_management_process = this.data?.policy_and_management_process;
    this.seven = this.data?.governance_leadership_and_oversight?.seven || "--";
    this.eight = this.data?.governance_leadership_and_oversight?.eight || "--";
    this.nine = this.data?.governance_leadership_and_oversight?.nine || "--";
    this.conditionCheck =
      this.nine == "No" ? "No" : this.nine.length ? "Yes" : "--";
    //Details of Review of NGRBCs by the Company

    this.ten = this.data?.governance_leadership_and_oversight?.ten || "--";
    this.eleven =
      this.data?.governance_leadership_and_oversight?.eleven || "--";
    this.tweleve =
      this.data?.governance_leadership_and_oversight?.tweleve || "--";
  }
  showTable() {
    let flag = false;
    if (
      this.policy_and_management_process?.one_a?.p1 === false &&
      this.policy_and_management_process?.one_a?.p2 === false &&
      this.policy_and_management_process?.one_a?.p3 === false &&
      this.policy_and_management_process?.one_a?.p4 === false &&
      this.policy_and_management_process?.one_a?.p5 === false &&
      this.policy_and_management_process?.one_a?.p6 === false &&
      this.policy_and_management_process?.one_a?.p7 === false &&
      this.policy_and_management_process?.one_a?.p8 === false &&
      this.policy_and_management_process?.one_a?.p9 === false
    ) {
      flag = true;
    }
    return flag;
  }
}
