import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Rating from './Rating';

interface UploadProps extends InputHTMLAttributes<HTMLInputElement> {
  image?: string;
  onRemoveCover?: () => void;
}

const Container = styled.label<UploadProps>`
  ${(props) => (props.image ? `
    background-image: url('${props.image}');
    background-size: cover;
    background-position: center center;
    box-shadow: 0 16px 32px rgba(10, 40, 90, .35);
  ` : `
    border: 4px dashed #E5E5E5;
  `)}
  
  border-radius: 32px;
  color: var(--comics-color--font-secondary);
  cursor: pointer;
  display: grid;
  font-weight: 500;
  position: relative;
  transition: 300ms linear box-shadow;

  & > * {
    grid-area: 1/1;
  }
`;

const Center = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Icon = styled.div`
  height: 36px;
  width: 36px;
  
  & > svg {
    height: 100%;
    width: 100%;
  }
`;

const Input = styled.input`
  display: none;
  position: absolute;
  top: -9999px;
  left: -9999px;
  height: 1px;
  width: 1px;
`;

const Controls = styled.div`
  bottom: -20px;
  display: flex;
  position: absolute;
  justify-content: center;
  width: 100%;
`;

const Remove = styled.button`
  align-items: center;
  background: rgba(255, 255, 255, .75);
  border: none;
  border-radius: 20px;
  color: var(--comics-color--danger);
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  flex-direction: row;
  font-weight: 500;
  padding: 20px;
  position: absolute;
  text-shadow: 1px 1px 1px #ffffff;
  top: 20px;
  right: 20px;
  
  & > svg {
    margin-right: 4px;
    filter: drop-shadow(1px 1px 1px #ffffff);
  }
`;

const Upload: FunctionComponent<UploadProps> = ({ image,
  onRemoveCover,
  children,
  ...rest }) => (
    <Container image={image}>
      <svg viewBox="0 0 4 3" />
      {image
        ? (
          <Remove onClick={onRemoveCover}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
            <span>Remove cover</span>
          </Remove>
        )
        : (
          <Center>
            <Icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415L12 12.586zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z" />
              </svg>
            </Icon>
            <span>Upload cover</span>
          </Center>
        )}
      <Input {...rest} type="file" />
      <Controls>
        {children}
      </Controls>
    </Container>
);

export default Upload;
