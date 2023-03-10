import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Component
import { AuthSignInComponent } from "app/modules/auth/sign-in/sign-in.component";
import { AuthResetPasswordComponent } from "app/modules/auth/reset-password/reset-password.component";
import { AuthForgotPasswordComponent } from "app/modules/auth/forgot-password/forgot-password.component";
import { AuthSignUpComponent } from "app/modules/auth/sign-up/sign-up.component";

import { SharedModule } from "app/shared/shared.module";
import { authRoutes } from "app/modules/auth/auth.routing";

@NgModule({
  declarations: [
    AuthSignInComponent,
    AuthResetPasswordComponent,
    AuthForgotPasswordComponent,
    AuthSignUpComponent,
  ],
  imports: [SharedModule, authRoutes, CommonModule],
})
export class AuthModule {}
