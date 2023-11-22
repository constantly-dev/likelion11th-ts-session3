import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../api/FetchUsers';
import Button from '../ds/components/Button';
import Input from '../ds/components/Input';

type LoginValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<LoginValues>();
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('/api/auth/login', updateUser, {
    onSuccess: (data) => {
      if (data.status == 200) {
        navigate('/users');
      } else {
        alert('로그인 중 오류가 발생했습니다.');
      }
    },
  });
  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    trigger(data);
  };

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email" {...register('email')} />
        <input
          type="password"
          placeholder="password"
          {...register('password')}
        />
        <input type="submit" />
      </form>
      <AllContainer>
        <Title>로그인</Title>
        <SubContainer>
          <InputContainer>
            <Input title="이메일" isError={false} />
            <Input title="비밀번호" isError={false} />
          </InputContainer>
          <Button text="로그인"></Button>
        </SubContainer>
      </AllContainer>
    </>
  );
};

const AllContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  margin: 0 auto;
  margin-top: 100px;
`;
const Title = styled.p`
  color: ${({ theme }) => theme.color.gray1};
  ${({ theme }) => theme.typography.title1}
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

export default Login;
