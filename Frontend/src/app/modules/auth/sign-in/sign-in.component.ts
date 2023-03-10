import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { fuseAnimations } from "@fuse/animations";
import { FuseAlertType } from "@fuse/components/alert";
import { AuthService } from "app/core/auth/auth.service";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { CompanyProfileService } from "app/providers/company-profile.service";
@Component({
  selector: "auth-sign-in",
  styleUrls: ["./sign-in.component.scss"],
  templateUrl: "./sign-in.component.html",
  animations: fuseAnimations,
})
export class AuthSignInComponent implements OnInit {
  @ViewChild("signInNgForm") signInNgForm: NgForm;

  alert: { type: FuseAlertType; message: string } = {
    type: "success",
    message: "",
  };
  signInForm: UntypedFormGroup;
  showAlert: boolean = false;

  /**
   * Constructor
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _formBuilder: UntypedFormBuilder,
    private _router: Router,
    public _utilities: CommonFunctionsService,
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
    this.signInForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      rememberMe: [""],
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   */
  signIn(): void {
    // Return if the form is invalid
    if (this.signInForm.invalid) {
      return;
    }

    // Disable the form
    this.signInForm.disable();

    // Hide the alert
    this.showAlert = false;

    // Sign in
    this._authService.signIn(this.signInForm.value).subscribe(
      (response) => {
        // Re-enable the form
        this.signInForm.enable();
        this.signInNgForm.resetForm();

        // Show the alert
        this.showAlert = true;
        this.alert = {
          type: "success",
          message: "Redirecting you to dashboard",
        };
        console.log(response);

        this.getAllCountry();
      },
      (err) => {
        this.signInForm.enable();
        this.showAlert = true;
        this.alert = {
          type: "error",
          message: err?.error?.message || "Something Went Wrong",
        };
      }
    );
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
        this._router.navigateByUrl("/dashboard/company-profile");
        console.log(err);
      }
    );
  }
}
