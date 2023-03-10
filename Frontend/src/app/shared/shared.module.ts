import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FuseCardModule } from "@fuse/components/card";
import { FuseAlertModule } from "@fuse/components/alert";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FuseHighlightModule } from "@fuse/components/highlight";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { LayoutModule } from "app/layout/layout.module";
import { InviteMemberComponent } from "./dailog/invite-member/invite-member.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FuseCardModule,
    FuseAlertModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatMenuModule,
    MatMomentDateModule,
    MatSelectModule,
    FuseHighlightModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FuseCardModule,
    FuseAlertModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatMenuModule,
    MatMomentDateModule,
    MatSelectModule,
    FuseHighlightModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    InviteMemberComponent,
  ],
  declarations: [InviteMemberComponent],
})
export class SharedModule {}
