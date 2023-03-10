import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  NgForm,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { fuseAnimations } from "@fuse/animations";
import { FuseAlertType } from "@fuse/components/alert";
import { AuthService } from "app/core/auth/auth.service";
import { CommonFunctionsService } from "../../utils/common-functions.service";
import { CompanyProfileService } from "app/providers/company-profile.service";
@Component({
  selector: "app-employee-sign-up",
  templateUrl: "./employee-sign-up.component.html",
  styleUrls: ["./employee-sign-up.component.scss"],
  animations: fuseAnimations,
})
export class EmployeeSignUpComponent implements OnInit {
  @ViewChild("signUpNgForm") signUpNgForm: NgForm;

  alert: { type: FuseAlertType; message: string } = {
    type: "success",
    message: "",
  };
  signUpForm: UntypedFormGroup;
  showAlert: boolean = false;
  ref_token: string = "";
  showSpinner: boolean = false;
  /**
   * Constructor
   */
  constructor(
    private _authService: AuthService,
    private _formBuilder: UntypedFormBuilder,
    private _router: Router,
    public _utilities: CommonFunctionsService,
    private route: ActivatedRoute,
    private _companyProfileService: CompanyProfileService
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
    this.route.params.subscribe((params) => {
      this.ref_token = params?.token || "";
    });
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
      return;
    }
    if (!this.validateName("last_name")) {
      this.showAlert = true;
      this.alert = {
        type: "error",
        message: "Invalid Last Name.",
      };
      return;
    }

    // Disable the form
    this.signUpForm.disable();

    // Hide the alert
    this.showAlert = false;
    this._authService.signOut();
    this._utilities.reset();
    let obj = this.signUpForm.value;
    obj["ref_token"] = this.ref_token;
    this.showSpinner = true;
    this._authService.signUp(obj).subscribe(
      (response) => {
        // Re-enable the form

        this.showAlert = true;
        this.alert = {
          type: "success",
          message:
            "Account created successfully. Redirecting you to Dashboard.",
        };
        this.showSpinner = false;
        this.getAllCountry();
        //this._router.navigateByUrl("/dashboard");
      },
      (err) => {
        console.log(err);
        this.signUpForm.enable();
        this.showAlert = true;
        this.showSpinner = false;
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
  validateName(controlName) {
    let uName = this.signUpForm.controls[controlName].value;
    let regName = /^[a-zA-Z]+$/;
    if (!regName.test(uName)) {
      return false;
    }
    return true;
  }
  getAllCountry() {
    this._utilities.reset();
    this._companyProfileService.getAllCompany().subscribe(
      (response) => {
        // if (this._utilities.allCompanies.length == 0) {
        //   this._router.navigateByUrl("/dashboard/company-profile");
        // }
        this._utilities.initialize();
        this._router.navigateByUrl("/dashboard");
      },
      (err) => {
        //this._router.navigateByUrl("/dashboard/company-profile");
        console.log(err);
      }
    );
  }
}
