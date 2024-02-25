type Role = 0 | 1 | 2 | 3;

export interface Author {
  email: string;
  id: number;
  name: string;
  role: Role;
}
