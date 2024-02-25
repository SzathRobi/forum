import { createReducer, on } from '@ngrx/store';

import { LOADING_WEB_REQUEST } from 'app/shared/constants/web-request-state.constants';
import { UsersState } from 'app/shared/interfaces/users-state.interface';
import {
  fetchUsers,
  fetchUsersError,
  FetchUsersSuccess,
  fetchUsersSuccess,
  SetSelectedUser,
  setSelectedUser,
} from '../../actions/users.actions';
import { initialState } from './users.state';

export const usersReducer = createReducer(
  initialState,

  on(fetchUsers, (state: UsersState) => ({
    ...state,
    users: LOADING_WEB_REQUEST,
  })),

  on(fetchUsersSuccess, (state: UsersState, { users }: FetchUsersSuccess) => ({
    ...state,
    users: {
      data: {
        users,
      },
    },
  })),

  on(
    setSelectedUser,
    (state: UsersState, { selectedUser }: SetSelectedUser) => ({
      ...state,
      selectedUser,
    })
  ),

  on(fetchUsersError, (state: UsersState) => ({
    ...state,
    users: {
      error: [],
    },
  }))
);
