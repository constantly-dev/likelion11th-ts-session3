import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterValidation } from '../validators/RegisterValidation';
import { updateUser } from '../api/FetchUsers';
import { RegisterError } from '../types/RegisterPayload';
import Button from '../ds/components/Button';
import Input from '../ds/components/Input';

type RegisterValues = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const [ResError, setResError] = useState<RegisterError>();

  const {
    register,
    handleSubmit,
    clearErrors,
    trigger: hookFormTrigger,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: yupResolver(RegisterValidation),
    mode: 'onSubmit',
  });
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('/api/auth/register', updateUser, {
    onSuccess: async (data) => {
      const Res = await data.json();
      if (data.status == 200) {
        alert(Res.data.message);
        navigate('/login');
      } else {
        setResError(Res);
      }
    },
  });

  const onSubmit: SubmitHandler<RegisterValues> = (data) => {
    trigger(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <AllContainer>
          <Title>회원가입</Title>
          <SubContainer>
            <InputContainer>
              <Input
                name="username"
                type="text"
                title="이름"
                register={register('username')}
                errors={errors}
                onBlur={() => hookFormTrigger('username')}
                onFocus={() => clearErrors('username')}
              />
              <Input
                name="email"
                type="email"
                title="이메일"
                register={register('email')}
                errors={errors}
                errorCode={
                  ResError?.error.code === 'conflict_email' ? true : false
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
                errorMsg={ResError?.error.message}
                onBlur={() => hookFormTrigger('password')}
                onFocus={() => clearErrors('password')}
              />
            </InputContainer>
            <Button text="회원가입"></Button>
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

export default Register;
