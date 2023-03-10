import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialSixToTenComponent } from './essential-six-to-ten.component';

describe('EssentialSixToTenComponent', () => {
  let component: EssentialSixToTenComponent;
  let fixture: ComponentFixture<EssentialSixToTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssentialSixToTenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssentialSixToTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
