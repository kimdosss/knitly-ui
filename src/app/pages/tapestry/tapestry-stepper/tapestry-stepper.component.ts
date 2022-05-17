import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants';

enum PaymentType {
  GoogleWallet = 'Google Wallet',
  ApplePay = 'Apple Pay',
  PayPal = 'PayPal',
  BankAccount = 'Bank Account',
}

@Component({
  selector: 'app-tapestry-stepper',
  templateUrl: './tapestry-stepper.component.html',
  styleUrls: ['./tapestry-stepper.component.scss'],
})
export class TapestryStepperComponent implements OnInit {
  stepCounts = Array(3);
  isEditable = false;
  currentStep: number;

  paymentType = [
    PaymentType.GoogleWallet,
    PaymentType.ApplePay,
    PaymentType.PayPal,
    PaymentType.BankAccount,
  ];
  selectedIndex: number = 0;
  selectedPayment: PaymentType;

  constructor(private router: Router, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate([AppRoutes.Tapestry]);
  }

  preStep() {
    this.selectedIndex--;
  }

  nextStep() {
    this.selectedIndex++;
  }

  selectStep(index: number) {
    this.selectedIndex = index;
  }
}
