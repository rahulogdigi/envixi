import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySectionBComponent } from './monthly-section-b.component';

describe('MonthlySectionBComponent', () => {
  let component: MonthlySectionBComponent;
  let fixture: ComponentFixture<MonthlySectionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlySectionBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlySectionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
