import * as yup from 'yup';

export const RegisterValidation = yup.object().shape({
  username: yup.string().required('이름을 입력해주세요'),
  email: yup
    .string()
    .required('이메일을 입력해주세요')
    .email('이메일 형식이 올바르지 않습니다'),
  password: yup.string().required('비밀번호를 입력해주세요'),
  // .matches(
  //   /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,14})/,
  //   '비밀번호를 잘못 입력했습니다. ',
  // ),
  // .min(8, '사용하실 수 없는 비밀번호 입니다.')
  // .max(14, '사용하실 수 없는 비밀번호 입니다.'),
});
