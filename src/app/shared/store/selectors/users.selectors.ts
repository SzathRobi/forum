import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UsersState } from '../../../shared/interfaces/users-state.interface';
import {
  isErrorState,
  isLoadingState,
  isResultState,
} from '../../../shared/typeguards/web-request-state.guards';
import { usersStoreFeatureName } from '../../../user-selection/constants/store.constants';

export const selectUsersFeature = createFeatureSelector<UsersState>(
  usersStoreFeatureName
);

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UsersState) =>
    state && isResultState(state.users) ? state.users.data.users : undefined
);

export const selectSelectedUser = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.selectedUser
);

export const selectIsUsersLoading = createSelector(
  selectUsersFeature,
  (state: UsersState) => isLoadingState(state.users)
);

export const selectHasUsersError = createSelector(
  selectUsersFeature,
  (state: UsersState) => isErrorState(state.users)
);
