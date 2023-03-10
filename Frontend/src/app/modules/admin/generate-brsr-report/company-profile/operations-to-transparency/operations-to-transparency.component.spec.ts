import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsToTransparencyComponent } from './operations-to-transparency.component';

describe('OperationsToTransparencyComponent', () => {
  let component: OperationsToTransparencyComponent;
  let fixture: ComponentFixture<OperationsToTransparencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsToTransparencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsToTransparencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
