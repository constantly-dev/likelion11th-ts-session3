import styled from 'styled-components';
import { PropsWithChildren } from 'react';

interface TapProps {
  isActive?: boolean;
}
const Tab = ({ isActive = false, children }: PropsWithChildren<TapProps>) => {
  return <Button $isActive={isActive}>{children}</Button>;
};

const Button = styled.button<{ $isActive: boolean }>`
  padding: ${({ $isActive }) => ($isActive ? '22px 0 18px 0' : '22px 0')};
  border-bottom: ${({ $isActive, theme }) =>
    $isActive && `4px solid ${theme.color.green}`};
  ${({ theme }) => theme.typography.title1};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.color.green : theme.color.gray1};

  transition: border 0.2s ease-in-out;

  &:hover {
    padding: 22px 0 18px 0;
    color: ${({ theme }) => theme.color.green};
    border-bottom: 4px solid ${({ theme }) => theme.color.green};
  }
`;
export default Tab;
