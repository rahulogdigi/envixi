import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "app/shared/shared.module";
import { GenerateBrsrReportComponent } from "./generate-brsr-report.component";

import { ReportListedEntityComponent } from "./company-profile/report-listed-entity/report-listed-entity.component";
import { ProductServicesReportComponent } from "./company-profile/product-services-report/product-services-report.component";
import { OperationsToTransparencyComponent } from "./company-profile/operations-to-transparency/operations-to-transparency.component";
import { SectionBReportComponent } from "./section-b/section-b-report.component";
import { PrincipleOneComponent } from "./principle-one/principle-one.component";
import { PrincipleTwoComponent } from "./principle-two/principle-two.component";
import { PrincipleThreeOneToEightComponent } from "./principle-three/one-nine/principle-three-one-to-eight.component";
import { TenFifteenLeaderAllComponent } from "./principle-three/ten-fifteen-leader-all/ten-fifteen-leader-all.component";
import { PrincipleFourComponent } from "./principle-four/principle-four.component";
import { PrincipleFiveComponent } from "./principle-five/principle-five.component";
import { PrincipleViIToVComponent } from "./principle-six/principle-vi-i-to-v/principle-vi-i-to-v.component";
import { PrincipleViViToXComponent } from "./principle-six/principle-vi-vi-to-x/principle-vi-vi-to-x.component";
import { PrincipleSixElevenToAllComponent } from "./principle-six/principle-six-eleven-to-all/principle-six-eleven-to-all.component";
import { PrincipleSevenComponent } from "./principle-seven/principle-seven.component";
import { PrincipleEightComponent } from "./principle-eight/principle-eight.component";
import { PrincipleNineComponent } from "./principle-nine/principle-nine.component";

@NgModule({
  declarations: [
    ReportListedEntityComponent,
    GenerateBrsrReportComponent,
    ProductServicesReportComponent,
    OperationsToTransparencyComponent,
    SectionBReportComponent,
    PrincipleOneComponent,
    PrincipleTwoComponent,
    PrincipleThreeOneToEightComponent,
    TenFifteenLeaderAllComponent,
    PrincipleFourComponent,
    PrincipleFiveComponent,
    PrincipleViIToVComponent,
    PrincipleViViToXComponent,
    PrincipleSixElevenToAllComponent,
    PrincipleSevenComponent,
    PrincipleEightComponent,
    PrincipleNineComponent,
  ],
  imports: [SharedModule, CommonModule],
  exports: [
    ReportListedEntityComponent,
    ProductServicesReportComponent,
    OperationsToTransparencyComponent,
    SectionBReportComponent,
    PrincipleOneComponent,
    PrincipleTwoComponent,
    PrincipleThreeOneToEightComponent,
    TenFifteenLeaderAllComponent,
    PrincipleFourComponent,
    PrincipleFiveComponent,
    PrincipleViIToVComponent,
    PrincipleViViToXComponent,
    PrincipleSixElevenToAllComponent,
    PrincipleSevenComponent,
    PrincipleEightComponent,
    PrincipleNineComponent,
  ],
})
export class GenerateBrsrReportComponentModule {}
