import { Component } from "@angular/core";
import { CommonFunctionsService } from "./utils/common-functions.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  /**
   * Constructor
   */

  constructor(public _utilities: CommonFunctionsService) {
    // setTimeout(() => {
    //   this._utilities.showLoader = false;
    // }, 3000);
  }
}
