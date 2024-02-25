import { createAction, props } from '@ngrx/store';
import { tag } from 'app/user-selection/constants/store.constants';

import { User } from 'app/user-selection/interfaces/user.interface';

export interface FetchUsersSuccess {
  users: User[];
}

export interface SetSelectedUser {
  selectedUser: User;
}

export const fetchUsers = createAction(`${tag} fetch users`);

export const fetchUsersSuccess = createAction(
  `${tag} fetch users success`,
  props<FetchUsersSuccess>()
);

export const fetchUsersError = createAction(`${tag} fetch users error`);

export const setSelectedUser = createAction(
  `${tag} set selected user`,
  props<SetSelectedUser>()
);
