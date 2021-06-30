import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

function Hero({ children }) {
  return <StyledHero>{children}</StyledHero>;
}

export default Hero;
