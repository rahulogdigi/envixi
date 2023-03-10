import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPrincipleOneComponent } from './monthly-principle-one.component';

describe('MonthlyPrincipleOneComponent', () => {
  let component: MonthlyPrincipleOneComponent;
  let fixture: ComponentFixture<MonthlyPrincipleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPrincipleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPrincipleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
