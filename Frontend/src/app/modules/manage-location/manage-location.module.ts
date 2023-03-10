import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ManageLocationRoutingModule } from "./manage-location-routing.module";
import { LocationComponent } from "./location/location.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [LocationComponent],
  imports: [SharedModule, CommonModule, ManageLocationRoutingModule],
})
export class ManageLocationModule {}
