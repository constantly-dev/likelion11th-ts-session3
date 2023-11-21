import styled from 'styled-components';
import Tab from './Tab';

export interface Tab {
  id: number;
  title: string;
}

interface TabBarProps {
  tabs: Tab[];
}

const TabBar = ({ tabs }: TabBarProps) => {
  return (
    <Container>
      {tabs.map((tab) => (
        <Tab key={tab.id}>{tab.title}</Tab>
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  gap: 40px;
`;

export default TabBar;
