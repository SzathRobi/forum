import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'user-selection-container',
  templateUrl: './user-selection-container.component.html',
  styleUrls: ['./user-selection-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSelectionContainerComponent {}
