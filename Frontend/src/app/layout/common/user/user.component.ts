import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { BooleanInput } from "@angular/cdk/coercion";
import { Subject, takeUntil } from "rxjs";
import { User } from "app/core/user/user.types";
import { AuthService } from "app/core/auth/auth.service";
import { InviteMemberComponent } from "app/shared/dailog/invite-member/invite-member.component";
@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: "user",
})
export class UserComponent implements OnInit, OnDestroy {
  /* eslint-disable @typescript-eslint/naming-convention */
  static ngAcceptInputType_showAvatar: BooleanInput;
  /* eslint-enable @typescript-eslint/naming-convention */
  dialogRef;
  @Input() showAvatar: boolean = true;
  @Input() showGoToDashboard: boolean = true;
  user: any = {};

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _router: Router,
    private _authService: AuthService,
    private _dialog: MatDialog
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to user changes
    // this._userService.user$
    //   .pipe(takeUntil(this._unsubscribeAll))
    //   .subscribe((user: User) => {
    //     console.log(user);
    //     this.user = user;

    //     // Mark for check
    //     this._changeDetectorRef.markForCheck();
    //   });
    this.user = JSON.parse(this._authService.userData);
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Update the user status
   *
   * @param status
   */

  /**
   * Sign out
   */
  signOut(): void {
    this._router.navigate(["/dashboard/sign-out"]);
  }
  redirectUrl(mode) {
    if (mode == 1) this._router.navigate(["/dashboard"]);
    else if (mode == 2) this.openInvite();
    else if (mode == 3) this._router.navigate(["/dashboard"]);
  }
  openInvite() {
    this.dialogRef = this._dialog.open(InviteMemberComponent, {
      data: {
        subModule: "SOW",
      },
      width: "550px",
    });
  }
}
