import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MonthlyBrsrReportComponent } from "./monthly-brsr-report.component";

describe("MonthlyReportComponent", () => {
  let component: MonthlyBrsrReportComponent;
  let fixture: ComponentFixture<MonthlyBrsrReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyBrsrReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MonthlyBrsrReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
