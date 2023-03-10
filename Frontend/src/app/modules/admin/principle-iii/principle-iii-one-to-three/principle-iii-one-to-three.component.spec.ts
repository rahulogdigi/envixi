import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleIiiOneToThreeComponent } from './principle-iii-one-to-three.component';

describe('PrincipleIiiOneToThreeComponent', () => {
  let component: PrincipleIiiOneToThreeComponent;
  let fixture: ComponentFixture<PrincipleIiiOneToThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleIiiOneToThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleIiiOneToThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
