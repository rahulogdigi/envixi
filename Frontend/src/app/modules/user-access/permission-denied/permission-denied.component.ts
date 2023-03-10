import { Component, OnInit } from "@angular/core";
import { CommonFunctionsService } from "../../../utils/common-functions.service";

@Component({
  selector: "app-permission-denied",
  templateUrl: "./permission-denied.component.html",
  styleUrls: ["./permission-denied.component.scss"],
})
export class PermissionDeniedComponent implements OnInit {
  constructor(public _utilities: CommonFunctionsService) {}

  ngOnInit(): void {
    this._utilities.callRedirectLoader();
  }
}
