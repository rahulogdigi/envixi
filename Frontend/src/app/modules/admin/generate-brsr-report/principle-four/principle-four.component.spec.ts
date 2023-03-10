import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleFourComponent } from './principle-four.component';

describe('PrincipleFourComponent', () => {
  let component: PrincipleFourComponent;
  let fixture: ComponentFixture<PrincipleFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
