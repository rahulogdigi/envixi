import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleSevenComponent } from './principle-seven.component';

describe('PrincipleSevenComponent', () => {
  let component: PrincipleSevenComponent;
  let fixture: ComponentFixture<PrincipleSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
