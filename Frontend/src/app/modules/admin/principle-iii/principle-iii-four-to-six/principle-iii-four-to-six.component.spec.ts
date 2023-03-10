import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleIiiFourToSixComponent } from './principle-iii-four-to-six.component';

describe('PrincipleIiiFourToSixComponent', () => {
  let component: PrincipleIiiFourToSixComponent;
  let fixture: ComponentFixture<PrincipleIiiFourToSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleIiiFourToSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleIiiFourToSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
