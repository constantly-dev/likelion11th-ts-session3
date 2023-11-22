import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../api/FetchUsers';
import Button from '../ds/components/Button';
import Input from '../ds/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterValidation } from '../validators/RegisterValidation';

type RegisterValues = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    trigger: hookFormTrigger,
    formState: { errors },
  } = useForm<RegisterValues>({ resolver: yupResolver(RegisterValidation) });
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('/api/auth/register', updateUser, {
    onSuccess: async (data) => {
      const successRes = await data.json();
      alert(successRes.data.message);
      if (data.status == 200) {
        navigate('/login');
      }
    },
    onError: async (error) => {
      const errorRes = await error.json();
      alert(errorRes);
      if (error.status == 400) {
        navigate('/login');
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
              />
              <Input
                name="email"
                type="email"
                title="이메일"
                register={register('email')}
                errors={errors}
                onBlur={() => hookFormTrigger('email')}
              />
              <Input
                name="password"
                type="password"
                title="비밀번호"
                register={register('password')}
                errors={errors}
                onBlur={() => hookFormTrigger('password')}
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

export default Register;
