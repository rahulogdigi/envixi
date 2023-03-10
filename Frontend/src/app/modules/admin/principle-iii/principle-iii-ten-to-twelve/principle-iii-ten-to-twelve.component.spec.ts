import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleIiiTenToTwelveComponent } from './principle-iii-ten-to-twelve.component';

describe('PrincipleIiiTenToTwelveComponent', () => {
  let component: PrincipleIiiTenToTwelveComponent;
  let fixture: ComponentFixture<PrincipleIiiTenToTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleIiiTenToTwelveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleIiiTenToTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
