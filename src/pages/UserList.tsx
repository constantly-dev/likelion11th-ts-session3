import useSWR from 'swr';
import styled from 'styled-components';
import { fetcher } from '../api/FetchUsers';
import { UsersDataType } from '../payload/UsersData';
import Card from '../ds/components/Card';
import { ReactComponent as BigLogoSvg } from '../ds/icons/BigLion.svg';
const UserList = () => {
  const { data, error } = useSWR<UsersDataType>('/api/users', fetcher);
  console.log(data);

  if (error) return <div>데이터를 불러오는 중에 오류가 발생했습니다.</div>;
  if (!data) return <div>로딩 중...</div>;

  return (
    <>
      <AllContainer>
        <BigLogoSvg />
        <CardContainer>
          {data.data.users.map((item, index) => (
            <Card key={index} email={item.email} userName={item.username} />
          ))}
        </CardContainer>
      </AllContainer>
    </>
  );
};
const AllContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-top: 60px;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

export default UserList;
