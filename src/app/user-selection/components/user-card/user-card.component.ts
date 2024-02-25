import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from 'app/user-selection/interfaces/user.interface';

@Component({
  selector: 'user-selection-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input({ required: true }) user: User;

  @Output() onSelectUSer = new EventEmitter<User>();

  selectUser() {
    this.onSelectUSer.emit(this.user);
  }
}
