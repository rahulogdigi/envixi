import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleIxComponent } from './principle-ix.component';

describe('PrincipleIxComponent', () => {
  let component: PrincipleIxComponent;
  let fixture: ComponentFixture<PrincipleIxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleIxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleIxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
