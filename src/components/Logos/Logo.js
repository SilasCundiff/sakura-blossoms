import React from 'react';
import styled from 'styled-components';
import Sakura from '../../assets/Sakura.js';
const StyledLogo = styled.div`
  & .logoSVG {
    height: ${({ height }) => (height ? height : '20px')};
    margin: 0;
  }
`;

function Logo({ children, className, height }) {
  return (
    <StyledLogo className={className} height={height}>
      <Sakura className='logoSVG' /> <span>{children}</span>
    </StyledLogo>
  );
}

export default Logo;
