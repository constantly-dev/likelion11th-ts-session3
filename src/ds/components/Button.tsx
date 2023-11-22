import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <Container>{text}</Container>;
};

const Container = styled.button`
  width: 100%;
  min-width: 320px;
  max-width: 500px;
  padding: 14px 16px;
  text-align: center;
  border-radius: 12px;
  background: linear-gradient(93deg, #cf0 -3.88%, #40ffaf 103.41%);
  ${({ theme }) => theme.typography.title1}
  color: #fff;
`;
export default Button;
