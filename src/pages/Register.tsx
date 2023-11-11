import { useForm, SubmitHandler } from 'react-hook-form';

type RegisterValue = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterValue>();

  const onSubmit: SubmitHandler<RegisterValue> = (data) => {
    console.log(data);
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
