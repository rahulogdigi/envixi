import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  NgForm,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { fuseAnimations } from "@fuse/animations";
import { FuseAlertType } from "@fuse/components/alert";
import { AuthService } from "app/core/auth/auth.service";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
@Component({
  selector: "auth-sign-up",
  styleUrls: ["./sign-up.component.scss"],
  templateUrl: "./sign-up.component.html",
  animations: fuseAnimations,
})
export class AuthSignUpComponent implements OnInit {
  @ViewChild("signUpNgForm") signUpNgForm: NgForm;

  alert: { type: FuseAlertType; message: string } = {
    type: "success",
    message: "",
  };
  signUpForm: UntypedFormGroup;
  showAlert: boolean = false;

  /**
   * Constructor
   */
  constructor(
    private _authService: AuthService,
    private _formBuilder: UntypedFormBuilder,
    private _router: Router,
    public _utilities: CommonFunctionsService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this._utilities.callRedirectLoader();
    this.signUpForm = this._formBuilder.group(
      {
        first_name: ["", Validators.required],
        last_name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required],
        confirm_password: ["", Validators.required],
      },
      {
        validator: Validators.compose([
          this.comparePassword,
          Validators.required,
        ]),
      }
    );
  }

  get confirmPassword() {
    return this.signUpForm.get("confirm_password");
  }

  comparePassword(abstractControl: AbstractControl) {
    let password = abstractControl.get("password").value;
    let confirmPassword = abstractControl.get("confirm_password").value;
    if (confirmPassword == "") {
      return null;
    } else if (password != confirmPassword) {
      abstractControl
        .get("confirm_password")
        .setErrors({ MatchPassword: true });
    } else if (password == confirmPassword) {
      abstractControl.get("confirm_password").setErrors(null);
    } else {
      return null;
    }
  }

  /**
   * Sign up
   */
  signUp(): void {
    // Do nothing if the form is invalid
    if (this.signUpForm.invalid) {
      return;
    }
    if (!this.validateName("first_name")) {
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: "Invalid First Name.",
      };
      this.clearToast();
      return;
    }
    if (!this.validateName("last_name")) {
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: "Invalid Last Name.",
      };
      this.clearToast();
      return;
    }
    // Disable the form
    this.signUpForm.disable();

    // Hide the alert
    this.showAlert = false;
    this._utilities.reset();
    this._authService.signUp(this.signUpForm.value).subscribe(
      (response) => {
        // Re-enable the form

        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Redirecting you to Company Profile Setup",
        };
        this._router.navigateByUrl("/dashboard/company-profile");
      },
      (err) => {
        console.log(err);
        this.signUpForm.enable();
        this.showAlert = true;
        this.alert = {
          type: "error",
          message:
            err?.error?.message ||
            err?.error?.error?.details[0]?.message ||
            "Something Went Wrong",
        };
      }
    );
  }
  clearToast() {
    setTimeout(() => {
      this.showAlert = false;
      // this._changeDetectorRef.detectChanges();
    }, 3000);
  }
  validateName(controlName) {
    let uName = this.signUpForm.controls[controlName].value;
    let regName = /^[a-zA-Z]+$/;
    if (!regName.test(uName)) {
      return false;
    }
    return true;
  }
}
