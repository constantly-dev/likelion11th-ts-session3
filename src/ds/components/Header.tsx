import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../icons/Lion.svg';
import TabBar, { Tab } from './TabBar';

interface HeaderProps {
  onClickLogo: () => void;
  tabs: Tab[];
}
const Header = ({ onClickLogo, tabs }: HeaderProps) => {
  return (
    <Container>
      <InnerContainer>
        <Logo onClick={onClickLogo} />
        <TabBar tabs={tabs} />
      </InnerContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
  position: sticky;
  background: #fff;
  top: 0;
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
