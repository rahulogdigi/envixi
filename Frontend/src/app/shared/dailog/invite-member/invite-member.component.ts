import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CommonFunctionsService } from "../../../utils/common-functions.service";
import { CompanyProfileService } from "../../../providers/company-profile.service";
import { environment } from "environments/environment";
@Component({
  selector: "app-invite-member",
  templateUrl: "./invite-member.component.html",
  styleUrls: ["./invite-member.component.scss"],
  styles: [
    `
      .mat-dialog-container {
        display: block;
        padding: 0px;
        border-radius: 4px;
        box-sizing: border-box;
        outline: 0;
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 6px;
      }
    `,
  ],
})
export class InviteMemberComponent implements OnInit {
  recipient_emailid: string = "";
  res_msg: string = "";
  allowInvite: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<InviteMemberComponent>,
    public _utilities: CommonFunctionsService,
    private _companyProfileService: CompanyProfileService
  ) {}

  ngOnInit(): void {
    if (!this._utilities?.allCompanies?.length) this.allowInvite = false;
  }

  sendInvite() {
    this._utilities.loaderOn();
    this._companyProfileService
      .sendEmployeeInvite({
        company_id: this._utilities.selectedCompany?.company_id,
        recipient_emailid: this.recipient_emailid,
        invite_link: environment.appUrl + "employee-sign-up",
      })
      .subscribe(
        (response) => {
          this._utilities.loaderOff();
          this.res_msg = response?.message || "";
          console.log(response);
        },
        (err) => {
          this._utilities.loaderOff();
          console.log(err);
        }
      );
  }
}
