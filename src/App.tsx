import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UserList from './pages/UserList';
import Header from './ds/components/Header';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './ds/theme';
import { GlobalStyles } from './ds/styles/GlobalStyles';
import { GlobalFonts } from './ds/styles/GlobalFonts';

function App() {
  const navigate = useNavigate();

  const tabs = [
    {
      id: 0,
      title: '로그인',
      type: 'login',
    },
    {
      id: 1,
      title: '회원가입',
      type: 'register',
    },
  ];

  // useEffect(() => {
  //   navigate('/users');
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalFonts />
      <Header onClickLogo={() => navigate('/')} tabs={tabs} />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<UserList />}></Route>
        {/* users주소를 그대로 쓰는 방법? */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
