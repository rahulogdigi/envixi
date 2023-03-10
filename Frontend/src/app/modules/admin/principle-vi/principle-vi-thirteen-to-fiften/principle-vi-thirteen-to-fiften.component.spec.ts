import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleViThirteenToFiftenComponent } from './principle-vi-thirteen-to-fiften.component';

describe('PrincipleViThirteenToFiftenComponent', () => {
  let component: PrincipleViThirteenToFiftenComponent;
  let fixture: ComponentFixture<PrincipleViThirteenToFiftenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleViThirteenToFiftenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleViThirteenToFiftenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
