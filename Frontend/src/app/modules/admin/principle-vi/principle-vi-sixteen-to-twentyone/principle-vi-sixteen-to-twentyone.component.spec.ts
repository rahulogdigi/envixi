import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PrincipleViSixteenToTwentyoneComponent } from "./principle-vi-sixteen-to-twentyone.component";

describe("PrincipleViSixteenToSeventeenComponent", () => {
  let component: PrincipleViSixteenToTwentyoneComponent;
  let fixture: ComponentFixture<PrincipleViSixteenToTwentyoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipleViSixteenToTwentyoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipleViSixteenToTwentyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
