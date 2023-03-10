import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleIComponent } from './principle-i.component';

describe('PrincipleIComponent', () => {
  let component: PrincipleIComponent;
  let fixture: ComponentFixture<PrincipleIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
