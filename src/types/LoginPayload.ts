interface Data {
  jwt: string;
  message: string;
  username: string;
}
export interface LoginData {
  data: Data;
}

interface Error {
  code: string;
  message: string;
}

export interface LoginError {
  error: Error;
}
