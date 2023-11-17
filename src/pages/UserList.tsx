import useSWR from 'swr';
import styled from 'styled-components';
import { fetcher } from '../api/FetchUsers';
import { UsersDataType } from '../payload/UsersData';

const UserList = () => {
  const { data, error } = useSWR<UsersDataType>('/api/users', fetcher);

  if (error) return <div>데이터를 불러오는 중에 오류가 발생했습니다.</div>;
  if (!data) return <div>로딩 중...</div>;
  // 이 로직은 이해가 가는데, 왜 아래 map에서 data는 오류가 안나는가?

  return (
    <>
      {data.data.users.map((item, index) => (
        <UserContainer key={index}>
          <div>{item.email}</div>
          <div>{item.username}</div>
        </UserContainer>
      ))}
    </>
  );
};
const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 4px 0;
  border-radius: 5px;
  padding: 2px 5px;
`;
export default UserList;
