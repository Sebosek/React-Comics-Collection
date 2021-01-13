import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface BackgroundProps {
  image: string;
}

interface ComicsProps {
  image: string;
  title: string;
}

const Name = styled.div`
  align-items: end;
  background: linear-gradient(transparent, rgba(0, 0, 0, .5));
  bottom: 0;
  border-radius: 0 0 32px 32px;
  color: var(--comics-color--font--inverse);
  display: flex;
  height: 30%;
  padding: 32px;
  position: absolute;
  width: 100%;
`;
const Cover = styled.div<BackgroundProps>`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  background-position: center center;
  border-radius: 32px;
  box-shadow: 0 16px 32px rgba(10, 40, 90, .35);
  display: grid;
  position: relative;
  
  & > * {
    grid-area: 1/1;
  }
`;
const Controls = styled.div`
  bottom: -20px;
  display: flex;
  position: absolute;
  justify-content: center;
  width: 100%;
`;

const Comics: FunctionComponent<ComicsProps> = ({ title, image, children }) => (
  <Cover image={image}>
    <svg viewBox="0 0 4 3" />
    <Name>{title}</Name>
    <Controls>
      {children}
    </Controls>
  </Cover>
);

// const Wrapper = styled.div`
//   cursor: pointer;
//   perspective: 400px;
// `;
// const Comics: FunctionComponent<TileProps> = ({ title, image, children }) => (
//   <Wrapper>
//     <Ratio image={image}>
//       <svg viewBox="0 0 4 3" />
//       <Title>{title}</Title>
//       <Controls>
//         <Rating />
//       </Controls>
//     </Ratio>
//   </Wrapper>
// );

export default Comics;
