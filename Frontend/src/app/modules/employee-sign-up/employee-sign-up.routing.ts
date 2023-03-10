import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeSignUpComponent } from "./employee-sign-up.component";
const routes: Routes = [
  {
    path: "",
    component: EmployeeSignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeSignUpRoutes {}
