import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserSelectionContainerComponent } from './components/user-selection-container/user-selection-container.component';
import { HomeRoutingModule } from './user-selection-routing.module';

@NgModule({
  declarations: [UserSelectionContainerComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class UserSelectionModule {}
