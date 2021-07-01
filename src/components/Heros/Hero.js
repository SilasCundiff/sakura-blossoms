import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

function Hero({ children, className }) {
  return <StyledHero className={className}>{children}</StyledHero>;
}

export default Hero;
