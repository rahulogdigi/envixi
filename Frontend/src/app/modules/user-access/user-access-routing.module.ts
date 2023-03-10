import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageAccessComponent } from "./manage-access/manage-access.component";
import { PermissionDeniedComponent } from "./permission-denied/permission-denied.component";
const routes: Routes = [
  {
    path: "",
    component: ManageAccessComponent,
  },
  {
    path: "not-allowed",
    component: PermissionDeniedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAccessRoutingModule {}
