import React, { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import './Star.scss';

interface StarProps extends HTMLAttributes<SVGElement> {
  empty?: boolean;
}

const Star: FunctionComponent<StarProps> = ({ empty = false, ...rest }) => (
  <svg
    className={classnames('star', { empty })}
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path id="fill" d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
    <path id="border" d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
  </svg>
);

export default Star;
