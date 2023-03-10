import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleViFourToSixComponent } from './principle-vi-four-to-six.component';

describe('PrincipleViFourToSixComponent', () => {
  let component: PrincipleViFourToSixComponent;
  let fixture: ComponentFixture<PrincipleViFourToSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleViFourToSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleViFourToSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
