import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TapestryComponent } from './tapestry.component';
import { TapestryStepperComponent } from './tapestry-stepper/tapestry-stepper.component';

const routes: Routes = [
  {
    path: '',
    component: TapestryComponent,
  },
  {
    path: 'setup',
    component: TapestryStepperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TapestryRoutingModule {}
