import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServicesReportComponent } from './product-services-report.component';

describe('ProductServicesReportComponent', () => {
  let component: ProductServicesReportComponent;
  let fixture: ComponentFixture<ProductServicesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductServicesReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductServicesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
