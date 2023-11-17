import { useForm, SubmitHandler } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { updateUser } from '../api/FetchUsers';
import { useNavigate } from 'react-router-dom';

export type RegisterValues = {
  username?: string;
  // 왜 여기를 ?로 처리를 해야할까?
  email: string;
  password: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterValues>();
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('/api/auth/register', updateUser, {
    onSuccess: (data) => {
      // console.log('이게 뭔데', data.json());
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
    </>
  );
};

export default Register;
