import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPrincipleFourComponent } from './monthly-principle-four.component';

describe('MonthlyPrincipleFourComponent', () => {
  let component: MonthlyPrincipleFourComponent;
  let fixture: ComponentFixture<MonthlyPrincipleFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPrincipleFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPrincipleFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
