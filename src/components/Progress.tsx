import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const Line = styled.div`
  background: var(--comics-color--primary);
  display: block;
  width: calc(100% - 100px);
  height: 4px;
`;

const last0 = keyframes`
  0% { width: 20px; opacity: 1; }
  20% { width: 0; opacity: 0; }
`;

const last1 = keyframes`
  0% { width: 20px; opacity: 1; }
  20% { width: 20px; opacity: 1; }
  40% { width: 0; opacity: 0; }
`;

const last2 = keyframes`
  0% { width: 20px; opacity: 1; }
  40% { width: 20px; opacity: 1; }
  60% { width: 0; opacity: 0; }
`;

const last3 = keyframes`
  0% { width: 20px; opacity: 1; }
  60% { width: 20px; opacity: 1; }
  80% { width: 0; opacity: 0; }
`;

const Square = styled.div`
  background: var(--comics-color--primary);
  display: block;
  height: 4px;
  position: absolute;
  top: 0;
  left: calc(100% - 100px);
  width: 20px;
  animation-duration: 10s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  
  &:nth-last-child(1) {
    animation-name: ${last3};
    //background: red;
    left: calc(100% - 80px);
  }
  &:nth-last-child(2) {
    animation-name: ${last2};
    //background: black;
    left: calc(100% - 60px);
  }
  &:nth-last-child(3) {
    animation-name: ${last1};
    //background: aqua;
    left: calc(100% - 40px);
  }
  &:nth-last-child(4) {
    animation-name: ${last0};
    //background: yellow;
    left: calc(100% - 20px);
  }
`;

const Tunnel = styled.div`
  position: relative;
  width: 100%;
`;

const Progress: FunctionComponent = () => (
  <Tunnel>
    <Line />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
  </Tunnel>
);

export default Progress;
