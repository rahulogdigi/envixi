import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgApexchartsModule } from "ng-apexcharts";

//Component

import { ExampleComponent } from "app/modules/admin/example/example.component";
import { AuthSignOutComponent } from "app/modules/admin/sign-out/sign-out.component";
import { CompanyProfileComponent } from "app/modules/admin/company-profile/company-profile.component";
import { ListedEntityComponent } from "app/modules/admin/company-profile/listed-entity/listed-entity.component";
import { ProductServicesComponent } from "app/modules/admin/company-profile/product-services/product-services.component";
import { CompanyOperationComponent } from "app/modules/admin/company-profile/company-operation/company-operation.component";
import { CompanyEmployeesComponent } from "app/modules/admin/company-profile/company-employees/company-employees.component";
import { HoldingSubsidiaryComponent } from "app/modules/admin/company-profile/holding-subsidiary/holding-subsidiary.component";
import { CsrDetailsComponent } from "app/modules/admin/company-profile/csr-details/csr-details.component";
import { TransparencyCompliancesComponent } from "app/modules/admin/company-profile/transparency-compliances/transparency-compliances.component";
import { SectionBComponent } from "app/modules/admin/section-b/section-b.component";
import { PrincipleIComponent } from "./principle-i/principle-i.component";
import { PrincipleIiComponent } from "./principle-ii/principle-ii.component";
import { PrincipleIiiComponent } from "./principle-iii/principle-iii.component";

import { SharedModule } from "app/shared/shared.module";
import { AdminRoutes } from "app/modules/admin/admin.routing";
import { PrincipleIiiOneToThreeComponent } from "./principle-iii/principle-iii-one-to-three/principle-iii-one-to-three.component";
import { PrincipleIiiFourToSixComponent } from "./principle-iii/principle-iii-four-to-six/principle-iii-four-to-six.component";
import { PrincipleIiiSevenToNineComponent } from "./principle-iii/principle-iii-seven-to-nine/principle-iii-seven-to-nine.component";
import { PrincipleIiiTenToTwelveComponent } from "./principle-iii/principle-iii-ten-to-twelve/principle-iii-ten-to-twelve.component";
import { PrincipleIiiThirteenToFifteenComponent } from "./principle-iii/principle-iii-thirteen-to-fifteen/principle-iii-thirteen-to-fifteen.component";
import { PrincipleIiiLeaderhipIndicatorComponent } from "./principle-iii/principle-iii-leaderhip-indicator/principle-iii-leaderhip-indicator.component";
import { PrincipleViComponent } from "./principle-vi/principle-vi.component";
import { PrincipleViOneToThreeComponent } from "./principle-vi/principle-vi-one-to-three/principle-vi-one-to-three.component";
import { PrincipleViFourToSixComponent } from "./principle-vi/principle-vi-four-to-six/principle-vi-four-to-six.component";
import { PrincipleViSevenToNineComponent } from "./principle-vi/principle-vi-seven-to-nine/principle-vi-seven-to-nine.component";
import { PrincipleViTenToTwelveComponent } from "./principle-vi/principle-vi-ten-to-twelve/principle-vi-ten-to-twelve.component";
import { PrincipleViThirteenToFiftenComponent } from "./principle-vi/principle-vi-thirteen-to-fiften/principle-vi-thirteen-to-fiften.component";
import { PrincipleViSixteenToTwentyoneComponent } from "./principle-vi/principle-vi-sixteen-to-twentyone/principle-vi-sixteen-to-twentyone.component";
import { PrincipleIvComponent } from "./principle-iv/principle-iv.component";
import { PrincipleVComponent } from "./principle-v/principle-v.component";
import { EssentialOneToFiveComponent } from "./principle-v/essential-one-to-five/essential-one-to-five.component";
import { EssentialSixToTenComponent } from "./principle-v/essential-six-to-ten/essential-six-to-ten.component";
import { PrincipleVLeadershipOneToFiveComponent } from "./principle-v/principle-v-leadership-one-to-five/principle-v-leadership-one-to-five.component";
import { PrincipleViiComponent } from "./principle-vii/principle-vii.component";
import { PrincipleViiiComponent } from "./principle-viii/principle-viii.component";
import { PrincipleIxComponent } from "./principle-ix/principle-ix.component";
import { GenerateBrsrReportComponentModule } from "./generate-brsr-report/generate-brsr-report.module";
import { DashboardEComponent } from "./dashboard/dashboard-e/dashboard-e.component";
import { DashboardSComponent } from "./dashboard/dashboard-s/dashboard-s.component";
import { DashboardGComponent } from "./dashboard/dashboard-g/dashboard-g.component";

