import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PrincipleIiiComponent } from "./principle-iii.component";

describe("PrincipleIiiComponent", () => {
  let component: PrincipleIiiComponent;
  let fixture: ComponentFixture<PrincipleIiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipleIiiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipleIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
