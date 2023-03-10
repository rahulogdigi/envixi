import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleFiveComponent } from './principle-five.component';

describe('PrincipleFiveComponent', () => {
  let component: PrincipleFiveComponent;
  let fixture: ComponentFixture<PrincipleFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
