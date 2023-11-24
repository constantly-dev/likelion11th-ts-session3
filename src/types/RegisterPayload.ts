// Post-Register-Error
// data도..?
interface Error {
  code: string;
  message: string;
}

export interface RegisterError {
  error: Error;
}
