import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants';
import { MatStepper, StepState } from '@angular/material/stepper';

@Component({
  selector: 'app-tapestry-stepper',
  templateUrl: './tapestry-stepper.component.html',
  styleUrls: ['./tapestry-stepper.component.scss'],
})
export class TapestryStepperComponent implements OnInit {
  @ViewChild('stepper', { static: true }) stepperEl: MatStepper;

  stepCounts = Array(3);
  isEditable = false;
  currentStep: number;

  constructor(private router: Router, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate([AppRoutes.Tapestry]);
  }

  selectStep(index: number) {
    this.stepperEl.selectedIndex = index;
  }
}
