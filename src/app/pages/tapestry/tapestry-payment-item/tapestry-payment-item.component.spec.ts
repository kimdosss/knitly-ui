import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapestryPaymentItemComponent } from './tapestry-payment-item.component';

describe('TapestryPaymentItemComponent', () => {
  let component: TapestryPaymentItemComponent;
  let fixture: ComponentFixture<TapestryPaymentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapestryPaymentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapestryPaymentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
