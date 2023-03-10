import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialOneToFiveComponent } from './essential-one-to-five.component';

describe('EssentialOneToFiveComponent', () => {
  let component: EssentialOneToFiveComponent;
  let fixture: ComponentFixture<EssentialOneToFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssentialOneToFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssentialOneToFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
