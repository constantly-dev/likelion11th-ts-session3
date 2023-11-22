import styled from 'styled-components';

interface InputProps {
  name: string;
  title: string;
  type: string;
  // eslint-disable-next-line
  register?: any;
  // eslint-disable-next-line
  errors: any;
  onBlur?: () => void;
  // 모든 input에 validatio/이 속성이 사용되는건 아니니까 이렇게 처리하는게 맞을까?
}
const Input = ({ name, title, type, ...props }: InputProps) => {
  const { register, errors, onBlur } = props;
  // props가 많을때 이렇게 빼줘서 표현 가능하다!

  return (
    <Container>
      <DefaultContainer>
        <TitleBox>{title}</TitleBox>
        <InputBox
          type={type}
          {...register}
          onBlur={onBlur}
          isError={errors[name] ? true : false}
          // isError={!!errors[name]}도 가능
        />
      </DefaultContainer>
      {errors[name] && <HelperText>{errors[name].message}</HelperText>}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const DefaultContainer = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const TitleBox = styled.div`
  color: ${({ theme }) => theme.color.gray1};
  ${({ theme }) => theme.typography.body1}
`;
// Q. text단독이면 div보다 p가 맞는가?

const InputBox = styled.input<{ isError: boolean }>`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ isError, theme }) => (isError ? theme.color.red : theme.color.gray3)};

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.gray2};
  }
  &:active {
    border: 1px solid ${({ theme }) => theme.color.gray1};
  }
  color: ${({ theme }) => theme.color.gray1};
  ${({ theme }) => theme.typography.body1}
`;
const HelperText = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.red};
  ${({ theme }) => theme.typography.body1}
`;

export default Input;
