import React, { FunctionComponent, MouseEvent } from 'react';
import styled from 'styled-components';
import Star from './Star';

interface RatingProps {
  value?: number;
  onVote?: (value: number) => void;
}

const Wrapper = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, .9);
  border-radius: 20px;
  display: inline-flex;
  height: 40px;
  padding: 8px 20px;
`;

const Rating: FunctionComponent<RatingProps> = ({ value = 0,
  onVote }) => {
  const handleClick = (e: MouseEvent<SVGElement>, value: number) => {
    e.preventDefault();

    onVote && onVote(value);
  };

  return (
    <Wrapper>
      <Star onClick={(e) => handleClick(e, 1)} empty={value < 1} />
      <Star onClick={(e) => handleClick(e, 2)} empty={value < 2} />
      <Star onClick={(e) => handleClick(e, 3)} empty={value < 3} />
      <Star onClick={(e) => handleClick(e, 4)} empty={value < 4} />
      <Star onClick={(e) => handleClick(e, 5)} empty={value < 5} />
    </Wrapper>
  );
};

export default Rating;
