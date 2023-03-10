import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEComponent } from './dashboard-e.component';

describe('DashboardEComponent', () => {
  let component: DashboardEComponent;
  let fixture: ComponentFixture<DashboardEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
