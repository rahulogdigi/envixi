import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleSixElevenToAllComponent } from './principle-six-eleven-to-all.component';

describe('PrincipleSixElevenToAllComponent', () => {
  let component: PrincipleSixElevenToAllComponent;
  let fixture: ComponentFixture<PrincipleSixElevenToAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleSixElevenToAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleSixElevenToAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
