export interface UsersDataType {
  data: { users: RegisterType[] };
}

interface RegisterType {
  email: string;
  password: string;
  username: string;
}
