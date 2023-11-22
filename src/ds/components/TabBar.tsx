import styled from 'styled-components';
import Tab from './Tab';
import { useNavigate } from 'react-router-dom';

export interface Tab {
  id: number;
  title: string;
  type: string;
}

interface TabBarProps {
  tabs: Tab[];
}

const TabBar = ({ tabs }: TabBarProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      {tabs.map((tab) => (
        <Tab key={tab.id} onClickTab={() => navigate(`/${tab.type}`)}>
          {tab.title}
        </Tab>
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  gap: 40px;
`;

export default TabBar;
