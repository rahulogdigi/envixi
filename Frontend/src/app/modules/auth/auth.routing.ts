import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthSignInComponent } from "app/modules/auth/sign-in/sign-in.component";
import { AuthResetPasswordComponent } from "app/modules/auth/reset-password/reset-password.component";
import { AuthForgotPasswordComponent } from "app/modules/auth/forgot-password/forgot-password.component";
import { AuthSignUpComponent } from "app/modules/auth/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: "",
    component: AuthSignInComponent,
  },
  {
    path: "sign-in",
    component: AuthSignInComponent,
  },
  {
    path: "sign-up",
    component: AuthSignUpComponent,
  },
  {
    path: "reset-password/:userId/:token",
    component: AuthResetPasswordComponent,
    data: {
      type: "reset-password",
    },
  },
  {
    path: "forgot-password",
    component: AuthForgotPasswordComponent,
    data: {
      type: "reset-password",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class authRoutes {}
