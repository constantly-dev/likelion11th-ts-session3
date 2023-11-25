import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../icons/Lion.svg';
import TabBar, { Tab } from './TabBar';

interface HeaderProps {
  onClickLogo: () => void;
  tabs: Tab[];
  username: string | null;
  path: string;
}
const Header = ({ onClickLogo, tabs, username, path }: HeaderProps) => {
  return (
    <Container>
      <InnerContainer>
        <Logo onClick={onClickLogo} />
        {username ? (
          <TabBar
            tabs={[
              { id: 3, title: `${username}님 안녕하세요`, type: 'hi' },
              {
                id: 4,
                title: '로그아웃',
                type: 'logout',
              },
            ]}
            path={path}
          />
        ) : (
          <TabBar tabs={tabs} path={path} />
        )}
      </InnerContainer>
    </Container>
  );
};
const Container = styled.div`
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background: #fff;
`;
const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled(LogoSvg)`
  cursor: pointer;
`;
export default Header;
