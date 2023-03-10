import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "app/core/auth/guards/auth.guard";
import { NoAuthGuard } from "app/core/auth/guards/noAuth.guard";
import { LayoutComponent } from "app/layout/layout.component";

import { InitialDataResolver } from "app/app.resolvers";
const routes: Routes = [
  // SINGLE LEADS
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },

  {
    path: "auth",
    canLoad: [NoAuthGuard],
    canActivate: [NoAuthGuard],
    component: LayoutComponent,
    data: {
      layout: "empty",
    },
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "user-access",
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    loadChildren: () =>
      import("./user-access/user-access.module").then(
        (m) => m.UserAccessModule
      ),
  },
  {
    path: "dashboard",
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "employee-sign-up/:token",
    component: LayoutComponent,
    data: {
      layout: "empty",
    },
    loadChildren: () =>
      import("./employee-sign-up/employee-sign-up.module").then(
        (m) => m.EmployeeSignUpModule
      ),
  },
  {
    path: "monthly",
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    loadChildren: () =>
      import("./monthly/monthly.module").then((m) => m.MonthlyModule),
  },
  {
    path: "manage-location",
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    loadChildren: () =>
      import("./manage-location/manage-location.module").then(
        (m) => m.ManageLocationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
