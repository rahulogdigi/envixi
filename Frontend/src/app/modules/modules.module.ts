import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ModulesRoutingModule } from "./modules-routing.module";
import { EmployeeSignUpRoutes } from "./employee-sign-up/employee-sign-up.routing";
@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    EmployeeSignUpRoutes,
    SharedModule,
  ],
  declarations: [],
})
export class ModulesModule {}
