import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
  width: 100%;
  height: 50vh;

  background: ${({
    theme: {
      colors: { primaryHex },
    },
  }) => `${primaryHex}`};

  ${({ direction }) =>
    direction === 'right'
      ? `clip-path: polygon(0 0, 100% 5vh, 100% 100%, 0 100%)`
      : `clip-path: polygon(0 5vh, 100% 0, 100% 100%, 0 100%)`};
`;

function Divider({ direction, className }) {
  return (
    <StyledDivider className={className} direction={direction}></StyledDivider>
  );
}

export default Divider;
