import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCompanyProfileComponent } from './monthly-company-profile.component';

describe('MonthlyCompanyProfileComponent', () => {
  let component: MonthlyCompanyProfileComponent;
  let fixture: ComponentFixture<MonthlyCompanyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyCompanyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyCompanyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
