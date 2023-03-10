import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleIiComponent } from './principle-ii.component';

describe('PrincipleIiComponent', () => {
  let component: PrincipleIiComponent;
  let fixture: ComponentFixture<PrincipleIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
