import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleViViToXComponent } from './principle-vi-vi-to-x.component';

describe('PrincipleViViToXComponent', () => {
  let component: PrincipleViViToXComponent;
  let fixture: ComponentFixture<PrincipleViViToXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleViViToXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleViViToXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
