export const fetcher = async (url: string) => {
  const result = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`);
  return result.json();
};
//json()은 무엇인가..?
import { RegisterValues } from '../pages/Register';

export const updateUser = async (
  url: string,
  { arg }: { arg: RegisterValues },
) => {
  const result = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  });
  return result;
};
