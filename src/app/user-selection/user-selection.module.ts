import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserSelectionContainerComponent } from './components/user-selection-container/user-selection-container.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserSelectionRoutingModule } from './user-selection-routing.module';

@NgModule({
  declarations: [UserSelectionContainerComponent, UserCardComponent],
  imports: [CommonModule, UserSelectionRoutingModule],
})
export class UserSelectionModule {}
