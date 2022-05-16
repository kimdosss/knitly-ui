import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapestryStepperComponent } from './tapestry-stepper.component';

describe('TapestryStepperComponent', () => {
  let component: TapestryStepperComponent;
  let fixture: ComponentFixture<TapestryStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapestryStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapestryStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
