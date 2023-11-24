// Post-Login-Error
interface Error {
  code: string;
  message: string;
}

export interface LoginError {
  error: Error;
}