import { MonthlyBrsrReportComponent } from "./monthly-brsr-report/monthly-brsr-report.component";
import { MonthlyPrincipleOneComponent } from "./monthly-brsr-report/monthly-principle-one/monthly-principle-one.component";
import { MonthlyPrincipleTwoComponent } from "./monthly-brsr-report/monthly-principle-two/monthly-principle-two.component";
import { MonthlyPrincipleThreeComponent } from "./monthly-brsr-report/monthly-principle-three/monthly-principle-three.component";
import { MonthlyPrincipleFourComponent } from "./monthly-brsr-report/monthly-principle-four/monthly-principle-four.component";
import { MonthlyPrincipleFiveComponent } from "./monthly-brsr-report/monthly-principle-five/monthly-principle-five.component";
import { GenerateReportComponent } from "./monthly-brsr-report/generate-report/generate-report.component";
import { MonthlyCompanyProfileComponent } from "./monthly-brsr-report/monthly-company-profile/monthly-company-profile.component";
import { MonthlySectionBComponent } from "./monthly-brsr-report/monthly-section-b/monthly-section-b.component";
import { MonthlyPrincipleSixComponent } from "./monthly-brsr-report/monthly-principle-six/monthly-principle-six.component";
import { MonthlyPrincipleSevenComponent } from "./monthly-brsr-report/monthly-principle-seven/monthly-principle-seven.component";
import { MonthlyPrincipleEightComponent } from "./monthly-brsr-report/monthly-principle-eight/monthly-principle-eight.component";
import { MonthlyPrincipleNineComponent } from "./monthly-brsr-report/monthly-principle-nine/monthly-principle-nine.component";

@NgModule({
  declarations: [
    ExampleComponent,
    AuthSignOutComponent,
    CompanyProfileComponent,
    ListedEntityComponent,
    ProductServicesComponent,
    CompanyOperationComponent,
    CompanyEmployeesComponent,
    HoldingSubsidiaryComponent,
    CsrDetailsComponent,
    TransparencyCompliancesComponent,
    SectionBComponent,
    PrincipleIComponent,
    PrincipleIiComponent,
    PrincipleIiiComponent,
    PrincipleIiiOneToThreeComponent,
    PrincipleIiiFourToSixComponent,
    PrincipleIiiSevenToNineComponent,
    PrincipleIiiTenToTwelveComponent,
    PrincipleIiiThirteenToFifteenComponent,
    PrincipleIiiLeaderhipIndicatorComponent,
    PrincipleViComponent,
    PrincipleViOneToThreeComponent,
    PrincipleViFourToSixComponent,
    PrincipleViSevenToNineComponent,
    PrincipleViTenToTwelveComponent,
    PrincipleViThirteenToFiftenComponent,
    PrincipleViSixteenToTwentyoneComponent,
    PrincipleIvComponent,
    PrincipleVComponent,
    EssentialOneToFiveComponent,
    EssentialSixToTenComponent,
    PrincipleVLeadershipOneToFiveComponent,
    PrincipleViiComponent,
    PrincipleViiiComponent,
    PrincipleIxComponent,
    DashboardEComponent,
    DashboardSComponent,
    DashboardGComponent,
    MonthlyBrsrReportComponent,
    MonthlyPrincipleOneComponent,
    MonthlyPrincipleTwoComponent,
    MonthlyPrincipleThreeComponent,
    MonthlyPrincipleFourComponent,
    MonthlyPrincipleFiveComponent,
    GenerateReportComponent,
    MonthlyCompanyProfileComponent,
    MonthlySectionBComponent,
    MonthlyPrincipleSixComponent,
    MonthlyPrincipleSevenComponent,
    MonthlyPrincipleEightComponent,
    MonthlyPrincipleNineComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutes,
    CommonModule,
    GenerateBrsrReportComponentModule,
    NgApexchartsModule,
  ],
  exports: [GenerateBrsrReportComponentModule],
})
export class AdminModule {}
