import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleViOneToThreeComponent } from './principle-vi-one-to-three.component';

describe('PrincipleViOneToThreeComponent', () => {
  let component: PrincipleViOneToThreeComponent;
  let fixture: ComponentFixture<PrincipleViOneToThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleViOneToThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleViOneToThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
