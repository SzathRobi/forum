import { NOT_ASKED_WEB_REQUEST } from 'app/shared/constants/web-request-state.constants';
import { UsersState } from 'app/shared/interfaces/users-state.interface';

export const initialState: UsersState = {
  users: NOT_ASKED_WEB_REQUEST,
};
