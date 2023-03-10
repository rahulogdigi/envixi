import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PrincipleViTenToTwelveComponent } from "./principle-vi-ten-to-twelve.component";

describe("PrincipleViTenToTwelveComponent", () => {
  let component: PrincipleViTenToTwelveComponent;
  let fixture: ComponentFixture<PrincipleViTenToTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipleViTenToTwelveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipleViTenToTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
