import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSelectionContainerComponent } from './components/user-selection-container/user-selection-container.component';

const routes: Routes = [
  {
    path: '',
    component: UserSelectionContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSelectionRoutingModule {}
