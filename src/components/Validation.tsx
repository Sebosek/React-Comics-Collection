import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Danger: FunctionComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
  </svg>
);

const ValidationItem = styled.div`
  align-items: center;
  color: var(--comics-color--danger);
  display: flex;
  font-size: 11px;
  margin-bottom: 2px;
  
  & > svg {
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }
`;

const Validation: FunctionComponent = ({ children }) => (
  <ValidationItem>
    <Danger />{children}
  </ValidationItem>
);

export default Validation;
