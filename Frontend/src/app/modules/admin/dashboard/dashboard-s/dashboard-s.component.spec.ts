import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSComponent } from './dashboard-s.component';

describe('DashboardSComponent', () => {
  let component: DashboardSComponent;
  let fixture: ComponentFixture<DashboardSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
