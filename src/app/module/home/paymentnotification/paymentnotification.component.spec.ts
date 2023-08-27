import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentnotificationComponent } from './paymentnotification.component';

describe('PaymentnotificationComponent', () => {
  let component: PaymentnotificationComponent;
  let fixture: ComponentFixture<PaymentnotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentnotificationComponent]
    });
    fixture = TestBed.createComponent(PaymentnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
