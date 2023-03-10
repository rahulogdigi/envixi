import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleNineComponent } from './principle-nine.component';

describe('PrincipleNineComponent', () => {
  let component: PrincipleNineComponent;
  let fixture: ComponentFixture<PrincipleNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
