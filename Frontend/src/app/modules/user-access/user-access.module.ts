import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "app/shared/shared.module";

import { UserAccessRoutingModule } from "./user-access-routing.module";
import { ManageAccessComponent } from "./manage-access/manage-access.component";
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';

@NgModule({
  declarations: [ManageAccessComponent, PermissionDeniedComponent],
  imports: [CommonModule, SharedModule, UserAccessRoutingModule],
})
export class UserAccessModule {}
