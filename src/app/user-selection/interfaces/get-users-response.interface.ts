import { User } from './user.interface';

export interface GetUsersResponse {
  status: number;
  message: string;
  data: User[];
}
