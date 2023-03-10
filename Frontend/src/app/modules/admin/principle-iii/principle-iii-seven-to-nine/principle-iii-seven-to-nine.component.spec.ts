import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleIiiSevenToNineComponent } from './principle-iii-seven-to-nine.component';

describe('PrincipleIiiSevenToNineComponent', () => {
  let component: PrincipleIiiSevenToNineComponent;
  let fixture: ComponentFixture<PrincipleIiiSevenToNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleIiiSevenToNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleIiiSevenToNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
