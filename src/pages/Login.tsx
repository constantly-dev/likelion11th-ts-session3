import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../api/FetchUsers';
import Button from '../ds/components/Button';
import Input from '../ds/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginValidation } from '../validators/LoginValidation';
import { LoginError } from '../types/LoginPayload';

type LoginValues = {
  email: string;
  password: string;
};

const Login = () => {
  const [ResError, setResError] = useState<LoginError>();

  const {
    register,
    handleSubmit,
    clearErrors,
    trigger: hookFormTrigger,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: yupResolver(LoginValidation),
    mode: 'onSubmit',
  });
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('/api/auth/login', updateUser, {
    onSuccess: async (data) => {
      const Res = await data.json();
      if (data.status == 200) {
        alert(Res.data.message);
        navigate('/');
      } else {
        setResError(Res);
      }
    },
  });
  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    trigger(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <AllContainer>
          <Title>로그인</Title>
          <SubContainer>
            <InputContainer>
              <Input
                name="email"
                type="email"
                title="이메일"
                register={register('email')}
                errors={errors}
                errorCode={
                  ResError?.error.code === 'not_registered_email' ? true : false
                }
                errorMsg={ResError?.error.message}
                onBlur={() => hookFormTrigger('email')}
                onFocus={() => clearErrors('email')}
              />
              <Input
                name="password"
                type="password"
                title="비밀번호"
                register={register('password')}
                errors={errors}
                errorCode={
                  ResError?.error.code === 'wrong_password' ? true : false
                }
                errorMsg={ResError?.error.message}
                onBlur={() => hookFormTrigger('password')}
                onFocus={() => clearErrors('password')}
              />
            </InputContainer>
            <Button text="로그인"></Button>
          </SubContainer>
        </AllContainer>
      </form>
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
