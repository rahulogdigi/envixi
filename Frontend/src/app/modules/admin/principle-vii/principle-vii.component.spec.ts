import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleViiComponent } from './principle-vii.component';

describe('PrincipleViiComponent', () => {
  let component: PrincipleViiComponent;
  let fixture: ComponentFixture<PrincipleViiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleViiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleViiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
