import { useForm, SubmitHandler } from 'react-hook-form';

type LoginValue = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<LoginValue>();

  const onSubmit: SubmitHandler<LoginValue> = (data) => {
    console.log(data);
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
