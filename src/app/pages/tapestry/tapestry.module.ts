import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { TapestryRoutingModule } from './tapestry-routing.module';
import { TapestryComponent } from './tapestry.component';
import { TapestryNavComponent } from './tapestry-nav/tapestry-nav.component';
import { MatStepperModule } from '@angular/material/stepper';
import { TapestryStepperComponent } from './tapestry-stepper/tapestry-stepper.component';

@NgModule({
  declarations: [TapestryComponent, TapestryNavComponent, TapestryStepperComponent],
  imports: [
    CommonModule,
    TapestryRoutingModule,
    MatButtonModule,
    MatStepperModule,
  ],
})
export class TapestryModule {}
