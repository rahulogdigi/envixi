import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListedEntityComponent } from './report-listed-entity.component';

describe('ReportListedEntityComponent', () => {
  let component: ReportListedEntityComponent;
  let fixture: ComponentFixture<ReportListedEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportListedEntityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportListedEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
