import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
@Component({
  selector: "app-principle-vi-seven-to-nine",
  templateUrl: "./principle-vi-seven-to-nine.component.html",
  styleUrls: ["./principle-vi-seven-to-nine.component.scss"],
})
export class PrincipleViSevenToNineComponent implements OnInit {
  @Output() _emitter = new EventEmitter<any>();
  @Input() response: any = {};
  related_to_reducing_green_house_gas_emission: string = "";
  related_to_reducing_green_house_gas_emission_details: string = "";
  details_related_to_waste_management: any = {
    plastic_waste: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    e_waste: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    bio_medical_waste: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    construction_and_demolition_waste: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    battery_waste: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    radioactive_waste: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    other_hazardous_waste: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    other_non_hazardous_waste: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    recycled: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    re_used: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    other_recovery_operations: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    incineration: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    landfilling: {
      current_financial_year: "",
      previous_financial_year: "",
    },
    other_disposal_operations: {
      current_financial_year: "",
      previous_financial_year: "",
    },
  };
  indicate_if_any_independent_assessment_essential_8: string = "";
  indicate_if_any_independent_assessment_name_essential_8: string = "";
  waste_management_practices_adopted: string = "";
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    if (this.response?.essential_indicators) {
      this.related_to_reducing_green_house_gas_emission = this.response
        ?.essential_indicators?.related_to_reducing_green_house_gas_emission
        ? "Yes"
        : this.response?.essential_indicators
            ?.related_to_reducing_green_house_gas_emission == false
        ? "No"
        : "";
      this.related_to_reducing_green_house_gas_emission_details =
        this.response?.essential_indicators
          ?.related_to_reducing_green_house_gas_emission_details || "";
      this.details_related_to_waste_management = this._utilities.nullToString(
        this.response?.essential_indicators?.details_related_to_waste_management
      );
      this.indicate_if_any_independent_assessment_essential_8 = this.response
        ?.essential_indicators
        ?.indicate_if_any_independent_assessment_essential_8
        ? "Yes"
        : this.response?.essential_indicators
            ?.indicate_if_any_independent_assessment_essential_8 == false
        ? "No"
        : "";
      this.indicate_if_any_independent_assessment_name_essential_8 =
        this.response?.essential_indicators
          ?.indicate_if_any_independent_assessment_name_essential_8 || "";
      this.waste_management_practices_adopted =
        this.response?.essential_indicators
          ?.waste_management_practices_adopted || "";
    } else {
      this.related_to_reducing_green_house_gas_emission = "";
      this.related_to_reducing_green_house_gas_emission_details = "";
      this.details_related_to_waste_management = {
        plastic_waste: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        e_waste: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        bio_medical_waste: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        construction_and_demolition_waste: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        battery_waste: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        radioactive_waste: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        other_hazardous_waste: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        other_non_hazardous_waste: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        recycled: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        re_used: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        other_recovery_operations: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        incineration: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        landfilling: {
          current_financial_year: "",
          previous_financial_year: "",
        },
        other_disposal_operations: {
          current_financial_year: "",
          previous_financial_year: "",
        },
      };
      this.indicate_if_any_independent_assessment_essential_8 = "";
      this.indicate_if_any_independent_assessment_name_essential_8 = "";
      this.waste_management_practices_adopted = "";
    }
  }

  initialize() {
    this._emitter.emit({
      from: "seven_to_nine",
      data: {
        related_to_reducing_green_house_gas_emission:
          this.related_to_reducing_green_house_gas_emission == "Yes"
            ? true
            : this.related_to_reducing_green_house_gas_emission == "No"
            ? false
            : "",
        related_to_reducing_green_house_gas_emission_details: this
          .related_to_reducing_green_house_gas_emission_details,
        details_related_to_waste_management: this
          .details_related_to_waste_management,
        indicate_if_any_independent_assessment_essential_8:
          this.indicate_if_any_independent_assessment_essential_8 == "Yes"
            ? true
            : this.indicate_if_any_independent_assessment_essential_8 == "No"
            ? false
            : "",
        indicate_if_any_independent_assessment_name_essential_8: this
          .indicate_if_any_independent_assessment_name_essential_8,
        waste_management_practices_adopted: this
          .waste_management_practices_adopted,
      },
    });
  }
  setMonthlyData(res, isCurrent) {
    if (isCurrent) {
      this.details_related_to_waste_management.plastic_waste.current_financial_year =
        res.details_related_to_waste_management?.plastic_waste?.current_financial_year;
      this.details_related_to_waste_management.e_waste.current_financial_year =
        res.details_related_to_waste_management?.e_waste?.current_financial_year;
      this.details_related_to_waste_management.bio_medical_waste.current_financial_year =
        res.details_related_to_waste_management?.bio_medical_waste?.current_financial_year;
      this.details_related_to_waste_management.construction_and_demolition_waste.current_financial_year =
        res.details_related_to_waste_management?.construction_and_demolition_waste?.current_financial_year;
      this.details_related_to_waste_management.battery_waste.current_financial_year =
        res.details_related_to_waste_management?.battery_waste?.current_financial_year;
      this.details_related_to_waste_management.radioactive_waste.current_financial_year =
        res.details_related_to_waste_management?.radioactive_waste?.current_financial_year;
      this.details_related_to_waste_management.other_hazardous_waste.current_financial_year =
        res.details_related_to_waste_management?.other_hazardous_waste?.current_financial_year;

      this.details_related_to_waste_management.other_non_hazardous_waste.current_financial_year =
        res.details_related_to_waste_management?.other_non_hazardous_waste?.current_financial_year;
      this.details_related_to_waste_management.recycled.current_financial_year =
        res.details_related_to_waste_management?.recycled?.current_financial_year;
      this.details_related_to_waste_management.re_used.current_financial_year =
        res.details_related_to_waste_management?.re_used?.current_financial_year;
      this.details_related_to_waste_management.other_recovery_operations.current_financial_year =
        res.details_related_to_waste_management?.other_recovery_operations?.current_financial_year;
      this.details_related_to_waste_management.incineration.current_financial_year =
        res.details_related_to_waste_management?.incineration?.current_financial_year;
      this.details_related_to_waste_management.landfilling.current_financial_year =
        res.details_related_to_waste_management?.landfilling?.current_financial_year;
      this.details_related_to_waste_management.other_disposal_operations.current_financial_year =
        res.details_related_to_waste_management?.other_disposal_operations?.current_financial_year;
    } else {
      this.details_related_to_waste_management.plastic_waste.previous_financial_year =
        res.details_related_to_waste_management?.plastic_waste?.current_financial_year;

      this.details_related_to_waste_management.e_waste.previous_financial_year =
        res.details_related_to_waste_management?.e_waste?.current_financial_year;

      this.details_related_to_waste_management.bio_medical_waste.previous_financial_year =
        res.details_related_to_waste_management?.bio_medical_waste?.current_financial_year;

      this.details_related_to_waste_management.construction_and_demolition_waste.previous_financial_year =
        res.details_related_to_waste_management?.construction_and_demolition_waste?.current_financial_year;

      this.details_related_to_waste_management.battery_waste.previous_financial_year =
        res.details_related_to_waste_management?.battery_waste?.current_financial_year;

      this.details_related_to_waste_management.radioactive_waste.previous_financial_year =
        res.details_related_to_waste_management?.radioactive_waste?.current_financial_year;

      this.details_related_to_waste_management.other_hazardous_waste.previous_financial_year =
        res.details_related_to_waste_management?.other_hazardous_waste?.current_financial_year;

      this.details_related_to_waste_management.other_non_hazardous_waste.previous_financial_year =
        res.details_related_to_waste_management?.other_non_hazardous_waste?.current_financial_year;

      this.details_related_to_waste_management.recycled.previous_financial_year =
        res.details_related_to_waste_management?.recycled?.current_financial_year;

      this.details_related_to_waste_management.re_used.previous_financial_year =
        res.details_related_to_waste_management?.re_used?.current_financial_year;

      this.details_related_to_waste_management.other_recovery_operations.previous_financial_year =
        res.details_related_to_waste_management?.other_recovery_operations?.current_financial_year;

      this.details_related_to_waste_management.incineration.previous_financial_year =
        res.details_related_to_waste_management?.incineration?.current_financial_year;

      this.details_related_to_waste_management.landfilling.previous_financial_year =
        res.details_related_to_waste_management?.landfilling?.current_financial_year;

      this.details_related_to_waste_management.other_disposal_operations.previous_financial_year =
        res.details_related_to_waste_management?.other_disposal_operations?.current_financial_year;
    }
  }
  getSum(mode, fYear) {
    let val1, val2, val3, val4, val5, val6, val7, val8;
    if (mode == "1" && fYear == "current") {
      val1 =
        this.details_related_to_waste_management?.plastic_waste
          ?.current_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.e_waste
          ?.current_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.bio_medical_waste
          ?.current_financial_year || "0";
      val4 =
        this.details_related_to_waste_management
          ?.construction_and_demolition_waste?.current_financial_year || "0";
      val5 =
        this.details_related_to_waste_management?.battery_waste
          ?.current_financial_year || "0";
      val6 =
        this.details_related_to_waste_management?.radioactive_waste
          ?.current_financial_year || "0";
      val7 =
        this.details_related_to_waste_management?.other_hazardous_waste
          ?.current_financial_year || "0";
      val8 =
        this.details_related_to_waste_management?.other_non_hazardous_waste
          ?.current_financial_year || "0";
      return (
        parseFloat(val1) +
        parseFloat(val2) +
        parseFloat(val3) +
        parseFloat(val4) +
        parseFloat(val5) +
        parseFloat(val6) +
        parseFloat(val7) +
        parseFloat(val8)
      );
    }
    if (mode == "1" && fYear == "previous") {
      val1 =
        this.details_related_to_waste_management?.plastic_waste
          ?.previous_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.e_waste
          ?.previous_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.bio_medical_waste
          ?.previous_financial_year || "0";
      val4 =
        this.details_related_to_waste_management
          ?.construction_and_demolition_waste?.previous_financial_year || "0";
      val5 =
        this.details_related_to_waste_management?.battery_waste
          ?.previous_financial_year || "0";
      val6 =
        this.details_related_to_waste_management?.radioactive_waste
          ?.previous_financial_year || "0";
      val7 =
        this.details_related_to_waste_management?.other_hazardous_waste
          ?.previous_financial_year || "0";
      val8 =
        this.details_related_to_waste_management?.other_non_hazardous_waste
          ?.previous_financial_year || "0";
      return (
        parseFloat(val1) +
        parseFloat(val2) +
        parseFloat(val3) +
        parseFloat(val4) +
        parseFloat(val5) +
        parseFloat(val6) +
        parseFloat(val7) +
        parseFloat(val8)
      );
    }
    if (mode == "2" && fYear == "current") {
      val1 =
        this.details_related_to_waste_management?.recycled
          ?.current_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.re_used
          ?.current_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.other_recovery_operations
          ?.current_financial_year || "0";

      return parseFloat(val1) + parseFloat(val2) + parseFloat(val3);
    }
    if (mode == "2" && fYear == "previous") {
      val1 =
        this.details_related_to_waste_management?.recycled
          ?.previous_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.re_used
          ?.previous_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.other_recovery_operations
          ?.previous_financial_year || "0";

      return parseFloat(val1) + parseFloat(val2) + parseFloat(val3);
    }
    if (mode == "3" && fYear == "current") {
      val1 =
        this.details_related_to_waste_management?.incineration
          ?.current_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.landfilling
          ?.current_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.other_disposal_operations
          ?.current_financial_year || "0";

      return parseFloat(val1) + parseFloat(val2) + parseFloat(val3);
    }
    if (mode == "3" && fYear == "previous") {
      val1 =
        this.details_related_to_waste_management?.incineration
          ?.previous_financial_year || "0";
      val2 =
        this.details_related_to_waste_management?.landfilling
          ?.previous_financial_year || "0";
      val3 =
        this.details_related_to_waste_management?.other_disposal_operations
          ?.previous_financial_year || "0";

      return parseFloat(val1) + parseFloat(val2) + parseFloat(val3);
    }
  }
}
