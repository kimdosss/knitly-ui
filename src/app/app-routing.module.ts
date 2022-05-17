import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AppRoutes } from './shared/constants';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: AppRoutes.Main,
        loadChildren: () =>
          import('./pages/main/main.module').then((m) => m.MainModule),
      },
      {
        path: AppRoutes.Tapestry,
        loadChildren: () =>
          import('./pages/tapestry/tapestry.module').then(
            (m) => m.TapestryModule
          ),
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: AppRoutes.Main,
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
