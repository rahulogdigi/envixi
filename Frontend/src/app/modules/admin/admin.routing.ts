import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ExampleComponent } from "app/modules/admin/example/example.component";
import { AuthSignOutComponent } from "app/modules/admin/sign-out/sign-out.component";
import { CompanyProfileComponent } from "app/modules/admin/company-profile/company-profile.component";
import { SectionBComponent } from "app/modules/admin/section-b/section-b.component";
import { PrincipleIComponent } from "./principle-i/principle-i.component";
import { PrincipleIiComponent } from "./principle-ii/principle-ii.component";
import { PrincipleIiiComponent } from "./principle-iii/principle-iii.component";
import { PrincipleViComponent } from "./principle-vi/principle-vi.component";
import { PrincipleIvComponent } from "./principle-iv/principle-iv.component";
import { PrincipleVComponent } from "./principle-v/principle-v.component";
import { PrincipleViiComponent } from "./principle-vii/principle-vii.component";
import { PrincipleViiiComponent } from "./principle-viii/principle-viii.component";
import { PrincipleIxComponent } from "./principle-ix/principle-ix.component";
import { GenerateBrsrReportComponent } from "./generate-brsr-report/generate-brsr-report.component";
import { DashboardEComponent } from "./dashboard/dashboard-e/dashboard-e.component";
import { DashboardSComponent } from "./dashboard/dashboard-s/dashboard-s.component";
import { DashboardGComponent } from "./dashboard/dashboard-g/dashboard-g.component";

import { MonthlyBrsrReportComponent } from "./monthly-brsr-report/monthly-brsr-report.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardEComponent,
  },
  {
    path: "generate-brsr",
    component: MonthlyBrsrReportComponent,
  },
  {
    path: "dashboard-e",
    component: DashboardEComponent,
  },
  {
    path: "dashboard-s",
    component: DashboardSComponent,
  },
  {
    path: "dashboard-g",
    component: DashboardGComponent,
  },
  {
    path: "example",
    component: ExampleComponent,
  },
  {
    path: "section-b",
    component: SectionBComponent,
  },
  {
    path: "principle-i",
    component: PrincipleIComponent,
  },
  {
    path: "principle-ii",
    component: PrincipleIiComponent,
  },
  {
    path: "principle-iii",
    component: PrincipleIiiComponent,
  },
  {
    path: "principle-iv",
    component: PrincipleIvComponent,
  },
  {
    path: "principle-v",
    component: PrincipleVComponent,
  },
  {
    path: "principle-vi",
    component: PrincipleViComponent,
  },
  {
    path: "principle-vii",
    component: PrincipleViiComponent,
  },
  {
    path: "principle-viii",
    component: PrincipleViiiComponent,
  },
  {
    path: "principle-ix",
    component: PrincipleIxComponent,
  },
  {
    path: "generate-brsr-report",
    component: GenerateBrsrReportComponent,
  },
  {
    path: "sign-out",
    data: {
      layout: "empty",
    },
    component: AuthSignOutComponent,
  },
  {
    path: "company-profile",
    data: {
      layout: "modern",
    },
    component: CompanyProfileComponent,
  },
  {
    path: "company-profile/:id",
    data: {
      layout: "modern",
    },
    component: CompanyProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutes {}
