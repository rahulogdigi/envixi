import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPrincipleEightComponent } from './monthly-principle-eight.component';

describe('MonthlyPrincipleEightComponent', () => {
  let component: MonthlyPrincipleEightComponent;
  let fixture: ComponentFixture<MonthlyPrincipleEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPrincipleEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPrincipleEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
