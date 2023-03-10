import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleVComponent } from './principle-v.component';

describe('PrincipleVComponent', () => {
  let component: PrincipleVComponent;
  let fixture: ComponentFixture<PrincipleVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
