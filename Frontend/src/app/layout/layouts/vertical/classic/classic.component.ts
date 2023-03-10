import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { FuseMediaWatcherService } from "@fuse/services/media-watcher";
import {
  FuseNavigationService,
  FuseVerticalNavigationComponent,
} from "@fuse/components/navigation";
import { Navigation } from "app/core/navigation/navigation.types";
import { NavigationService } from "app/core/navigation/navigation.service";
import { CommonFunctionsService } from "../../../../utils/common-functions.service";
import { CompanyProfileService } from "../../../../providers/company-profile.service";
import { AuthService } from "app/core/auth/auth.service";
@Component({
  selector: "classic-layout",
  templateUrl: "./classic.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class ClassicLayoutComponent implements OnInit, OnDestroy {
  isScreenSmall: boolean;
  navigation: Navigation;
  allLocation: any[] = [];
  selectedLocId: string = "";
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _navigationService: NavigationService,
    private _fuseMediaWatcherService: FuseMediaWatcherService,
    private _fuseNavigationService: FuseNavigationService,
    public _utilities: CommonFunctionsService,
    private _companyProfileService: CompanyProfileService,
    private _authService: AuthService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for current year
   */
  get currentYear(): number {
    return new Date().getFullYear();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.getAllLocation();
    // Subscribe to navigation data
  }

  getAllLocation() {
    this._utilities.loaderOn();
    this._companyProfileService
      .getAllLocation({
        company_id: this._utilities.selectedCompany?.company_id,
      })
      .subscribe(
        (response) => {
          if (response?.status == 200) {
            this.allLocation = response?.data || [];
            this.selectedLocId =
              this.allLocation.length > 0 ? this.allLocation[0]?._id : "";

            this.getUserAccess();
          }
        },
        (err) => {
          this._utilities.loaderOff();
        }
      );
  }

  getUserAccess() {
    this._utilities.loaderOn();
    let user = JSON.parse(this._authService.userData);
    this._companyProfileService
      .getUserAccess({
        company_id: this._utilities.selectedCompany?.company_id,
        employee_id: user?._id,
        location_id: this.selectedLocId,
      })
      .subscribe(
        (response) => {
          if (user?.role == "Employeer") {
            this.getNavigationData();
            this._utilities.accessModuleList = this._utilities.allModulesForEmployer;
          } else {
            let moduleList =
              response?.data && response?.data[0]?.module_details
                ? response?.data[0]?.module_details
                : [];

            this._utilities.accessModuleList =
              response?.data && response?.data[0]?.module_list
                ? response?.data[0]?.module_list
                : [];
            this._utilities.loggedUserRole = user?.role;
            this.navigation = {
              compact: [],
              default: [],
              futuristic: [],
              horizontal: [],
            };

            moduleList.filter((e) => {
              let obj: any = {
                id: e?.id,
                title: e?.title,
                subtitle: e?.subtitle,
                type: e?.type,
                icon: e?.icon,
              };

              if (e?.type == "group") {
                let childData = this._utilities.getModuleChild(
                  e?.id,
                  moduleList
                );
                if (childData.length > 0) {
                  obj["children"] = childData;
                  this.navigation.default.push(obj);
                }
              } else if (!e?.parent) {
                obj["link"] = e?.link;
                this.navigation.default.push(obj);
              }
            });

            if (this.navigation?.default && this.navigation?.default?.length) {
              if (
                this.navigation?.default[0]?.children &&
                this.navigation?.default[0]?.children?.length
              ) {
                this._router.navigateByUrl(
                  this.navigation?.default[0]?.children[0]?.link
                );
              } else {
                this._router.navigateByUrl(this.navigation?.default[0].link);
              }
            }

            console.log("yyy", this.navigation.default);
          }
          this._utilities.loaderOff();
        },
        (err) => {
          this.navigation = {
            compact: [],
            default: [],
            futuristic: [],
            horizontal: [],
          };
          if (user?.role == "Employeer") {
            this.getNavigationData();
            this._utilities.accessModuleList = this._utilities.allModulesForEmployer;
          } else {
            this._utilities.accessModuleList = [];
          }
          this._utilities.loaderOff();
        }
      );

    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {
        // Check if the screen is small
        this.isScreenSmall = !matchingAliases.includes("md");
      });
    this._utilities.initialize();

    if (this._utilities.allCompanies.length == 0 && user?.role == "Employeer") {
      this._router.navigateByUrl("/dashboard/company-profile");
    }
  }

  getNavigationData() {
    this.navigation = {
      compact: [],
      default: [
        {
          id: "dashboards",
          title: "Company Profile",
          subtitle: "",
          type: "group",
          icon: "heroicons_outline:home",
          children: [
            {
              id: "dashboards.project1",
              title: "Dashboard E",
              type: "basic",
              icon: "heroicons_outline:clipboard-check",
              link: "/dashboard/dashboard-e",
            },
            {
              id: "dashboards.project2",
              title: "Dashboard S",
              type: "basic",
              icon: "heroicons_outline:clipboard-check",
              link: "/dashboard/dashboard-s",
            },
            {
              id: "dashboards.project2",
              title: "Dashboard G",
              type: "basic",
              icon: "heroicons_outline:clipboard-check",
              link: "/dashboard/dashboard-g",
            },
            {
              id: "dashboards.project",
              title: "Section B",
              type: "basic",
              icon: "heroicons_outline:clipboard-check",
              link: "/dashboard/section-b",
            },
          ],
        },
        { id: "divider-1", type: "divider" },
        {
          id: "brsr1",
          title: "BRSR",
          subtitle: "",
          type: "group",
          icon: "heroicons_outline:home",
          children: [
            {
              id: "dashboards.project1",
              title: "Monthly Survey",
              type: "basic",
              icon: "heroicons_outline:clipboard-check",
              link: "/monthly/survey",
            },
            {
              id: "dashboards.project2",
              title: "Generate BRSR",
              type: "basic",
              icon: "heroicons_outline:clipboard-check",
              link: "/dashboard/generate-brsr",
            },
          ],
        },
        { id: "divider-1", type: "divider" },
        {
          id: "navigation-features",
          title: "BRSR Principles",
          subtitle: "",
          type: "group",
          icon: "heroicons_outline:menu",
          children: [
            {
              id: "navigation-features.level.0",
              title: "Principle 1",
              icon: "heroicons_outline:check-circle",
              type: "basic",
              link: "/dashboard/principle-i",
            },
            {
              id: "navigation-features.level.1",
              title: "Principle 2",
              icon: "heroicons_outline:check-circle",
              type: "basic",
              link: "/dashboard/principle-ii",
            },
            {
              id: "navigation-features.level.2",
              title: "Principle 3",
              icon: "heroicons_outline:check-circle",
              type: "basic",
              link: "/dashboard/principle-iii",
            },
            {
              id: "navigation-features.level.3",
              title: "Principle 4",
              icon: "heroicons_outline:check-circle",
              type: "basic",
              link: "/dashboard/principle-iv",
            },
            {
              id: "navigation-features.level.4",
              title: "Principle 5",
              icon: "heroicons_outline:check-circle",
              type: "basic",
              link: "/dashboard/principle-v",
            },
            {
              id: "navigation-features.level.5",
              title: "Principle 6",
              icon: "heroicons_outline:check-circle",
              type: "basic",
              link: "/dashboard/principle-vi",
            },
            {
              id: "navigation-features.level.6",
              title: "Principle 7",
              icon: "heroicons_outline:check-circle",
              type: "basic",
              link: "/dashboard/principle-vii",
            },
            {
              id: "navigation-features.level.7",
              title: "Principle 8",
              icon: "heroicons_outline:check-circle",
              type: "basic",
              link: "/dashboard/principle-viii",
            },
            {
              id: "navigation-features.level.8",
              title: "Principle 9",
              icon: "heroicons_outline:check-circle",
              type: "basic",
              link: "/dashboard/principle-ix",
            },
          ],
        },
        {
          id: "report",
          title: "Generate BRSR Report",
          subtitle: "",
          type: "basic",
          icon: "heroicons_outline:chart-square-bar",
          link: "/dashboard/generate-brsr-report",
        },
        { id: "divider-2", type: "divider" },
        {
          id: "user-access",
          title: "User Access",
          subtitle: "",
          type: "basic",
          icon: "heroicons_outline:chart-square-bar",
          link: "/user-access",
        },
        {
          id: "monthly-report",
          title: "Monthly Report",
          subtitle: "",
          type: "basic",
          icon: "heroicons_outline:chart-square-bar",
          link: "/monthly/report",
        },
        {
          id: "manage-location",
          title: "Manage Location",
          subtitle: "",
          type: "basic",
          icon: "heroicons_outline:location-marker",
          link: "/manage-location",
        },
      ],
      futuristic: [],
      horizontal: [],
    };

    this.navigation.default[0].children.push({
      id: "dashboards.a",
      title: "Section A",
      type: "basic",
      icon: "heroicons_outline:clipboard-check",
      link: "/dashboard/company-profile",
    });
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
   * Toggle navigation
   *
   * @param name
   */
  toggleNavigation(name: string): void {
    // Get the navigation
    const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
      name
    );

    if (navigation) {
      // Toggle the opened status
      navigation.toggle();
    }
  }
}
