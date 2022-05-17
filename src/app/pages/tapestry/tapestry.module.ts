import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TapestryRoutingModule } from './tapestry-routing.module';
import { TapestryComponent } from './tapestry.component';
import { TapestryNavComponent } from './tapestry-nav/tapestry-nav.component';
import { TapestryStepperComponent } from './tapestry-stepper/tapestry-stepper.component';
import { TapestryPaymentItemComponent } from './tapestry-payment-item/tapestry-payment-item.component';

@NgModule({
  declarations: [
    TapestryComponent,
    TapestryNavComponent,
    TapestryStepperComponent,
    TapestryPaymentItemComponent,
  ],
  imports: [
    CommonModule,
    TapestryRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TapestryModule {}
