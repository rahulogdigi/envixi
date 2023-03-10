import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleOneComponent } from './principle-one.component';

describe('PrincipleOneComponent', () => {
  let component: PrincipleOneComponent;
  let fixture: ComponentFixture<PrincipleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
