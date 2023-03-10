import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPrincipleNineComponent } from './monthly-principle-nine.component';

describe('MonthlyPrincipleNineComponent', () => {
  let component: MonthlyPrincipleNineComponent;
  let fixture: ComponentFixture<MonthlyPrincipleNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPrincipleNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPrincipleNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
