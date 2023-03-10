import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleIiiLeaderhipIndicatorComponent } from './principle-iii-leaderhip-indicator.component';

describe('PrincipleIiiLeaderhipIndicatorComponent', () => {
  let component: PrincipleIiiLeaderhipIndicatorComponent;
  let fixture: ComponentFixture<PrincipleIiiLeaderhipIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleIiiLeaderhipIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleIiiLeaderhipIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
