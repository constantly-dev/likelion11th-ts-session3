// import { useState } from 'react';
import styled from 'styled-components';

interface InputProps {
  name: string;
  title: string;
  type: string;
  // eslint-disable-next-line
  register?: any;
  // eslint-disable-next-line
  errors: any;
  errorCode?: boolean;
  errorMsg?: string;
  onBlur?: () => void;
  onFocus?: () => void;
}
const Input = ({ name, title, type, ...props }: InputProps) => {
  const { register, errors, onBlur, onFocus, errorCode, errorMsg } = props;

  return (
    <Container>
      <DefaultContainer>
        <TitleBox>{title}</TitleBox>
        <InputBox
          type={type}
          {...register}
          onBlur={onBlur}
          onFocus={onFocus}
          isError={errors[name] ? true : false}
          // isError={!!errors[name]}
        />
      </DefaultContainer>
      {errors[name] && <HelperText>{errors[name].message}</HelperText>}
      {errorCode && !errors[name] && <HelperText>{errorMsg}</HelperText>}
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

const InputBox = styled.input<{ isError: boolean }>`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ isError, theme }) => (isError ? theme.color.red : theme.color.gray3)};

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.gray2};
  }
  &:focus {
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
