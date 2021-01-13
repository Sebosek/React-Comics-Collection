import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: boolean;
  icon?: JSX.Element;
}

interface LabelProps {
  required: boolean;
}

interface WrapperProps {
  error: boolean;
}

const Wrapper = styled.label<WrapperProps>`
  color: var(--comics-control--color);
  display: flex;
  flex-direction: column;
  
  ${(props) => (props.error ? `
    --comics-control--shadow: 0 0 20px rgba(255, 65, 77, .3), 0 12px 48px -12px rgba(255, 65, 77, .5);
    --comics-control--border: 1px solid var(--comics-color--danger);
    --comics-control--color: var(--comics-color--danger);
  ` : null)}
`;

const Label = styled.div<LabelProps>`
  display: block;
  font-size: 12px;
  font-weight: 500;
  padding-bottom: 8px;
  
  ${(props) => (props.required ? `&:after {
    color: var(--comics-color--danger);
    content: '*';
    padding-left: 4px;
  }` : null)}
`;

const TextBox = styled.div`
  background: #ffffff;
  border: var(--comics-control--border);
  border-radius: var(--comics-control--border-radius);
  box-shadow: none;
  display: block;
  font-size: 14px;
  line-height: 1;
  padding: 18px 16px 0 16px;
  transition: 300ms linear box-shadow;
  
  &:focus-within {
    box-shadow: var(--comics-control--shadow);
  }
`;

const TextField = styled.input`
  background: transparent;
  border: none;
  margin-bottom: 2px;
  width: 100%;
  
  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  margin-bottom: 4px;
  
  &:empty {
    margin-bottom: 16px;
  }
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ children,
  label,
  required = false,
  error = false,
  ...rest }, ref) => (
    <Wrapper error={error}>
      <Label required={required}>{label}</Label>
      <TextBox>
        <TextField {...rest} ref={ref} />
        <Content>{children}</Content>
      </TextBox>
    </Wrapper>
));

export default Input;
