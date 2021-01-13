import React from 'react';
import styled from 'styled-components';
import Eyes from './eyes.svg';

const Illustration = styled.img`
  display: inline-block;
  height: 50%;
  width: 50%;
`;

const Center = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: 2;
`;

const Description = styled.div`
  color: var(--comics-color--font-secondary);
`;

const NoRecords = () => (
  <Center>
    <Title>No comics found!</Title>
    <Description>Start tracking your collection and add the first one!</Description>
    <Illustration src={Eyes} />
  </Center>
);

export default NoRecords;
