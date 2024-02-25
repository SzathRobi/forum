import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME_ROUTE, USER_SELECTION_ROUTE } from 'routes';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: USER_SELECTION_ROUTE,
        loadChildren: () =>
          import('./user-selection/user-selection.module').then(
            (m) => m.UserSelectionModule
          ),
      },
      {
        path: HOME_ROUTE,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: USER_SELECTION_ROUTE,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
