import { useForm, SubmitHandler } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { updateUser } from '../api/FetchUsers';
import { useNavigate } from 'react-router-dom';

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
    </>
  );
};

export default Login;
