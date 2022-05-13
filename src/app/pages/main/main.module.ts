import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MainContentComponent } from './main-content/main-content.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

@NgModule({
  declarations: [MainComponent, MainContentComponent, MainNavComponent, MainFooterComponent],
  imports: [CommonModule, MainRoutingModule, MatSliderModule, MatButtonModule],
})
export class MainModule {}
