import { User } from 'app/user-selection/interfaces/user.interface';
import { UsersWebRequestState } from 'app/user-selection/interfaces/users-web-request-state.interface';

export interface UsersState {
  users: UsersWebRequestState;
  selectedUser?: User;
}
