import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled from 'styled-components';

export type ButtonSize = 'normal' | 'big';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

const ButtonSkeleton = styled.button<ButtonProps>`
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(229, 229, 229, .5);
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  justify-content: center;
  line-height: 1;
  max-width: 220px;
  min-width: 120px;
  padding: 12px 20px;
  text-align: center;
  
  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  ${(props) => (props.size === 'big' ? `
    height: 52px;
    min-width: 160px;
  ` : null)}
`;

const PrimaryButtonSkeleton = styled(ButtonSkeleton)`
  background: var(--comics-color--primary);
  border-color: var(--comics-color--primary);
  box-shadow: 0 4px 12px rgba(21, 195, 154, .5);
  color: var(--comics-color--font--inverse);
`;

const DangerButtonSkeleton = styled(ButtonSkeleton)`
  background: var(--comics-color--danger);
  border: 1px solid var(--comics-color--danger);
  box-shadow: 0 4px 12px rgba(255, 65, 77, .5);
  color: var(--comics-color--font--inverse);
`;

const Button: FunctionComponent<ButtonProps> = ({ size, children, ...rest }) => (
  <ButtonSkeleton size={size} {...rest}>
    <span>{children}</span>
  </ButtonSkeleton>
);

const PrimaryButton: FunctionComponent<ButtonProps> = ({ size, children, ...rest }) => (
  <PrimaryButtonSkeleton size={size} {...rest}>
    <span>{children}</span>
  </PrimaryButtonSkeleton>
);

const DangerButton: FunctionComponent<ButtonProps> = ({ size, children, ...rest }) => (
  <DangerButtonSkeleton size={size} {...rest}>
    <span>{children}</span>
  </DangerButtonSkeleton>
);

export {
  Button, PrimaryButton, DangerButton,
};
