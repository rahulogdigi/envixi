import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPrincipleSevenComponent } from './monthly-principle-seven.component';

describe('MonthlyPrincipleSevenComponent', () => {
  let component: MonthlyPrincipleSevenComponent;
  let fixture: ComponentFixture<MonthlyPrincipleSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPrincipleSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPrincipleSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
