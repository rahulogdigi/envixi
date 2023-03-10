import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleViiiComponent } from './principle-viii.component';

describe('PrincipleViiiComponent', () => {
  let component: PrincipleViiiComponent;
  let fixture: ComponentFixture<PrincipleViiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleViiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleViiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
