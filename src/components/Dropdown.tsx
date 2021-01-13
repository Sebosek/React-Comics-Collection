import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--comics-color--control-bg);
  border-radius: var(--comics-control--border-radius);
  box-shadow: var(--comics-control--shadow);
  padding: calc(5 * var(--comics-unit));
  position: absolute;
  width: 100%;
`;

const ComicsPreview = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ComicsPreviewNames = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  width: 100%;
`;

const Dropdown: FunctionComponent = () => (
  <Wrapper>
    <ComicsPreview>
      <div className="preview" />
      <div className="names">
        <h3>Guardians of galaxy: Angela</h3>
        <span>Strážci galacie: Angela</span>
      </div>
    </ComicsPreview>
  </Wrapper>
);

export default Dropdown;
