import { Role } from 'app/shared/types/role.type';

export interface Author {
  email: string;
  id: number;
  name: string;
  role: Role;
}
