import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleThreeComponent } from './principle-three.component';

describe('PrincipleThreeComponent', () => {
  let component: PrincipleThreeComponent;
  let fixture: ComponentFixture<PrincipleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
