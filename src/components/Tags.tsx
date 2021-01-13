import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  --comics-tags-items--space: 24px;
  
  padding: 0;
  position: relative;
  margin-bottom: 54px;
`;

const Title = styled.div`
  color: var(--comics-color--font-secondary);
  display: block;
  font-size: 12px;
  margin: 0 var(--comics-tags-items--space) 8px;
`;

const Items = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  padding-left: var(--comics-tags-items--space);
  scroll-behavior: smooth;
  scrollbar-width: none;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tags: FunctionComponent = ({ children }) => (
  <Wrapper>
    <Title>Tags:</Title>
    <Items>{children}</Items>
  </Wrapper>
);

export default Tags;
