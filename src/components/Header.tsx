import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
  icon?: React.ReactNode;
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  min-height: 70px;
  padding: 0 24px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: normal;
`;

const Icon = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  margin-right: 16px;
  
  &:empty {
    margin-right: 0;
  }
`;

const Header: FunctionComponent<HeaderProps> = ({ title = 'Comics collection',
  icon,
  children }) => (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      {children}
    </Wrapper>
);

export default Header;
