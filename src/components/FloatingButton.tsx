import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface FloatingButtonProps {
  onClick: () => void;
}

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
  </svg>
);

const Button = styled.a`
  align-items: center;
  background: var(--comics-color--primary);
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(21, 195, 154, .5);
  color: #ffffff;
  cursor: pointer;
  display: flex;
  position: fixed;
  bottom: 40px;
  right: 40px;
  justify-content: center;
  transition: 300ms linear box-shadow;
  user-select: none;
  outline: none;
  height: 64px;
  width: 64px;
  
  & > svg {
    height: 40px;
    width: 40px;
  }
`;

const FloatingButton: FunctionComponent<FloatingButtonProps> = ({ onClick }) => (
  <Button onClick={(_) => onClick()}>
    <Icon />
  </Button>
);

export default FloatingButton;
