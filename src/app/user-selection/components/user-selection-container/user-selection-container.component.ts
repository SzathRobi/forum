import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../user-selection/interfaces/user.interface';
import {
  fetchUsers,
  setSelectedUser,
} from '../../../shared/store/actions/users.actions';
import {
  selectHasUsersError,
  selectIsUsersLoading,
  selectSelectedUser,
  selectUsers,
} from '../../../shared/store/selectors/users.selectors';

@Component({
  selector: 'user-selection-container',
  templateUrl: './user-selection-container.component.html',
  styleUrls: ['./user-selection-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSelectionContainerComponent implements OnInit {
  readonly users$ = this.store.select(selectUsers);
  readonly selectedUser$ = this.store.select(selectSelectedUser);
  readonly isUsersLoading$ = this.store.select(selectIsUsersLoading);
  readonly hasUsersError$ = this.store.select(selectHasUsersError);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchUsers());
  }

  onSelectUser(selectedUser: User) {
    this.store.dispatch(setSelectedUser({ selectedUser }));
  }
}
