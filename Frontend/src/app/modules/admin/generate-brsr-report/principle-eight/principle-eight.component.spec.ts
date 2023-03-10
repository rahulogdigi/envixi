import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleEightComponent } from './principle-eight.component';

describe('PrincipleEightComponent', () => {
  let component: PrincipleEightComponent;
  let fixture: ComponentFixture<PrincipleEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
