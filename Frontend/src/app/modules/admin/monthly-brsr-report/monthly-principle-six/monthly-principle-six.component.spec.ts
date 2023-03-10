import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPrincipleSixComponent } from './monthly-principle-six.component';

describe('MonthlyPrincipleSixComponent', () => {
  let component: MonthlyPrincipleSixComponent;
  let fixture: ComponentFixture<MonthlyPrincipleSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPrincipleSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPrincipleSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
