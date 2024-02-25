import { Role } from 'app/shared/types/role.type';

export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  role: Role;
}
