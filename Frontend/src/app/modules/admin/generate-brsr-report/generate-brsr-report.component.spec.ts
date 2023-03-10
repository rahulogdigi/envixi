import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBrsrReportComponent } from './generate-brsr-report.component';

describe('GenerateBrsrReportComponent', () => {
  let component: GenerateBrsrReportComponent;
  let fixture: ComponentFixture<GenerateBrsrReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateBrsrReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateBrsrReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
