import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPrincipleThreeComponent } from './monthly-principle-three.component';

describe('MonthlyPrincipleThreeComponent', () => {
  let component: MonthlyPrincipleThreeComponent;
  let fixture: ComponentFixture<MonthlyPrincipleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPrincipleThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPrincipleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
