import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../api/FetchUsers';
import Button from '../ds/components/Button';
import Input from '../ds/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginValidation } from '../validators/LoginValidation';

type LoginValues = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    // watch,
    trigger: hookFormTrigger,
    //swr trigger와 hook-form trigger이름이 겹쳐서 변경해보자

    formState: { errors },
  } = useForm<LoginValues>({
    resolver: yupResolver(LoginValidation),
    // mode: 'onChange',
  });
  // const inputValue = watch();
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('/api/auth/login', updateUser, {
    onSuccess: async (data) => {
      const successRes = await data.json();
      alert(successRes.data.message);
      if (data.status == 200) {
        navigate('/');
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
  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    trigger(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* noValidate는 기본 브라우저 validation을 제거 */}
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

export default Login;
