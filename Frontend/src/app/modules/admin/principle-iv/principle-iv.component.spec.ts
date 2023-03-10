import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleIvComponent } from './principle-iv.component';

describe('PrincipleIvComponent', () => {
  let component: PrincipleIvComponent;
  let fixture: ComponentFixture<PrincipleIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleIvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
