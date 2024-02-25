import { StandardWebRequestState } from 'app/shared/interfaces/web-request-state.interface';
import { User } from './user.interface';

export interface UsersState {
  users: User[];
  selectedUser?: User;
}

export type UsersWebRequestState = StandardWebRequestState<UsersState>;
