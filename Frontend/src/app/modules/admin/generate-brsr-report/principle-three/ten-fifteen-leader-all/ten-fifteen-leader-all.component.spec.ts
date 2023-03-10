import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TenFifteenLeaderAllComponent } from "./ten-fifteen-leader-all.component";

describe("TenFifteenLeaderAllComponent", () => {
  let component: TenFifteenLeaderAllComponent;
  let fixture: ComponentFixture<TenFifteenLeaderAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenFifteenLeaderAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TenFifteenLeaderAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
