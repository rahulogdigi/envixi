import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleTwoComponent } from './principle-two.component';

describe('PrincipleTwoComponent', () => {
  let component: PrincipleTwoComponent;
  let fixture: ComponentFixture<PrincipleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
