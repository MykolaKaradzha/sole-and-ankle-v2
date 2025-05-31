import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';

const Logo = (props) => {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 32px;
  margin: auto 0;
  width: min-content;
  height: fit-content;
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
