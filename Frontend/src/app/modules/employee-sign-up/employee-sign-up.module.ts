import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployeeSignUpComponent } from "./employee-sign-up.component";
import { EmployeeSignUpRoutes } from "./employee-sign-up.routing";

import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [EmployeeSignUpComponent],
  imports: [SharedModule, EmployeeSignUpRoutes, CommonModule],
  exports: [],
})
export class EmployeeSignUpModule {}
