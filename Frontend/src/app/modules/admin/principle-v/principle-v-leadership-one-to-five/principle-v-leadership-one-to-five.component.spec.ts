import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleVLeadershipOneToFiveComponent } from './principle-v-leadership-one-to-five.component';

describe('PrincipleVLeadershipOneToFiveComponent', () => {
  let component: PrincipleVLeadershipOneToFiveComponent;
  let fixture: ComponentFixture<PrincipleVLeadershipOneToFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleVLeadershipOneToFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleVLeadershipOneToFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
