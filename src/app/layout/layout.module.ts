import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContentLayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([], { scrollPositionRestoration: 'enabled' }),
  ],
})
export class LayoutModule {}
