import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleIiiThirteenToFifteenComponent } from './principle-iii-thirteen-to-fifteen.component';

describe('PrincipleIiiThirteenToFifteenComponent', () => {
  let component: PrincipleIiiThirteenToFifteenComponent;
  let fixture: ComponentFixture<PrincipleIiiThirteenToFifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleIiiThirteenToFifteenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleIiiThirteenToFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
