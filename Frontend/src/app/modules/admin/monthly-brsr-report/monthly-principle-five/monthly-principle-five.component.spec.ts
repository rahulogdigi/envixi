import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPrincipleFiveComponent } from './monthly-principle-five.component';

describe('MonthlyPrincipleFiveComponent', () => {
  let component: MonthlyPrincipleFiveComponent;
  let fixture: ComponentFixture<MonthlyPrincipleFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPrincipleFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPrincipleFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
