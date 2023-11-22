import styled from 'styled-components';
interface InputProps {
  title: string;
  isError: boolean;
}
const Input = ({ title, isError }: InputProps) => {
  return (
    <Container>
      <DefaultContainer>
        <TitleBox>{title}</TitleBox>
        <InputBox />
      </DefaultContainer>
      {isError && <HelperText>helper text</HelperText>}
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

const InputBox = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.gray2};
  color: ${({ theme }) => theme.color.gray1};
  ${({ theme }) => theme.typography.body1}
`;
const HelperText = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.red};
  ${({ theme }) => theme.typography.body1}
`;

export default Input;
