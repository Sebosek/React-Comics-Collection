import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface TagProps {
  active?: boolean;
  value: string;
}

const Knob = styled.button`
  background: #ffffff;
  border: 1px solid #E5E5E5; // TODO: define CSS variable
  border-radius: 16px;       // TODO: define CSS variable
  box-shadow: 0 4px 12px rgba(229, 229, 229, .5);
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;           // TODO: define CSS variable
  line-height: 1;
  padding: 12px 20px;
  margin-bottom: 16px;
  margin-right: 16px;
  
  &:last-child {
    margin-right: 0;
  }
`;

const ActiveKnob = styled(Knob)`
  background: var(--comics-color--primary);
  border-color: var(--comics-color--primary);
  box-shadow: 0 4px 12px rgba(21, 195, 154, .5);
  color: var(--comics-color--font--inverse);
`;

const Tag: FunctionComponent<TagProps> = ({ value, active = false }) => (
  active
    ? <ActiveKnob>{value}</ActiveKnob>
    : <Knob>{value}</Knob>
);

export default Tag;
