import styled from 'styled-components';
import lionLogo from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const goUsers = () => {
    navigate('/users');
  };
  const goRegister = () => {
    navigate('/register');
  };
  const goLogin = () => {
    navigate('/login');
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoWrapper onClick={goUsers}>
          <Logo src={lionLogo} />
        </LogoWrapper>
        <NavContainer>
          <LoginNav onClick={goLogin}>로그인</LoginNav>
          <RegisterNav onClick={goRegister}>회원가입</RegisterNav>
        </NavContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #ffffff;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 20px;
`;
const LogoWrapper = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 50px;
  height: 100%;
`;
const NavContainer = styled.div`
  width: 200px;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
`;
const LoginNav = styled.button`
  font-size: 20px;
  font-weight: 700;
  padding: 20px 0;
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
  &:hover,
  :checked {
    color: #2ae28a;
    border-bottom: 4px solid #2ae28a;
  }
`;
const RegisterNav = styled.button`
  font-size: 20px;
  font-weight: 700;
  padding: 20px 0;
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
  &:hover,
  :checked {
    color: #2ae28a;
    border-bottom: 4px solid #2ae28a;
  }
`;

export default Header;
