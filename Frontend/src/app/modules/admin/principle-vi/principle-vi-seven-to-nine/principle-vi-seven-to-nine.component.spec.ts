import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleViSevenToNineComponent } from './principle-vi-seven-to-nine.component';

describe('PrincipleViSevenToNineComponent', () => {
  let component: PrincipleViSevenToNineComponent;
  let fixture: ComponentFixture<PrincipleViSevenToNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleViSevenToNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleViSevenToNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
