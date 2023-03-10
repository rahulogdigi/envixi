import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleViIToVComponent } from './principle-vi-i-to-v.component';

describe('PrincipleViIToVComponent', () => {
  let component: PrincipleViIToVComponent;
  let fixture: ComponentFixture<PrincipleViIToVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleViIToVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleViIToVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
