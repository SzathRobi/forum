import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME_ROUTE } from 'routes';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: HOME_ROUTE,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: HOME_ROUTE,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
