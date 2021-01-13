import React from 'react';
import styled from 'styled-components';

const ComicsCollection = styled.div`
  padding: 0 12px;
  perspective: 400px;
  perspective-origin: center bottom;
  //display: flex;
  //flex-direction: column-reverse;
  //align-items: center;
  
  & > * {
    display: block;
    margin-bottom: 50px;
  }
`;

export default ComicsCollection;
