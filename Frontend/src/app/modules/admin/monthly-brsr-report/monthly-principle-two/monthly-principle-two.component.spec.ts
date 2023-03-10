import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPrincipleTwoComponent } from './monthly-principle-two.component';

describe('MonthlyPrincipleTwoComponent', () => {
  let component: MonthlyPrincipleTwoComponent;
  let fixture: ComponentFixture<MonthlyPrincipleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPrincipleTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPrincipleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
