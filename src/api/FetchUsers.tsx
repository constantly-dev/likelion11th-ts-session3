export const fetcher = async (url: string) => {
  const result = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`);
  return result.json();
};

//  eslint-disable-next-line
export const updateUser = async (url: string, { arg }: { arg: any }) => {
  const result = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  });
  return result;
};
