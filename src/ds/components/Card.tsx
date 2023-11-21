import styled from 'styled-components';

interface CardProps {
  email: string;
  userName: string;
}
const Card = ({ email, userName }: CardProps) => {
  return (
    <Container>
      <EmailWrapper>{email}</EmailWrapper>
      <UserNameWrapper>{userName}</UserNameWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px #e5e8f0;
`;
const EmailWrapper = styled.div`
  ${({ theme }) => theme.typography.body1}
  color: ${({ theme }) => theme.color.gray2};
`;
const UserNameWrapper = styled.div`
  ${({ theme }) => theme.typography.title1}
  color: ${({ theme }) => theme.color.gray1};
`;

export default Card;
