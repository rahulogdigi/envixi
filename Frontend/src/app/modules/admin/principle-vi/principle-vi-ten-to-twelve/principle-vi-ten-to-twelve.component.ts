import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-vi-ten-to-twelve",
  templateUrl: "./principle-vi-ten-to-twelve.component.html",
  styleUrls: ["./principle-vi-ten-to-twelve.component.scss"],
})
export class PrincipleViTenToTwelveComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  ecologically_sensitive_areas: any[] = [
    {
      office_location: "",
      types_of_operation: "",
      is_environmental_approval: "",
      details: "",
    },
  ];
  details_of_environmental_impact_assessments: any[] = [
    {
      project_detail: "",
      eia: "",
      date: "",
      conducted_by_independent_external_agency: "",
      communicated_in_public_domain: "",
      web_link: "",
    },
  ];
  is_entity_compliant_with_the_applicable_environmental_law: any = "";
  non_compliances_details: any[] = [
    {
      guidelines_which_was_not_complied: "",
      details_of_the_non_compliance: "",
      action_taken_by_regulatory_agencies: "",
      corrective_action_taken: "",
    },
  ];
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    if (this.response?.essential_indicators) {
      this.is_entity_compliant_with_the_applicable_environmental_law = this
        .response?.essential_indicators
        ?.is_entity_compliant_with_the_applicable_environmental_law
        ? "Yes"
        : this.response?.essential_indicators
            ?.is_entity_compliant_with_the_applicable_environmental_law == false
        ? "No"
        : "";
      this.ecologically_sensitive_areas = this._utilities.arrayNullToString(
        this.response?.essential_indicators?.ecologically_sensitive_areas
      );
      if (!this.ecologically_sensitive_areas.length) {
        this.ecologically_sensitive_areas = [
          {
            office_location: "",
            types_of_operation: "",
            is_environmental_approval: "",
            details: "",
          },
        ];
      }
      this.details_of_environmental_impact_assessments = this._utilities.arrayNullToString(
        this.response?.essential_indicators
          ?.details_of_environmental_impact_assessments
      );
      if (!this.details_of_environmental_impact_assessments.length) {
        this.details_of_environmental_impact_assessments = [
          {
            project_detail: "",
            eia: "",
            date: "",
            conducted_by_independent_external_agency: "",
            communicated_in_public_domain: "",
            web_link: "",
          },
        ];
      }
      this.non_compliances_details = this._utilities.arrayNullToString(
        this.response?.essential_indicators?.non_compliances_details
      );
      if (!this.non_compliances_details.length) {
        this.non_compliances_details = [
          {
            guidelines_which_was_not_complied: "",
            details_of_the_non_compliance: "",
            action_taken_by_regulatory_agencies: "",
            corrective_action_taken: "",
          },
        ];
      }
    } else {
      this.ecologically_sensitive_areas = [
        {
          office_location: "",
          types_of_operation: "",
          is_environmental_approval: "",
          details: "",
        },
      ];
      this.details_of_environmental_impact_assessments = [
        {
          project_detail: "",
          eia: "",
          date: "",
          conducted_by_independent_external_agency: "",
          communicated_in_public_domain: "",
          web_link: "",
        },
      ];
      this.is_entity_compliant_with_the_applicable_environmental_law = "";
      this.non_compliances_details = [
        {
          guidelines_which_was_not_complied: "",
          details_of_the_non_compliance: "",
          action_taken_by_regulatory_agencies: "",
          corrective_action_taken: "",
        },
      ];
    }
  }

  addField(mode) {
    let flag = 1;
    if (mode == 1) {
      this.ecologically_sensitive_areas.filter((e) => {
        if (
          e?.office_location.trim().length == 0 ||
          e?.is_environmental_approval === "" ||
          e?.types_of_operation.trim().length == 0 ||
          (e?.is_environmental_approval === false && e?.details == "")
        )
          flag = 0;
      });
      if (flag == 0) {
        this._emitter.emit({
          msg: "Please fill all fields of Essential Indicators point 10",
        });
        return;
      }
      if (this.ecologically_sensitive_areas.length < 15)
        this.ecologically_sensitive_areas.push({
          office_location: "",
          types_of_operation: "",
          is_environmental_approval: true,
          details: "",
        });
    } else if (mode == 2) {
      this.details_of_environmental_impact_assessments.filter((e) => {
        if (
          e?.project_detail.trim().length == 0 ||
          e?.eia.trim().length == 0 ||
          e?.date.trim().length == 0 ||
          e?.conducted_by_independent_external_agency === "" ||
          e?.communicated_in_public_domain === "" ||
          e?.web_link.trim().length == 0
        )
          flag = 0;
      });
      if (flag == 0) {
        this._emitter.emit({
          msg: "Please fill all fields of Essential Indicators point 11",
        });
        return;
      }
      if (this.details_of_environmental_impact_assessments.length < 15)
        this.details_of_environmental_impact_assessments.push({
          project_detail: "",
          eia: "",
          date: "",
          conducted_by_independent_external_agency: true,
          communicated_in_public_domain: true,
          web_link: "",
        });
    } else if (mode == 3) {
      this.non_compliances_details.filter((e) => {
        if (
          e?.guidelines_which_was_not_complied.trim().length == 0 ||
          e?.details_of_the_non_compliance.trim().length == 0 ||
          e?.action_taken_by_regulatory_agencies.trim().length == 0 ||
          e?.corrective_action_taken.trim().length == 0
        )
          flag = 0;
      });
      if (flag == 0) {
        this._emitter.emit({
          msg: "Please fill all fields of Essential Indicators point 12",
        });
        return;
      }
      if (this.non_compliances_details.length < 15)
        this.non_compliances_details.push({
          guidelines_which_was_not_complied: "",
          details_of_the_non_compliance: "",
          action_taken_by_regulatory_agencies: "",
          corrective_action_taken: "",
        });
    }
  }
  removeField(i, mode) {
    if (mode == 1 && this.ecologically_sensitive_areas.length > 1)
      this.ecologically_sensitive_areas.splice(i, 1);
    else if (
      mode == 2 &&
      this.details_of_environmental_impact_assessments.length > 1
    )
      this.details_of_environmental_impact_assessments.splice(i, 1);
    else if (mode == 3 && this.non_compliances_details.length > 1)
      this.non_compliances_details.splice(i, 1);
  }

  initialize() {
    this._emitter.emit({
      from: "ten_to_twelve",
      data: {
        ecologically_sensitive_areas: this.ecologically_sensitive_areas.filter(
          (e) => e.office_location.length > 0
        ),
        details_of_environmental_impact_assessments: this.details_of_environmental_impact_assessments.filter(
          (e) => e.project_detail.length > 0
        ),
        is_entity_compliant_with_the_applicable_environmental_law:
          this.is_entity_compliant_with_the_applicable_environmental_law ==
          "Yes"
            ? true
            : this.is_entity_compliant_with_the_applicable_environmental_law ==
              "No"
            ? false
            : "",
        non_compliances_details: this.non_compliances_details.filter(
          (e) => e.guidelines_which_was_not_complied.length > 0
        ),
      },
    });
  }
}
