import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { updateUser } from '../api/FetchUsers';
import { useNavigate } from 'react-router-dom';
import Input from '../ds/components/Input';
import Button from '../ds/components/Button';

type RegisterValues = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterValues>();
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('/api/auth/register', updateUser, {
    onSuccess: (data) => {
      if (data.status == 200) {
        navigate('/login');
      } else {
        alert('등록 중 오류가 발생했습니다.');
      }
    },
  });

  const onSubmit: SubmitHandler<RegisterValues> = (data) => {
    trigger(data);
  };

  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="username" {...register('username')} />
        <input type="email" placeholder="email" {...register('email')} />
        <input
          type="password"
          placeholder="password"
          {...register('password')}
        />
        <input type="submit" />
      </form>
      <AllContainer>
        <Title>회원가입</Title>
        <SubContainer>
          <InputContainer>
            <Input title="이름" isError={false} />
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

export default Register;
