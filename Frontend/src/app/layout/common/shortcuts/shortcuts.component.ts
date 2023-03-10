import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  Input,
} from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";
import { MatButton } from "@angular/material/button";
import { Subject, takeUntil } from "rxjs";
import { Shortcut } from "app/layout/common/shortcuts/shortcuts.types";
import { CommonFunctionsService } from "../../../utils/common-functions.service";

@Component({
  selector: "shortcuts",
  templateUrl: "./shortcuts.component.html",
  styleUrls: ["./shortcuts.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: "shortcuts",
})
export class ShortcutsComponent implements OnInit, OnDestroy {
  @ViewChild("shortcutsOrigin") private _shortcutsOrigin: MatButton;
  @ViewChild("shortcutsPanel") private _shortcutsPanel: TemplateRef<any>;
  mode: "view" | "modify" | "add" | "edit" = "view";

  shortcuts: Shortcut[];
  private _overlayRef: OverlayRef;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    public _utilities: CommonFunctionsService,
    private _router: Router
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Initialize the form

    // Get the shortcuts

    this._changeDetectorRef.markForCheck();
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();

    // Dispose the overlay
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Open the shortcuts panel
   */
  openPanel(): void {
    // Return if the shortcuts panel or its origin is not defined
    if (!this._shortcutsPanel || !this._shortcutsOrigin) {
      return;
    }

    // Make sure to start in 'view' mode
    this.mode = "view";

    // Create the overlay if it doesn't exist
    if (!this._overlayRef) {
      this._createOverlay();
    }

    // Attach the portal to the overlay
    this._overlayRef.attach(
      new TemplatePortal(this._shortcutsPanel, this._viewContainerRef)
    );
  }

  /**
   * Close the shortcuts panel
   */
  closePanel(): void {
    this._overlayRef.detach();
  }

  /**
   * Change the mode
   */
  changeMode(mode: "view" | "modify" | "add" | "edit"): void {
    // Change the mode
    this.mode = mode;
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Create the overlay
   */
  private _createOverlay(): void {
    // Create the overlay
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      backdropClass: "fuse-backdrop-on-mobile",
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(this._shortcutsOrigin._elementRef.nativeElement)
        .withLockedPosition(true)
        .withPush(true)
        .withPositions([
          {
            originX: "start",
            originY: "bottom",
            overlayX: "start",
            overlayY: "top",
          },
          {
            originX: "start",
            originY: "top",
            overlayX: "start",
            overlayY: "bottom",
          },
          {
            originX: "end",
            originY: "bottom",
            overlayX: "end",
            overlayY: "top",
          },
          {
            originX: "end",
            originY: "top",
            overlayX: "end",
            overlayY: "bottom",
          },
        ]),
    });

    // Detach the overlay from the portal on backdrop click
    this._overlayRef.backdropClick().subscribe(() => {
      this._overlayRef.detach();
    });
  }
  selectCompany(company) {
    this._utilities.selectedCompany = company;
    this.closePanel();
  }
  redirectToProfile(company) {
    let redirectLink = `/dashboard/company-profile/${company?.company_id}`;
    //console.log(redirectLink);
    this._router.navigate([redirectLink]);
    //this._router.navigateByUrl("/dashboard/company-profile");
  }
}
