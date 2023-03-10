import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleViComponent } from './principle-vi.component';

describe('PrincipleViComponent', () => {
  let component: PrincipleViComponent;
  let fixture: ComponentFixture<PrincipleViComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleViComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
